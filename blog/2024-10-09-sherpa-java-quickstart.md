---
slug: sherpa-java-quickstart
title: 2024-10-09-基于sherpa的本地智能语音助手入门-Java Api版
authors: zihong
tags: [sherpa, asr, tts, kws]
---

sherpa是新一代Kaldi的部署框架。这里使用sherpa-onnx来实现一个本地智能语音助手。

它将支持流式的关键词唤醒和语音识别、文本转语音、热词等，且整个过程中无需互联网，可以没有GPU，适合部署在边缘侧/用户侧设备上。

考虑到java开发者和基于java的应用系统更为广泛，撰写此文，也为sherpa社区做一点微薄贡献。感谢sherpa开源社区。

<!-- truncate -->
## 写在前面
为何使用sherpa？因为我们的项目需要支持本地的、实时音频流处理，且性能较好的情况下硬件资源要求尽量低一些。而sherpa提供了工程化程度高的、不依赖特定模型的、完整的语音识别解决方案，且性能表现优异（可以使用低配置的设备在浏览器中访问[官方示例](https://k2-fsa.github.io/sherpa/huggingface/index.html)先体验效果和性能）。

为何使用sherpa-onnx？从官方的https://k2-fsa.github.io/sherpa/intro.html 中可以看到sherpa-onnx在平台、语言、特定子领域/特性的支持度是最全面的。

为何使用java api？除开简介中的因素外，java少了一些安装、依赖库冲突等问题（根据本人这种python新手在windows/ubuntu下安装和使用python api的感受，尽管成功但路径不一样，且坎坷都不一样），即java环境反而是最容易搭建成功的，对于java从业者也更容易根据调试信息来猜测api和数据用法。当然，其示例丰富度和官方支持度相比c++/python是有明显差距的。

## 基础概念
受限于本人技术能力，本篇介绍的概念/方法/用途不一定正确，且假设读者已经了解基本的java编程和语音识别基础理论。

sherpa-onnx社区提供了预训练的模型，以及多语言的Api文档和示例代码，其中支持度最好的是c++和python。对于使用java api来构建我们的项目，需要理解我们的项目是***通过jni来调用sherpa-onnx的动态库来使用已经预训练好的相关语音模型***，来实现语音相关功能。并不需要安装sherpa-onnx、训练模型等。换言之，在正常普通的java项目开发的基础上，了解和学习jni的基础知识是必须的，而java的平台无关性此时会受到sherpa-onnx动态库的影响，在不同的平台上应换用不同的动态库。

## 准备环境
java环境、jdk、maven等这些基础知识不再介绍。

sherpa-onnx的[官方文档](https://k2-fsa.github.io/sherpa/onnx/index.html)写的比较清楚，章节导航和内容长度也比较合理，建议先学习官方文档。

### sherpa-onnx的动态库获取
以下内容[官方文档对应章节](https://k2-fsa.github.io/sherpa/onnx/java-api/index.html)中也已描述的清楚，这里只进行补充。
首先注意动态库是区分平台的，需要根据部署设备的架构和操作系统来选择。
其次动态库可以选择下载官方提供的，也可以自己构建。建议选择前者，前者不满足时再考虑后者（需要搭建c++编译环境）。

这里稍微注意下，windows下自行构建jni的教程在：https://github.com/k2-fsa/sherpa-onnx/issues/882 。

### sherpa-onnx的预训练模型下载
可以在不同章节（如ASR/TTS/Keyword spotting的对应官方文档章节）里找对应的模型下载，也可以在https://k2-fsa.github.io/sherpa/onnx/pretrained_models/index.html 这里统一查看。

这里列举下本人项目中目前使用的模型：
1. 关键词检测：https://k2-fsa.github.io/sherpa/onnx/kws/pretrained_models/index.html#sherpa-onnx-kws-zipformer-wenetspeech-3-3m-2024-01-01-chinese 
1. ASR：https://k2-fsa.github.io/sherpa/onnx/pretrained_models/online-transducer/zipformer-transducer-models.html#csukuangfj-sherpa-onnx-streaming-zipformer-bilingual-zh-en-2023-02-20-bilingual-chinese-english
1. TTS： https://k2-fsa.github.io/sherpa/onnx/tts/pretrained_models/vits.html#aishell3-chinese-multi-speaker-174-speakers

### sherpa-onnx的java api库及示例获取
java api见[官方文档章节](https://k2-fsa.github.io/sherpa/onnx/java-api/build-jar.html)。我这边是将源码拷到项目中，方便调试和修改。java api的源码复杂度不高，没有过度封装和抽象。

java调用的示例代码在上述章节中也提到了，但确实数量较少。需要发挥一下主观能动性和大模型的能力，对比联想+连猜带蒙。

## 构建项目
java项目的基础结构这里不赘述。可以参考 https://github.com/haifengqiu/sherpa-onnx-java-demo/tree/main 。
### jni相关的vm配置
在idea的运行配置、启动脚本里增加一个java vm的参数配置：
```
-Djava.library.path=我的项目路径\sherpa-onnx\libs
```
其中libs下放置的就是对应平台的sherpa-onnx动态库，windows下是.dll，linux下是.so。
这个路径和目录结构都是自定义的，可以自己调整。如果是fatjar的运行方式，本目录建议放在jar外，类似于部署环境的本地环境变量/配置文件一般。
### 模型及相关文件的位置
和上文的动态库类似，也是在jar包外的文件目录下，目录组织结构没有限制，和对应的java调用代码中引用的decode/encode等路径保持一致即可。

## 各模型的业务用途
1. [关键词检测](https://k2-fsa.github.io/sherpa/onnx/kws/index.html)。本质是一个非常小的语音识别模型，这里用它来实现语音唤醒（一直监听音频流），类似小爱同学这种。这样就无需使用snowboy了。支持自定义、复数个关键词且不需要重新训练。
2. 语音识别。这里是在成功语音唤醒后，才会从语音唤醒模式切换到语音识别模式，对音频流进行语音识别，进行自己的业务处理。上文选用的[csukuangfj-sherpa-onnx-streaming-zipformer-bilingual-zh-en-2023-02-20-bilingual-chinese-english](https://k2-fsa.github.io/sherpa/onnx/pretrained_models/online-transducer/zipformer-transducer-models.html#csukuangfj-sherpa-onnx-streaming-zipformer-bilingual-zh-en-2023-02-20-bilingual-chinese-english)模型的识别率还可以、支持中英文混合、RTF表现优秀，支持热词。
3. [热词](https://k2-fsa.github.io/sherpa/onnx/hotwords/index.html)。使用热词是由于项目中有一些专业性的词汇，不设置热词的默认识别率比较低。热词也是可以自定义、复数个、不需要重新训练。
4. [文字转语音](https://k2-fsa.github.io/sherpa/onnx/tts/index.html)。项目中需要文字转语音来作为交互反馈，但只会有中文，所以选择的是仅支持中文的模型。支持多种音色（但没特别标准和合适的音色）。对数字/IP这些的读法并不合适。如果有更合适的模型和方法，请评论分享给我，谢谢。

## 常见问答(FAQs)
先看[官方文档的FAQs](https://k2-fsa.github.io/sherpa/onnx/faqs/index.html#frequently-asked-question-faqs)。
### The given version [17] is not supported, only version 1 to 10 is supported in this build。
运行时这个异常不是jdk的问题，jdk>8包括17 21都行，是因为windwos电脑上System32已经有onnxruntime.dll了。
将这个文件的所有者从TrustInstaller变更为管理员后，就可以完全控制了，将其备份，换成从sherpa官方下载jni里用的同名dll。
### java代码少/找不到/错误。
对比：对比官方的java示例代码，对比官方的python示例代码，举一反三和组合拼凑。

联想：从对比的代码联想可能的api，从调试中数据结构联想可能的作用，从源码命名和注释联想可能的用法。比如asr With endpoint detection看源码有rule，猜测其作用和调整尝试。

搜索：比如java的模型配置参数是有层级的（python的配置参数基本是扁平的），分散和隐藏在不同层次的config类里，那就搜索和一层层点进去看内嵌对象。

大模型：使用大模型，尤其是一些copliot如通义灵码等，来更改和优化代码、理解和猜测代码、分析错误原因。
### Java的asr/kws 实时语音唤醒和识别都正常，但加入hotwards的设置后，识别出第一句话后就会进程崩溃
多次dump文件后发现都是因为sherpa-onnx-jni.dll的异常：siginfo: EXCEPTION_ACCESS_VIOLATION (0xc0000005), reading address 0x0000000000000070。
Jni使用的下载的jni_sherpa-onnx-v1.10.27（26版本也有同样问题）。asr模型使用的是sherpa-onnx-streaming-zipformer-bilingual-zh-en-2023-02-20。跑在Win11 64位笔记本的CPU上（ubuntu也一样有该问题）。

反馈给社区后，很快给出了从master新构建的jni，验证后正常（win11/ubuntu）。官方预计在v1.10.28版本中修复。
