import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '466'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '5c7'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '679'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'ee6'),
            routes: [
              {
                path: '/docs/category/backend-api',
                component: ComponentCreator('/docs/category/backend-api', '344'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/frontend-app',
                component: ComponentCreator('/docs/category/frontend-app', 'ff2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/frontend-app/about-the-app',
                component: ComponentCreator('/docs/frontend-app/about-the-app', '86f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/frontend-app/components',
                component: ComponentCreator('/docs/frontend-app/components', '782'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', '61d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Tradeoffs',
                component: ComponentCreator('/docs/Tradeoffs', '165'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/about-the-api',
                component: ComponentCreator('/docs/tutorial-basics/about-the-api', 'fc6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/endpoints',
                component: ComponentCreator('/docs/tutorial-basics/endpoints', '3e0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/services',
                component: ComponentCreator('/docs/tutorial-basics/services', 'd23'),
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
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
