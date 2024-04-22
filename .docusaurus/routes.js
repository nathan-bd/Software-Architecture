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
    component: ComponentCreator('/Software-Architecture/docs', '357'),
    routes: [
      {
        path: '/Software-Architecture/docs',
        component: ComponentCreator('/Software-Architecture/docs', 'a1b'),
        routes: [
          {
            path: '/Software-Architecture/docs',
            component: ComponentCreator('/Software-Architecture/docs', '0be'),
            routes: [
              {
                path: '/Software-Architecture/docs/Software Architecture/architectural-patterns',
                component: ComponentCreator('/Software-Architecture/docs/Software Architecture/architectural-patterns', '932'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Software-Architecture/docs/Software Architecture/architecural-tools',
                component: ComponentCreator('/Software-Architecture/docs/Software Architecture/architecural-tools', '1f0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Software-Architecture/docs/Software Architecture/components-structures',
                component: ComponentCreator('/Software-Architecture/docs/Software Architecture/components-structures', 'b3b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Software-Architecture/docs/Software Architecture/design-principles',
                component: ComponentCreator('/Software-Architecture/docs/Software Architecture/design-principles', 'af2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Software-Architecture/docs/Software Architecture/documentation',
                component: ComponentCreator('/Software-Architecture/docs/Software Architecture/documentation', '5d4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Software-Architecture/docs/Software Architecture/future-trends-Innovations',
                component: ComponentCreator('/Software-Architecture/docs/Software Architecture/future-trends-Innovations', '39e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Software-Architecture/docs/Software Architecture/intro',
                component: ComponentCreator('/Software-Architecture/docs/Software Architecture/intro', '8d1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Software-Architecture/docs/Software Architecture/quality-attributes',
                component: ComponentCreator('/Software-Architecture/docs/Software Architecture/quality-attributes', '276'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Software-Architecture/docs/Software Architecture/resources',
                component: ComponentCreator('/Software-Architecture/docs/Software Architecture/resources', '007'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Software-Architecture/docs/Software Architecture/sdlc',
                component: ComponentCreator('/Software-Architecture/docs/Software Architecture/sdlc', 'c95'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Software-Architecture/docs/Software Architecture/stakeholder-managmenet',
                component: ComponentCreator('/Software-Architecture/docs/Software Architecture/stakeholder-managmenet', 'c79'),
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
