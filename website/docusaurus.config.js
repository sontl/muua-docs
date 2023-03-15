module.exports = {
  title: 'Trung tâm trợ giúp MUUA',
  tagline:
    'Tư vấn và giải đáp từ đội ngũ MUUA về các vấn đề liên quan đến website, marketing, SEO, ...',
  url: 'https://muua.com.vn',
  baseUrl: '/',
  favicon: 'img/favicon.png',
  organizationName: 'MUUA Co., Ltd',
  projectName: 'muua-docs',
  staticDirectories: ['static'],
  scripts: [
    {
      src: 'https://buttons.github.io/buttons.js',
      async: true,
      defer: true,
    },
  ],
  themeConfig: {
    navbar: {
      logo: {
        alt: 'MUUA Logo',
        src: 'img/muua-logo-text.svg',
        href: 'https://muua.com.vn/landing',
      },
      items: [
        // {
        //   to: '/get-started',
        //   activeBasePath: 'pages',
        //   label: 'Get Started',
        //   position: 'right',
        // },
        {
          to: '/',
          activeBasePath: 'welcome',
          label: 'Tài liệu',
          position: 'right',
        },
        {
          to: '/blog',
          activeBasePath: 'blog',
          label: 'Blog',
          position: 'right',
        },
        // {
        //   to: '/sass',
        //   activeBasePath: 'sass',
        //   label: 'Sass',
        //   position: 'right',
        // },
        // {
        //   to: '/showcase',
        //   activeBasePath: 'showcase',
        //   label: 'Showcase',
        //   position: 'right',
        // },
        {
          href: 'https://muua.com.vn',
          activeBasePath: 'homepage',
          position: 'right',
          label: 'Trang chủ',
        },
      ],
    },
    prism: {
      theme: require('prism-react-renderer/themes/dracula'),
      additionalLanguages: ['php'],
    },
    algolia: {
      appId: 'FWZQ0MX15D',
      apiKey: 'f8d254a9214aa6dbe7e7c44f111bec77',
      indexName: 'support-muua-com',
    },
    colorMode: {
      disableSwitch: true,
    },
    trailingSlash: false,
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        gtag: {
          trackingID: 'G-64YRH48GPR',
          anonymizeIP: true,
        },
        theme: {
          customCss: require.resolve('./src/scss/application.scss'),
        },
        blog: {
          blogTitle: 'Hướng dẫn và bài viết về MUUA',
          blogDescription: 'Hướng dẫn và bài viết về MUUA',
          blogSidebarTitle: 'Bài viết mới nhất',
          showReadingTime: true,
          postsPerPage: 6,
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
        },
      },
    ],
  ],
  plugins: ['docusaurus-plugin-sass'],
  customFields: {
    keywords: [
      'cửa hàng online',
      'cửa hàng trực tuyến',
      'bán hàng online',
      'doanh nghiệp nhỏ',
      'muua',
      'doanh nghiệp siêu nhỏ',
    ],
    image: 'img-why-boilerplate@2x.png',
  },
};
