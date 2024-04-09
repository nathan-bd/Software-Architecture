import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/Software-Architecture/',
    component: ComponentCreator('/Software-Architecture/', '0c2'),
    exact: true
  },
  {
    path: '/Software-Architecture/__docusaurus/debug',
    component: ComponentCreator('/Software-Architecture/__docusaurus/debug', '730'),
    exact: true
  },
  {
    path: '/Software-Architecture/__docusaurus/debug/config',
    component: ComponentCreator('/Software-Architecture/__docusaurus/debug/config', 'eef'),
    exact: true
  },
  {
    path: '/Software-Architecture/__docusaurus/debug/content',
    component: ComponentCreator('/Software-Architecture/__docusaurus/debug/content', '056'),
    exact: true
  },
  {
    path: '/Software-Architecture/__docusaurus/debug/globalData',
    component: ComponentCreator('/Software-Architecture/__docusaurus/debug/globalData', '9b1'),
    exact: true
  },
  {
    path: '/Software-Architecture/__docusaurus/debug/metadata',
    component: ComponentCreator('/Software-Architecture/__docusaurus/debug/metadata', '49e'),
    exact: true
  },
  {
    path: '/Software-Architecture/__docusaurus/debug/registry',
    component: ComponentCreator('/Software-Architecture/__docusaurus/debug/registry', 'b86'),
    exact: true
  },
  {
    path: '/Software-Architecture/__docusaurus/debug/routes',
    component: ComponentCreator('/Software-Architecture/__docusaurus/debug/routes', '89e'),
    exact: true
  },
  {
    path: '/Software-Architecture/markdown-page',
    component: ComponentCreator('/Software-Architecture/markdown-page', '90e'),
    exact: true
  },
  {
    path: '/Software-Architecture/docs',
    component: ComponentCreator('/Software-Architecture/docs', '488'),
    routes: [
      {
        path: '/Software-Architecture/docs',
        component: ComponentCreator('/Software-Architecture/docs', 'f18'),
        routes: [
          {
            path: '/Software-Architecture/docs',
            component: ComponentCreator('/Software-Architecture/docs', 'a96'),
            routes: [
              {
                path: '/Software-Architecture/docs/category/tutorial---basics',
                component: ComponentCreator('/Software-Architecture/docs/category/tutorial---basics', 'bdd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Software-Architecture/docs/category/tutorial---extras',
                component: ComponentCreator('/Software-Architecture/docs/category/tutorial---extras', 'eb4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Software-Architecture/docs/intro',
                component: ComponentCreator('/Software-Architecture/docs/intro', '3b8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Software-Architecture/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/Software-Architecture/docs/tutorial-basics/congratulations', '7ca'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Software-Architecture/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/Software-Architecture/docs/tutorial-basics/create-a-blog-post', 'bb7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Software-Architecture/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/Software-Architecture/docs/tutorial-basics/create-a-document', '3d8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Software-Architecture/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/Software-Architecture/docs/tutorial-basics/create-a-page', 'c2b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Software-Architecture/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/Software-Architecture/docs/tutorial-basics/deploy-your-site', 'c07'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Software-Architecture/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/Software-Architecture/docs/tutorial-basics/markdown-features', '319'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Software-Architecture/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/Software-Architecture/docs/tutorial-extras/manage-docs-versions', 'dfd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Software-Architecture/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/Software-Architecture/docs/tutorial-extras/translate-your-site', '24d'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
