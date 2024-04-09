import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/Software-Architecture/',
    component: ComponentCreator('/Software-Architecture/', '0c2'),
    exact: true
  },
  {
    path: '/Software-Architecture/blog',
    component: ComponentCreator('/Software-Architecture/blog', 'd13'),
    exact: true
  },
  {
    path: '/Software-Architecture/blog/archive',
    component: ComponentCreator('/Software-Architecture/blog/archive', '290'),
    exact: true
  },
  {
    path: '/Software-Architecture/blog/first-blog-post',
    component: ComponentCreator('/Software-Architecture/blog/first-blog-post', '9a5'),
    exact: true
  },
  {
    path: '/Software-Architecture/blog/long-blog-post',
    component: ComponentCreator('/Software-Architecture/blog/long-blog-post', '989'),
    exact: true
  },
  {
    path: '/Software-Architecture/blog/mdx-blog-post',
    component: ComponentCreator('/Software-Architecture/blog/mdx-blog-post', '191'),
    exact: true
  },
  {
    path: '/Software-Architecture/blog/tags',
    component: ComponentCreator('/Software-Architecture/blog/tags', 'f1b'),
    exact: true
  },
  {
    path: '/Software-Architecture/blog/tags/docusaurus',
    component: ComponentCreator('/Software-Architecture/blog/tags/docusaurus', '2ad'),
    exact: true
  },
  {
    path: '/Software-Architecture/blog/tags/facebook',
    component: ComponentCreator('/Software-Architecture/blog/tags/facebook', 'f81'),
    exact: true
  },
  {
    path: '/Software-Architecture/blog/tags/hello',
    component: ComponentCreator('/Software-Architecture/blog/tags/hello', 'ffd'),
    exact: true
  },
  {
    path: '/Software-Architecture/blog/tags/hola',
    component: ComponentCreator('/Software-Architecture/blog/tags/hola', '4a7'),
    exact: true
  },
  {
    path: '/Software-Architecture/blog/welcome',
    component: ComponentCreator('/Software-Architecture/blog/welcome', 'e8c'),
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
