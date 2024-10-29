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
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
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
    path: '/blog',
    component: ComponentCreator('/blog', '0e0'),
    exact: true
  },
  {
    path: '/blog/2024/01/01/Garage48',
    component: ComponentCreator('/blog/2024/01/01/Garage48', 'fb9'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '182'),
    exact: true
  },
  {
    path: '/Prices',
    component: ComponentCreator('/Prices', 'be0'),
    exact: true
  },
  {
    path: '/privacy',
    component: ComponentCreator('/privacy', '476'),
    exact: true
  },
  {
    path: '/terms',
    component: ComponentCreator('/terms', '235'),
    exact: true
  },
  {
    path: '/about',
    component: ComponentCreator('/about', 'e1d'),
    routes: [
      {
        path: '/about',
        component: ComponentCreator('/about', '075'),
        routes: [
          {
            path: '/about',
            component: ComponentCreator('/about', '941'),
            routes: [
              {
                path: '/about/',
                component: ComponentCreator('/about/', '739'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/about/careers/',
                component: ComponentCreator('/about/careers/', '58b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/about/company/',
                component: ComponentCreator('/about/company/', '7f3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/about/company/All-hands meeting recordings',
                component: ComponentCreator('/about/company/All-hands meeting recordings', '8d9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/about/company/Culture and values',
                component: ComponentCreator('/about/company/Culture and values', 'e84'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/about/company/Equity & fundraising program plan',
                component: ComponentCreator('/about/company/Equity & fundraising program plan', '7aa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/about/company/Press kit',
                component: ComponentCreator('/about/company/Press kit', '3f9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/about/company/values/Adapt to change 🏕️',
                component: ComponentCreator('/about/company/values/Adapt to change 🏕️', 'ad1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/about/company/values/Ethical heart 🌳',
                component: ComponentCreator('/about/company/values/Ethical heart 🌳', '2e0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/about/company/values/Gather value 🍯',
                component: ComponentCreator('/about/company/values/Gather value 🍯', '867'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/about/company/values/Humbly kind 🧸',
                component: ComponentCreator('/about/company/values/Humbly kind 🧸', '332'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/about/company/values/New horizons 🏔️',
                component: ComponentCreator('/about/company/values/New horizons 🏔️', 'cf3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/about/company/values/Observable mind 🧿',
                component: ComponentCreator('/about/company/values/Observable mind 🧿', 'ad0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/about/company/values/Radiate truth 🌞',
                component: ComponentCreator('/about/company/values/Radiate truth 🌞', '0e6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/about/company/values/Team effort 🐝',
                component: ComponentCreator('/about/company/values/Team effort 🐝', '0a9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/about/company/Volunteering',
                component: ComponentCreator('/about/company/Volunteering', '97c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/about/Engineering/CAD modelling',
                component: ComponentCreator('/about/Engineering/CAD modelling', '56a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/about/Engineering/Cloud Infrastructure',
                component: ComponentCreator('/about/Engineering/Cloud Infrastructure', '849'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/about/Engineering/Design',
                component: ComponentCreator('/about/Engineering/Design', 'b40'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/about/Engineering/Engineering onboarding',
                component: ComponentCreator('/about/Engineering/Engineering onboarding', 'df1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/about/Engineering/Merchandise',
                component: ComponentCreator('/about/Engineering/Merchandise', '031'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/about/Engineering/ML Datasets',
                component: ComponentCreator('/about/Engineering/ML Datasets', 'c1d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/about/Engineering/Robotics',
                component: ComponentCreator('/about/Engineering/Robotics', 'e63'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/about/Engineering/Tech stack, conventions, environments',
                component: ComponentCreator('/about/Engineering/Tech stack, conventions, environments', '8d1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/about/Engineering/UX - UI wireframes',
                component: ComponentCreator('/about/Engineering/UX - UI wireframes', 'c47'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/about/Problems',
                component: ComponentCreator('/about/Problems', '59e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/about/products/',
                component: ComponentCreator('/about/products/', '865'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/about/purpose/',
                component: ComponentCreator('/about/purpose/', 'f3e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/about/purpose/Brand meaning',
                component: ComponentCreator('/about/purpose/Brand meaning', 'dbb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/about/purpose/Company mission',
                component: ComponentCreator('/about/purpose/Company mission', '398'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/about/purpose/Ethics',
                component: ComponentCreator('/about/purpose/Ethics', '65b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/about/purpose/Logo 🧪',
                component: ComponentCreator('/about/purpose/Logo 🧪', '07d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/about/purpose/Naming',
                component: ComponentCreator('/about/purpose/Naming', '739'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/about/research/',
                component: ComponentCreator('/about/research/', '811'),
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
    path: '/docs',
    component: ComponentCreator('/docs', '49a'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '832'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'c12'),
            routes: [
              {
                path: '/docs/How to setup Remote Desktop connection to Jetson Orin or Nano',
                component: ComponentCreator('/docs/How to setup Remote Desktop connection to Jetson Orin or Nano', '39a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Jetson Nano setup',
                component: ComponentCreator('/docs/Jetson Nano setup', 'dcd'),
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
    component: ComponentCreator('/', 'e5f'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
