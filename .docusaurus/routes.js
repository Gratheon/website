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
    component: ComponentCreator('/blog', '18a'),
    exact: true
  },
  {
    path: '/blog/2023/01/12/ 💶 Pitched to Picus Capital',
    component: ComponentCreator('/blog/2023/01/12/ 💶 Pitched to Picus Capital', '7b0'),
    exact: true
  },
  {
    path: '/blog/2023/11/05/ 🛰️ Participated in Garage48 Cassini hackathon',
    component: ComponentCreator('/blog/2023/11/05/ 🛰️ Participated in Garage48 Cassini hackathon', 'e9b'),
    exact: true
  },
  {
    path: '/blog/2023/11/23/ 📢 Featured in a Delfi article',
    component: ComponentCreator('/blog/2023/11/23/ 📢 Featured in a Delfi article', '4be'),
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
    component: ComponentCreator('/about', '92c'),
    routes: [
      {
        path: '/about',
        component: ComponentCreator('/about', '064'),
        routes: [
          {
            path: '/about',
            component: ComponentCreator('/about', 'ffd'),
            routes: [
              {
                path: '/about/',
                component: ComponentCreator('/about/', '498'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/about/careers/',
                component: ComponentCreator('/about/careers/', '20c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/about/company/',
                component: ComponentCreator('/about/company/', '4f1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/about/company/Culture and values 🫀/',
                component: ComponentCreator('/about/company/Culture and values 🫀/', '169'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/about/company/Culture and values 🫀/Adapt to change 🏕️',
                component: ComponentCreator('/about/company/Culture and values 🫀/Adapt to change 🏕️', '46a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/about/company/Culture and values 🫀/Ethical heart 🌳',
                component: ComponentCreator('/about/company/Culture and values 🫀/Ethical heart 🌳', '5bb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/about/company/Culture and values 🫀/Gather value 🍯',
                component: ComponentCreator('/about/company/Culture and values 🫀/Gather value 🍯', 'd7f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/about/company/Culture and values 🫀/Humbly kind 🧸',
                component: ComponentCreator('/about/company/Culture and values 🫀/Humbly kind 🧸', '5d3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/about/company/Culture and values 🫀/New horizons 🏔️',
                component: ComponentCreator('/about/company/Culture and values 🫀/New horizons 🏔️', '99b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/about/company/Culture and values 🫀/Observable mind 🧿',
                component: ComponentCreator('/about/company/Culture and values 🫀/Observable mind 🧿', 'f5c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/about/company/Culture and values 🫀/Radiate truth 🌞',
                component: ComponentCreator('/about/company/Culture and values 🫀/Radiate truth 🌞', '22e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/about/company/Culture and values 🫀/Team effort 🐝',
                component: ComponentCreator('/about/company/Culture and values 🫀/Team effort 🐝', '658'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/about/company/Equity & fundraising program plan',
                component: ComponentCreator('/about/company/Equity & fundraising program plan', '472'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/about/company/Meeting recordings',
                component: ComponentCreator('/about/company/Meeting recordings', 'c91'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/about/company/Press kit',
                component: ComponentCreator('/about/company/Press kit', '084'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/about/company/Volunteering',
                component: ComponentCreator('/about/company/Volunteering', 'd82'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/about/Problems/',
                component: ComponentCreator('/about/Problems/', '2cd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/about/products/',
                component: ComponentCreator('/about/products/', '5dc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/about/purpose/',
                component: ComponentCreator('/about/purpose/', 'f43'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/about/purpose/Brand meaning',
                component: ComponentCreator('/about/purpose/Brand meaning', 'd53'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/about/purpose/Company mission',
                component: ComponentCreator('/about/purpose/Company mission', 'e87'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/about/purpose/Ethics',
                component: ComponentCreator('/about/purpose/Ethics', '56c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/about/purpose/Logo 🧪',
                component: ComponentCreator('/about/purpose/Logo 🧪', 'c1f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/about/purpose/Naming',
                component: ComponentCreator('/about/purpose/Naming', '844'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/about/research/',
                component: ComponentCreator('/about/research/', 'af7'),
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
    component: ComponentCreator('/docs', '5dd'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '428'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '0d7'),
            routes: [
              {
                path: '/docs/Engineering/CAD modelling',
                component: ComponentCreator('/docs/Engineering/CAD modelling', '265'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Engineering/Cloud Infrastructure',
                component: ComponentCreator('/docs/Engineering/Cloud Infrastructure', 'b86'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Engineering/Design',
                component: ComponentCreator('/docs/Engineering/Design', '5b9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Engineering/Engineering onboarding',
                component: ComponentCreator('/docs/Engineering/Engineering onboarding', '84e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Engineering/Merchandise',
                component: ComponentCreator('/docs/Engineering/Merchandise', 'f86'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Engineering/ML Datasets',
                component: ComponentCreator('/docs/Engineering/ML Datasets', '1ff'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Engineering/Robotics',
                component: ComponentCreator('/docs/Engineering/Robotics', '807'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Engineering/Tech stack, conventions, environments',
                component: ComponentCreator('/docs/Engineering/Tech stack, conventions, environments', '19a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Engineering/UX - UI wireframes',
                component: ComponentCreator('/docs/Engineering/UX - UI wireframes', '392'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
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
