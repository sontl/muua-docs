const copyright = '2023-present © Muua Co.,Ltd';

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Trung tâm trợ giúp Muua',
  tagline:
    'Tư vấn và giải đáp từ đội ngũ Muua về các vấn đề liên quan đến website, marketing, SEO, ...',
  url: 'https://support.muua.com.vn',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'Muua', // Usually your GitHub org/user name.
  projectName: 'website', // Usually your repo name.
  scripts: [
    {
      src: 'https://cmp.osano.com/169lWRSfch3C32VM2/2cd324ff-6a09-4e61-94fa-6af31f004e67/osano.js',
      defer: true,
    },
  ],
  // stylesheets: ['styles/dark-mode.css'],
  themeConfig: {
    prism: {
      theme: require('prism-react-renderer/themes/dracula'),
      additionalLanguages: ['php'],
    },
    algolia: {
      appId: 'FWZQ0MX15D',
      apiKey: 'f8d254a9214aa6dbe7e7c44f111bec77',
      indexName: 'support-muua-com',
      contextualSearch: true,
    },
    zoom: {
      selector: '.markdown :not(em) > img',
      config: {
        background: {
          light: 'rgb(255, 255, 255)',
          dark: 'rgb(50, 50, 50)',
        },
      },
    },
    // announcementBar: {
    //   id: 'announcement-bar',
    //   content:
    //     '<a target="_blank" rel="nofollow noopener noreferrer" href="https://github.com/boxyhq/jackson">⭐ Star Enterprise SSO on GitHub</a>     <a target="_blank" rel="nofollow noopener noreferrer" href="https://github.com/retracedhq/retraced">⭐ Star Audit Logs on GitHub</a>',
    //   isCloseable: false,
    // },
    image: 'img/website-preview-image.png',
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: '',
      logo: {
        alt: 'Muua',
        height: '40px',
        src: 'img/muua-logo-text.svg',
        srcDark: 'img/muua-logo.svg',
      },
      items: [
        // {
        //   label: 'Products',
        //   type: 'dropdown',
        //   items: [
        //     {
        //       to: '/enterprise-sso',
        //       label: 'Enterprise SSO',
        //     },
        //     {
        //       to: '/directory-sync',
        //       label: 'Directory Sync',
        //     },
        //     {
        //       to: '/audit-logs',
        //       label: 'Audit Logs',
        //     },
        //     {
        //       to: '/privacy-vault',
        //       label: 'Privacy Vault',
        //     },
        //   ],
        // },
        // {
        //   label: 'Developers',
        //   type: 'dropdown',
        //   items: [
        //     { to: '/docs', label: 'Docs' },
        //     { to: '/guides', label: 'Guides' },
        //     { to: '/enterprise-readiness', label: 'Enterprise Readiness' },
        //     {
        //       href: 'https://mocksaml.com',
        //       label: 'Mock SAML',
        //     },
        //     {
        //       href: 'https://github.com/boxyhq/saas-starter-kit',
        //       label: 'Enterprise SaaS Starter Kit',
        //     },
        //     {
        //       href: 'https://awesome-oss-devsec.boxyhq.com',
        //       label: 'Developer Security Tools',
        //     },
        //   ],
        // },
        { to: '/docs', label: 'Tài liệu', position: 'right', },
        { to: '/blog', label: 'Blog', position: 'right', activeBasePath: 'blog', },
        {
          href: 'https://muua.com.vn',
          activeBasePath: 'homepage',
          position: 'right',
          label: 'Trang chủ',
        },
        // { to: '/pricing', label: 'Pricing' },
        // {
        //   label: 'Company',
        //   type: 'dropdown',
        //   position: 'right',
        //   items: [
        //     {
        //       to: '/careers',
        //       label: 'Careers',
        //     },
        //     {
        //       to: '/team',
        //       label: 'Team',
        //     },
        //     {
        //       to: '/pledge',
        //       label: 'Pledge',
        //     },
        //   ],
        // },
        // {
        //   href: 'https://github.com/boxyhq',
        //   position: 'right',
        //   className: 'header-github-link',
        // },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/boxyhq',
            },
            {
              label: 'Discord',
              href: 'https://discord.boxyhq.com',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/boxyhq',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/company/boxyhq',
            },
            {
              label: 'Facebook',
              href: 'https://www.facebook.com/boxyhq',
            },
            {
              label: 'Instagram',
              href: 'https://www.instagram.com/boxyhq',
            },
          ],
        },
        {
          title: 'Legal',
          items: [
            {
              label: 'Privacy & Cookies Policy',
              href: '/privacy.html',
            },
            {
              label: 'Terms',
              href: '/terms.html',
              target: '_blank',
            },
          ],
        },
        {
          title: 'Company',
          items: [
            {
              label: 'Team',
              href: '/team',
            },
          ],
        },
      ],
      copyright,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        gtag: {
          trackingID: 'G-64YRH48GPR',
          anonymizeIP: true,
        },
        blog: {
          blogTitle: 'Blog',
          blogDescription: 'Hướng dẫn và bài viết về Muua',
          blogSidebarTitle: 'Bài viết mới nhất',
          showReadingTime: true,
          feedOptions: {
            type: 'all',
            copyright,
          },

          blogSidebarCount: 5,
          postsPerPage: 'ALL',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    [
      require.resolve('docusaurus-gtm-plugin'),
      {
        id: 'GTM-N9999D3', // GTM Container ID
      },
    ],
    [
      '@docusaurus/plugin-content-blog',
      {
        /**
         * Required for any multi-instance plugin
         */
        id: 'careers',
        /**
         * URL route for the blog section of your site.
         * *DO NOT* include a trailing slash.
         */
        routeBasePath: 'careers',
        /**
         * Path to data on filesystem relative to site dir.
         */
        path: './careers',
        blogTitle: 'Careers',
        blogDescription:
          'Join us on our mission to help startups simplify the development of compliance and data security-related features in their products. Check out our open roles.',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'guides',
        path: 'guides',
        routeBasePath: 'guides',
        sidebarPath: require.resolve('./sidebars_guides.js'),
      },
    ],
    // ['@cmfcmf/docusaurus-search-local', {}],
    require.resolve('docusaurus-plugin-image-zoom'),
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {
            from: '/docs/jackson/admin-ui',
            to: '/docs/admin-portal/enterprise-sso',
          },
          {
            from: '/docs/directory-sync/admin-ui',
            to: '/docs/admin-portal/directory-sync',
          },
          {
            from: '/docs/jackson/saml-flow',
            to: '/docs/jackson/sso-flow',
          },
          {
            from: '/docs/jackson/configure-saml-idp',
            to: '/docs/jackson/sso-providers',
          },
          {
            from: '/docs/jackson/deploy/pre-loaded-configuration',
            to: '/docs/jackson/deploy/pre-loaded-connections',
          },
        ],
      },
    ],
  ],
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
