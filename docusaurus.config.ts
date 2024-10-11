import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: '梓宏工坊',
  tagline: '自反而缩,虽千万人,吾往矣。',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://haifengqiu.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'haifengqiu', // Usually your GitHub org/user name.
  projectName: 'haifengqiu.github.io', // Usually your repo name.
  trailingSlash: false, // GitHub Pages 默认为 Docusaurus 网址链接添加末尾斜杠。 It is recommended to set a trailingSlash config (true or false, not undefined).
  deploymentBranch: 'gh-pages', // 部署到的分支名
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/haifengqiu/haifengqiu.github.io/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/haifengqiu/haifengqiu.github.io/tree/main/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: '梓宏工坊',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.jpg',
      },
      items: [
        {
          label:'文档',
          position: 'left',
          items:[
            {
              type: 'docSidebar',
              sidebarId: 'tutorialSidebar',
              label: 'Docusaurus',
            },
            {
              label: 'sherpa-onnx',
              href: 'https://k2-fsa.github.io/sherpa/onnx/index.html',
            }
          ],
        },
        {to: '/blog', label: '博客', position: 'left'},
        {
          href: 'https://github.com/haifengqiu/haifengqiu.github.io',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '文档',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: '社区',
          items: [
            {
              label: 'Docusaurus',
              href: 'https://docusaurus.io/zh-CN/',
            }
          ],
        },
        {
          title: '更多',
          items: [
            {
              label: '博客',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/haifengqiu/haifengqiu.github.io',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} 梓宏工坊 Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    // 在自定义的comment组件里使用下列配置
    giscus: {
      repo: 'haifengqiu/haifengqiu.github.io',
      repoId: 'R_kgDOM-E3GQ',
      category: 'Announcements',
      categoryId: 'DIC_kwDOM-E3Gc4CjO7-',
      mapping: 'pathname',
      reactionsEnabled: '1', // 显示点赞等反应
      theme: 'light', // 主题风格，可选 'light', 'dark', 'dark_dimmed'
      term: "聊五毛钱?",
      emitMetadata: "0",
      loading: "lazy",
      strict: "0",
      inputPosition: "bottom",
      lang: "zh-CN",
    },
  } satisfies Preset.ThemeConfig,
  // plugins: ['@docusaurus/plugin-giscus'],
};

export default config;
