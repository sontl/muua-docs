module.exports = {
  GuidesSidebar: [
    'index',

    {
      type: 'category',
      label: 'Directory Sync',
      collapsible: true,
      collapsed: true,
      link: { type: 'doc', id: 'directory-sync/overview' },
      items: [
        {
          type: 'category',
          label: 'Framework Guides',
          collapsed: true,
          items: [
            'directory-sync/frameworks/nextjs',
            'directory-sync/frameworks/express',
          ],
        },
      ],
    },
  ],
};
