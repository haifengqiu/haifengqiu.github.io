"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[130],{7735:n=>{n.exports=JSON.parse('{"archive":{"blogPosts":[{"id":"sherpa-java-quickstart","metadata":{"permalink":"/blog/sherpa-java-quickstart","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2024-10-09-sherpa-java-quickstart.md","source":"@site/blog/2024-10-09-sherpa-java-quickstart.md","title":"2024-10-09-\u57fa\u4e8esherpa\u7684\u672c\u5730\u667a\u80fd\u8bed\u97f3\u52a9\u624b\u5165\u95e8-Java Api\u7248","description":"sherpa\u662f\u65b0\u4e00\u4ee3Kaldy\u7684\u90e8\u7f72\u6846\u67b6\u3002\u8fd9\u91cc\u4f7f\u7528sherpa-onnx\u6765\u5b9e\u73b0\u4e00\u4e2a\u672c\u5730\u667a\u80fd\u8bed\u97f3\u52a9\u624b\u3002","date":"2024-10-09T00:00:00.000Z","tags":[{"inline":false,"label":"sherpa","permalink":"/blog/tags/sherpa","description":"Sherpa tag description"},{"inline":false,"label":"asr","permalink":"/blog/tags/asr","description":"asr tag description"},{"inline":false,"label":"tts","permalink":"/blog/tags/tts","description":"tts tag description"},{"inline":false,"label":"kws","permalink":"/blog/tags/kws","description":"kws tag description"}],"readingTime":10.04,"hasTruncateMarker":true,"authors":[{"name":"\u6893\u5b8f","title":"\u695a\u95f2\u4eba/\u9ed1\u5417\u55bd","url":"https://github.com/haifengqiu","page":{"permalink":"/blog/authors/all-sebastien-lorber-articles"},"socials":{"github":"https://github.com/haifengqiu"},"imageURL":"https://avatars.githubusercontent.com/u/4132377?v=4","key":"zihong"}],"frontMatter":{"slug":"sherpa-java-quickstart","title":"2024-10-09-\u57fa\u4e8esherpa\u7684\u672c\u5730\u667a\u80fd\u8bed\u97f3\u52a9\u624b\u5165\u95e8-Java Api\u7248","authors":"zihong","tags":["sherpa","asr","tts","kws"]},"unlisted":false},"content":"sherpa\u662f\u65b0\u4e00\u4ee3Kaldy\u7684\u90e8\u7f72\u6846\u67b6\u3002\u8fd9\u91cc\u4f7f\u7528sherpa-onnx\u6765\u5b9e\u73b0\u4e00\u4e2a\u672c\u5730\u667a\u80fd\u8bed\u97f3\u52a9\u624b\u3002\\n\\n\u5b83\u5c06\u652f\u6301\u6d41\u5f0f\u7684\u5173\u952e\u8bcd\u5524\u9192\u548c\u8bed\u97f3\u8bc6\u522b\u3001\u6587\u672c\u8f6c\u8bed\u97f3\u3001\u70ed\u8bcd\u7b49\uff0c\u4e14\u6574\u4e2a\u8fc7\u7a0b\u4e2d\u65e0\u9700\u4e92\u8054\u7f51\uff0c\u53ef\u4ee5\u6ca1\u6709GPU\uff0c\u9002\u5408\u90e8\u7f72\u5728\u8fb9\u7f18\u4fa7/\u7528\u6237\u4fa7\u8bbe\u5907\u4e0a\u3002\\n\\n\u8003\u8651\u5230java\u5f00\u53d1\u8005\u548c\u57fa\u4e8ejava\u7684\u5e94\u7528\u7cfb\u7edf\u66f4\u4e3a\u5e7f\u6cdb\uff0c\u64b0\u5199\u6b64\u6587\uff0c\u4e5f\u4e3asherpa\u793e\u533a\u505a\u4e00\u70b9\u5fae\u8584\u8d21\u732e\u3002\u611f\u8c22sherpa\u5f00\u6e90\u793e\u533a\u3002\\n\\n\x3c!-- truncate --\x3e\\n## \u5199\u5728\u524d\u9762\\n\u4e3a\u4f55\u4f7f\u7528sherpa\uff1f\u56e0\u4e3a\u6211\u4eec\u7684\u9879\u76ee\u9700\u8981\u652f\u6301\u672c\u5730\u7684\u3001\u5b9e\u65f6\u97f3\u9891\u6d41\u5904\u7406\uff0c\u4e14\u6027\u80fd\u8f83\u597d\u7684\u60c5\u51b5\u4e0b\u786c\u4ef6\u8d44\u6e90\u8981\u6c42\u5c3d\u91cf\u4f4e\u4e00\u4e9b\u3002\u800csherpa\u63d0\u4f9b\u4e86\u5de5\u7a0b\u5316\u7a0b\u5ea6\u9ad8\u7684\u3001\u4e0d\u4f9d\u8d56\u7279\u5b9a\u6a21\u578b\u7684\u3001\u5b8c\u6574\u7684\u8bed\u97f3\u8bc6\u522b\u89e3\u51b3\u65b9\u6848\uff0c\u4e14\u6027\u80fd\u8868\u73b0\u4f18\u5f02\uff08\u53ef\u4ee5\u4f7f\u7528\u4f4e\u914d\u7f6e\u7684\u8bbe\u5907\u5728\u6d4f\u89c8\u5668\u4e2d\u8bbf\u95ee[\u5b98\u65b9\u793a\u4f8b](https://k2-fsa.github.io/sherpa/huggingface/index.html)\u5148\u4f53\u9a8c\u6548\u679c\u548c\u6027\u80fd\uff09\u3002\\n\\n\u4e3a\u4f55\u4f7f\u7528sherpa-onnx\uff1f\u4ece\u5b98\u65b9\u7684https://k2-fsa.github.io/sherpa/intro.html \u4e2d\u53ef\u4ee5\u770b\u5230sherpa-onnx\u5728\u5e73\u53f0\u3001\u8bed\u8a00\u3001\u7279\u5b9a\u5b50\u9886\u57df/\u7279\u6027\u7684\u652f\u6301\u5ea6\u662f\u6700\u5168\u9762\u7684\u3002\\n\\n\u4e3a\u4f55\u4f7f\u7528java api\uff1f\u9664\u5f00\u7b80\u4ecb\u4e2d\u7684\u56e0\u7d20\u5916\uff0cjava\u5c11\u4e86\u4e00\u4e9b\u5b89\u88c5\u3001\u4f9d\u8d56\u5e93\u51b2\u7a81\u7b49\u95ee\u9898\uff08\u6839\u636e\u672c\u4eba\u8fd9\u79cdpython\u65b0\u624b\u5728windows/ubuntu\u4e0b\u5b89\u88c5\u548c\u4f7f\u7528python api\u7684\u611f\u53d7\uff0c\u5c3d\u7ba1\u6210\u529f\u4f46\u8def\u5f84\u4e0d\u4e00\u6837\uff0c\u4e14\u574e\u5777\u90fd\u4e0d\u4e00\u6837\uff09\uff0c\u5373java\u73af\u5883\u53cd\u800c\u662f\u6700\u5bb9\u6613\u642d\u5efa\u6210\u529f\u7684\uff0c\u5bf9\u4e8ejava\u4ece\u4e1a\u8005\u4e5f\u66f4\u5bb9\u6613\u6839\u636e\u8c03\u8bd5\u4fe1\u606f\u6765\u731c\u6d4bapi\u548c\u6570\u636e\u7528\u6cd5\u3002\u5f53\u7136\uff0c\u5176\u793a\u4f8b\u4e30\u5bcc\u5ea6\u548c\u5b98\u65b9\u652f\u6301\u5ea6\u76f8\u6bd4c++/python\u662f\u6709\u660e\u663e\u5dee\u8ddd\u7684\u3002\\n\\n## \u57fa\u7840\u6982\u5ff5\\n\u53d7\u9650\u4e8e\u672c\u4eba\u6280\u672f\u80fd\u529b\uff0c\u672c\u7bc7\u4ecb\u7ecd\u7684\u6982\u5ff5/\u65b9\u6cd5/\u7528\u9014\u4e0d\u4e00\u5b9a\u6b63\u786e\uff0c\u4e14\u5047\u8bbe\u8bfb\u8005\u5df2\u7ecf\u4e86\u89e3\u57fa\u672c\u7684java\u7f16\u7a0b\u548c\u8bed\u97f3\u8bc6\u522b\u57fa\u7840\u7406\u8bba\u3002\\n\\nsherpa-onnx\u793e\u533a\u63d0\u4f9b\u4e86\u9884\u8bad\u7ec3\u7684\u6a21\u578b\uff0c\u4ee5\u53ca\u591a\u8bed\u8a00\u7684Api\u6587\u6863\u548c\u793a\u4f8b\u4ee3\u7801\uff0c\u5176\u4e2d\u652f\u6301\u5ea6\u6700\u597d\u7684\u662fc++\u548cpython\u3002\u5bf9\u4e8e\u4f7f\u7528java api\u6765\u6784\u5efa\u6211\u4eec\u7684\u9879\u76ee\uff0c\u9700\u8981\u7406\u89e3\u6211\u4eec\u7684\u9879\u76ee\u662f***\u901a\u8fc7jni\u6765\u8c03\u7528sherpa-onnx\u7684\u52a8\u6001\u5e93\u6765\u4f7f\u7528\u5df2\u7ecf\u9884\u8bad\u7ec3\u597d\u7684\u76f8\u5173\u8bed\u97f3\u6a21\u578b***\uff0c\u6765\u5b9e\u73b0\u8bed\u97f3\u76f8\u5173\u529f\u80fd\u3002\u5e76\u4e0d\u9700\u8981\u5b89\u88c5sherpa-onnx\u3001\u8bad\u7ec3\u6a21\u578b\u7b49\u3002\u6362\u8a00\u4e4b\uff0c\u5728\u6b63\u5e38\u666e\u901a\u7684java\u9879\u76ee\u5f00\u53d1\u7684\u57fa\u7840\u4e0a\uff0c\u4e86\u89e3\u548c\u5b66\u4e60jni\u7684\u57fa\u7840\u77e5\u8bc6\u662f\u5fc5\u987b\u7684\uff0c\u800cjava\u7684\u5e73\u53f0\u65e0\u5173\u6027\u6b64\u65f6\u4f1a\u53d7\u5230sherpa-onnx\u52a8\u6001\u5e93\u7684\u5f71\u54cd\uff0c\u5728\u4e0d\u540c\u7684\u5e73\u53f0\u4e0a\u5e94\u6362\u7528\u4e0d\u540c\u7684\u52a8\u6001\u5e93\u3002\\n\\n## \u51c6\u5907\u73af\u5883\\njava\u73af\u5883\u3001jdk\u3001maven\u7b49\u8fd9\u4e9b\u57fa\u7840\u77e5\u8bc6\u4e0d\u518d\u4ecb\u7ecd\u3002\\n\\nsherpa-onnx\u7684[\u5b98\u65b9\u6587\u6863](https://k2-fsa.github.io/sherpa/onnx/index.html)\u5199\u7684\u6bd4\u8f83\u6e05\u695a\uff0c\u7ae0\u8282\u5bfc\u822a\u548c\u5185\u5bb9\u957f\u5ea6\u4e5f\u6bd4\u8f83\u5408\u7406\uff0c\u5efa\u8bae\u5148\u5b66\u4e60\u5b98\u65b9\u6587\u6863\u3002\\n\\n### sherpa-onnx\u7684\u52a8\u6001\u5e93\u83b7\u53d6\\n\u4ee5\u4e0b\u5185\u5bb9[\u5b98\u65b9\u6587\u6863\u5bf9\u5e94\u7ae0\u8282](https://k2-fsa.github.io/sherpa/onnx/java-api/index.html)\u4e2d\u4e5f\u5df2\u63cf\u8ff0\u7684\u6e05\u695a\uff0c\u8fd9\u91cc\u53ea\u8fdb\u884c\u8865\u5145\u3002\\n\u9996\u5148\u6ce8\u610f\u52a8\u6001\u5e93\u662f\u533a\u5206\u5e73\u53f0\u7684\uff0c\u9700\u8981\u6839\u636e\u90e8\u7f72\u8bbe\u5907\u7684\u67b6\u6784\u548c\u64cd\u4f5c\u7cfb\u7edf\u6765\u9009\u62e9\u3002\\n\u5176\u6b21\u52a8\u6001\u5e93\u53ef\u4ee5\u9009\u62e9\u4e0b\u8f7d\u5b98\u65b9\u63d0\u4f9b\u7684\uff0c\u4e5f\u53ef\u4ee5\u81ea\u5df1\u6784\u5efa\u3002\u5efa\u8bae\u9009\u62e9\u524d\u8005\uff0c\u524d\u8005\u4e0d\u6ee1\u8db3\u65f6\u518d\u8003\u8651\u540e\u8005\uff08\u9700\u8981\u642d\u5efac++\u7f16\u8bd1\u73af\u5883\uff09\u3002\\n\\n\u8fd9\u91cc\u7a0d\u5fae\u6ce8\u610f\u4e0b\uff0cwindows\u4e0b\u81ea\u884c\u6784\u5efajni\u7684\u6559\u7a0b\u5728\uff1ahttps://github.com/k2-fsa/sherpa-onnx/issues/882 \u3002\\n\\n### sherpa-onnx\u7684\u9884\u8bad\u7ec3\u6a21\u578b\u4e0b\u8f7d\\n\u53ef\u4ee5\u5728\u4e0d\u540c\u7ae0\u8282\uff08\u5982ASR/TTS/Keyword spotting\u7684\u5bf9\u5e94\u5b98\u65b9\u6587\u6863\u7ae0\u8282\uff09\u91cc\u627e\u5bf9\u5e94\u7684\u6a21\u578b\u4e0b\u8f7d\uff0c\u4e5f\u53ef\u4ee5\u5728https://k2-fsa.github.io/sherpa/onnx/pretrained_models/index.html \u8fd9\u91cc\u7edf\u4e00\u67e5\u770b\u3002\\n\\n\u8fd9\u91cc\u5217\u4e3e\u4e0b\u672c\u4eba\u9879\u76ee\u4e2d\u76ee\u524d\u4f7f\u7528\u7684\u6a21\u578b\uff1a\\n1. \u5173\u952e\u8bcd\u68c0\u6d4b\uff1ahttps://k2-fsa.github.io/sherpa/onnx/kws/pretrained_models/index.html#sherpa-onnx-kws-zipformer-wenetspeech-3-3m-2024-01-01-chinese \\n1. ASR\uff1ahttps://k2-fsa.github.io/sherpa/onnx/pretrained_models/online-transducer/zipformer-transducer-models.html#csukuangfj-sherpa-onnx-streaming-zipformer-bilingual-zh-en-2023-02-20-bilingual-chinese-english\\n1. TTS\uff1a https://k2-fsa.github.io/sherpa/onnx/tts/pretrained_models/vits.html#aishell3-chinese-multi-speaker-174-speakers\\n\\n### sherpa-onnx\u7684java api\u5e93\u53ca\u793a\u4f8b\u83b7\u53d6\\njava api\u89c1[\u5b98\u65b9\u6587\u6863\u7ae0\u8282](https://k2-fsa.github.io/sherpa/onnx/java-api/build-jar.html)\u3002\u6211\u8fd9\u8fb9\u662f\u5c06\u6e90\u7801\u62f7\u5230\u9879\u76ee\u4e2d\uff0c\u65b9\u4fbf\u8c03\u8bd5\u548c\u4fee\u6539\u3002java api\u7684\u6e90\u7801\u590d\u6742\u5ea6\u4e0d\u9ad8\uff0c\u6ca1\u6709\u8fc7\u5ea6\u5c01\u88c5\u548c\u62bd\u8c61\u3002\\n\\njava\u8c03\u7528\u7684\u793a\u4f8b\u4ee3\u7801\u5728\u4e0a\u8ff0\u7ae0\u8282\u4e2d\u4e5f\u63d0\u5230\u4e86\uff0c\u4f46\u786e\u5b9e\u6570\u91cf\u8f83\u5c11\u3002\u9700\u8981\u53d1\u6325\u4e00\u4e0b\u4e3b\u89c2\u80fd\u52a8\u6027\u548c\u5927\u6a21\u578b\u7684\u80fd\u529b\uff0c\u5bf9\u6bd4\u8054\u60f3+\u8fde\u731c\u5e26\u8499\u3002\\n\\n## \u6784\u5efa\u9879\u76ee\\njava\u9879\u76ee\u7684\u57fa\u7840\u7ed3\u6784\u8fd9\u91cc\u4e0d\u8d58\u8ff0\u3002\\n### jni\u76f8\u5173\u7684vm\u914d\u7f6e\\n\u5728idea\u7684\u8fd0\u884c\u914d\u7f6e\u3001\u542f\u52a8\u811a\u672c\u91cc\u589e\u52a0\u4e00\u4e2ajava vm\u7684\u53c2\u6570\u914d\u7f6e\uff1a\\n```\\n-Djava.library.path=\u6211\u7684\u9879\u76ee\u8def\u5f84\\\\sherpa-onnx\\\\libs\\n```\\n\u5176\u4e2dlibs\u4e0b\u653e\u7f6e\u7684\u5c31\u662f\u5bf9\u5e94\u5e73\u53f0\u7684sherpa-onnx\u52a8\u6001\u5e93\uff0cwindows\u4e0b\u662f.dll\uff0clinux\u4e0b\u662f.so\u3002\\n\u8fd9\u4e2a\u8def\u5f84\u548c\u76ee\u5f55\u7ed3\u6784\u90fd\u662f\u81ea\u5b9a\u4e49\u7684\uff0c\u53ef\u4ee5\u81ea\u5df1\u8c03\u6574\u3002\u5982\u679c\u662ffatjar\u7684\u8fd0\u884c\u65b9\u5f0f\uff0c\u672c\u76ee\u5f55\u5efa\u8bae\u653e\u5728jar\u5916\uff0c\u7c7b\u4f3c\u4e8e\u90e8\u7f72\u73af\u5883\u7684\u672c\u5730\u73af\u5883\u53d8\u91cf/\u914d\u7f6e\u6587\u4ef6\u4e00\u822c\u3002\\n### \u6a21\u578b\u53ca\u76f8\u5173\u6587\u4ef6\u7684\u4f4d\u7f6e\\n\u548c\u4e0a\u6587\u7684\u52a8\u6001\u5e93\u7c7b\u4f3c\uff0c\u4e5f\u662f\u5728jar\u5305\u5916\u7684\u6587\u4ef6\u76ee\u5f55\u4e0b\uff0c\u76ee\u5f55\u7ec4\u7ec7\u7ed3\u6784\u6ca1\u6709\u9650\u5236\uff0c\u548c\u5bf9\u5e94\u7684java\u8c03\u7528\u4ee3\u7801\u4e2d\u5f15\u7528\u7684decode/encode\u7b49\u8def\u5f84\u4fdd\u6301\u4e00\u81f4\u5373\u53ef\u3002\\n\\n## \u5404\u6a21\u578b\u7684\u4e1a\u52a1\u7528\u9014\\n1. [\u5173\u952e\u8bcd\u68c0\u6d4b](https://k2-fsa.github.io/sherpa/onnx/kws/index.html)\u3002\u672c\u8d28\u662f\u4e00\u4e2a\u975e\u5e38\u5c0f\u7684\u8bed\u97f3\u8bc6\u522b\u6a21\u578b\uff0c\u8fd9\u91cc\u7528\u5b83\u6765\u5b9e\u73b0\u8bed\u97f3\u5524\u9192\uff08\u4e00\u76f4\u76d1\u542c\u97f3\u9891\u6d41\uff09\uff0c\u7c7b\u4f3c\u5c0f\u7231\u540c\u5b66\u8fd9\u79cd\u3002\u8fd9\u6837\u5c31\u65e0\u9700\u4f7f\u7528snowboy\u4e86\u3002\u652f\u6301\u81ea\u5b9a\u4e49\u3001\u590d\u6570\u4e2a\u5173\u952e\u8bcd\u4e14\u4e0d\u9700\u8981\u91cd\u65b0\u8bad\u7ec3\u3002\\n2. \u8bed\u97f3\u8bc6\u522b\u3002\u8fd9\u91cc\u662f\u5728\u6210\u529f\u8bed\u97f3\u5524\u9192\u540e\uff0c\u624d\u4f1a\u4ece\u8bed\u97f3\u5524\u9192\u6a21\u5f0f\u5207\u6362\u5230\u8bed\u97f3\u8bc6\u522b\u6a21\u5f0f\uff0c\u5bf9\u97f3\u9891\u6d41\u8fdb\u884c\u8bed\u97f3\u8bc6\u522b\uff0c\u8fdb\u884c\u81ea\u5df1\u7684\u4e1a\u52a1\u5904\u7406\u3002\u4e0a\u6587\u9009\u7528\u7684[csukuangfj-sherpa-onnx-streaming-zipformer-bilingual-zh-en-2023-02-20-bilingual-chinese-english](https://k2-fsa.github.io/sherpa/onnx/pretrained_models/online-transducer/zipformer-transducer-models.html#csukuangfj-sherpa-onnx-streaming-zipformer-bilingual-zh-en-2023-02-20-bilingual-chinese-english)\u6a21\u578b\u7684\u8bc6\u522b\u7387\u8fd8\u53ef\u4ee5\u3001\u652f\u6301\u4e2d\u82f1\u6587\u6df7\u5408\u3001RTF\u8868\u73b0\u4f18\u79c0\uff0c\u652f\u6301\u70ed\u8bcd\u3002\\n3. [\u70ed\u8bcd](https://k2-fsa.github.io/sherpa/onnx/hotwords/index.html)\u3002\u4f7f\u7528\u70ed\u8bcd\u662f\u7531\u4e8e\u9879\u76ee\u4e2d\u6709\u4e00\u4e9b\u4e13\u4e1a\u6027\u7684\u8bcd\u6c47\uff0c\u4e0d\u8bbe\u7f6e\u70ed\u8bcd\u7684\u9ed8\u8ba4\u8bc6\u522b\u7387\u6bd4\u8f83\u4f4e\u3002\u70ed\u8bcd\u4e5f\u662f\u53ef\u4ee5\u81ea\u5b9a\u4e49\u3001\u590d\u6570\u4e2a\u3001\u4e0d\u9700\u8981\u91cd\u65b0\u8bad\u7ec3\u3002\\n4. [\u6587\u5b57\u8f6c\u8bed\u97f3](https://k2-fsa.github.io/sherpa/onnx/tts/index.html)\u3002\u9879\u76ee\u4e2d\u9700\u8981\u6587\u5b57\u8f6c\u8bed\u97f3\u6765\u4f5c\u4e3a\u4ea4\u4e92\u53cd\u9988\uff0c\u4f46\u53ea\u4f1a\u6709\u4e2d\u6587\uff0c\u6240\u4ee5\u9009\u62e9\u7684\u662f\u4ec5\u652f\u6301\u4e2d\u6587\u7684\u6a21\u578b\u3002\u652f\u6301\u591a\u79cd\u97f3\u8272\uff08\u4f46\u6ca1\u7279\u522b\u6807\u51c6\u548c\u5408\u9002\u7684\u97f3\u8272\uff09\u3002\u5bf9\u6570\u5b57/IP\u8fd9\u4e9b\u7684\u8bfb\u6cd5\u5e76\u4e0d\u5408\u9002\u3002\u5982\u679c\u6709\u66f4\u5408\u9002\u7684\u6a21\u578b\u548c\u65b9\u6cd5\uff0c\u8bf7\u8bc4\u8bba\u5206\u4eab\u7ed9\u6211\uff0c\u8c22\u8c22\u3002\\n\\n## \u5e38\u89c1\u95ee\u7b54(FAQs)\\n\u5148\u770b[\u5b98\u65b9\u6587\u6863\u7684FAQs](https://k2-fsa.github.io/sherpa/onnx/faqs/index.html#frequently-asked-question-faqs)\u3002\\n### The given version [17] is not supported, only version 1 to 10 is supported in this build\u3002\\n\u8fd0\u884c\u65f6\u8fd9\u4e2a\u5f02\u5e38\u4e0d\u662fjdk\u7684\u95ee\u9898\uff0cjdk>8\u5305\u62ec17 21\u90fd\u884c\uff0c\u662f\u56e0\u4e3awindwos\u7535\u8111\u4e0aSystem32\u5df2\u7ecf\u6709onnxruntime.dll\u4e86\u3002\\n\u5c06\u8fd9\u4e2a\u6587\u4ef6\u7684\u6240\u6709\u8005\u4eceTrustInstaller\u53d8\u66f4\u4e3a\u7ba1\u7406\u5458\u540e\uff0c\u5c31\u53ef\u4ee5\u5b8c\u5168\u63a7\u5236\u4e86\uff0c\u5c06\u5176\u5907\u4efd\uff0c\u6362\u6210\u4ecesherpa\u5b98\u65b9\u4e0b\u8f7djni\u91cc\u7528\u7684\u540c\u540ddll\u3002\\n### java\u4ee3\u7801\u5c11/\u627e\u4e0d\u5230/\u9519\u8bef\u3002\\n\u5bf9\u6bd4\uff1a\u5bf9\u6bd4\u5b98\u65b9\u7684java\u793a\u4f8b\u4ee3\u7801\uff0c\u5bf9\u6bd4\u5b98\u65b9\u7684python\u793a\u4f8b\u4ee3\u7801\uff0c\u4e3e\u4e00\u53cd\u4e09\u548c\u7ec4\u5408\u62fc\u51d1\u3002\\n\\n\u8054\u60f3\uff1a\u4ece\u5bf9\u6bd4\u7684\u4ee3\u7801\u8054\u60f3\u53ef\u80fd\u7684api\uff0c\u4ece\u8c03\u8bd5\u4e2d\u6570\u636e\u7ed3\u6784\u8054\u60f3\u53ef\u80fd\u7684\u4f5c\u7528\uff0c\u4ece\u6e90\u7801\u547d\u540d\u548c\u6ce8\u91ca\u8054\u60f3\u53ef\u80fd\u7684\u7528\u6cd5\u3002\u6bd4\u5982asr With endpoint detection\u770b\u6e90\u7801\u6709rule\uff0c\u731c\u6d4b\u5176\u4f5c\u7528\u548c\u8c03\u6574\u5c1d\u8bd5\u3002\\n\\n\u641c\u7d22\uff1a\u6bd4\u5982java\u7684\u6a21\u578b\u914d\u7f6e\u53c2\u6570\u662f\u6709\u5c42\u7ea7\u7684\uff08python\u7684\u914d\u7f6e\u53c2\u6570\u57fa\u672c\u662f\u6241\u5e73\u7684\uff09\uff0c\u5206\u6563\u548c\u9690\u85cf\u5728\u4e0d\u540c\u5c42\u6b21\u7684config\u7c7b\u91cc\uff0c\u90a3\u5c31\u641c\u7d22\u548c\u4e00\u5c42\u5c42\u70b9\u8fdb\u53bb\u770b\u5185\u5d4c\u5bf9\u8c61\u3002\\n\\n\u5927\u6a21\u578b\uff1a\u4f7f\u7528\u5927\u6a21\u578b\uff0c\u5c24\u5176\u662f\u4e00\u4e9bcopliot\u5982\u901a\u4e49\u7075\u7801\u7b49\uff0c\u6765\u66f4\u6539\u548c\u4f18\u5316\u4ee3\u7801\u3001\u7406\u89e3\u548c\u731c\u6d4b\u4ee3\u7801\u3001\u5206\u6790\u9519\u8bef\u539f\u56e0\u3002\\n### Java\u7684asr/kws \u5b9e\u65f6\u8bed\u97f3\u5524\u9192\u548c\u8bc6\u522b\u90fd\u6b63\u5e38\uff0c\u4f46\u52a0\u5165hotwards\u7684\u8bbe\u7f6e\u540e\uff0c\u8bc6\u522b\u51fa\u7b2c\u4e00\u53e5\u8bdd\u540e\u5c31\u4f1a\u8fdb\u7a0b\u5d29\u6e83\\n\u591a\u6b21dump\u6587\u4ef6\u540e\u53d1\u73b0\u90fd\u662f\u56e0\u4e3asherpa-onnx-jni.dll\u7684\u5f02\u5e38\uff1asiginfo: EXCEPTION_ACCESS_VIOLATION (0xc0000005), reading address 0x0000000000000070\u3002\\nJni\u4f7f\u7528\u7684\u4e0b\u8f7d\u7684jni_sherpa-onnx-v1.10.27\uff0826\u7248\u672c\u4e5f\u6709\u540c\u6837\u95ee\u9898\uff09\u3002asr\u6a21\u578b\u4f7f\u7528\u7684\u662fsherpa-onnx-streaming-zipformer-bilingual-zh-en-2023-02-20\u3002\u8dd1\u5728Win11 64\u4f4d\u7b14\u8bb0\u672c\u7684CPU\u4e0a\uff08ubuntu\u4e5f\u4e00\u6837\u6709\u8be5\u95ee\u9898\uff09\u3002\\n\\n\u53cd\u9988\u7ed9\u793e\u533a\u540e\uff0c\u5f88\u5feb\u7ed9\u51fa\u4e86\u4ecemaster\u65b0\u6784\u5efa\u7684jni\uff0c\u9a8c\u8bc1\u540e\u6b63\u5e38\uff08win11/ubuntu\uff09\u3002\u5b98\u65b9\u9884\u8ba1\u5728v1.10.28\u7248\u672c\u4e2d\u4fee\u590d\u3002"}]}}')}}]);