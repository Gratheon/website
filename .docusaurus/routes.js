import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'b2f'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '182'),
    exact: true
  },
  {
    path: '/blog/authors',
    component: ComponentCreator('/blog/authors', '0b7'),
    exact: true
  },
  {
    path: '/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/blog/authors/all-sebastien-lorber-articles', '4a1'),
    exact: true
  },
  {
    path: '/blog/authors/yangshun',
    component: ComponentCreator('/blog/authors/yangshun', 'a68'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '89a'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '9ad'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', 'e9f'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '287'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '704'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '858'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '299'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '00d'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'd2b'),
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
    component: ComponentCreator('/about', '157'),
    routes: [
      {
        path: '/about',
        component: ComponentCreator('/about', 'aa2'),
        routes: [
          {
            path: '/about',
            component: ComponentCreator('/about', '1b6'),
            routes: [
              {
                path: '/about/',
                component: ComponentCreator('/about/', '739'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/about/about/',
                component: ComponentCreator('/about/about/', '80f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/about/about/Brand meaning',
                component: ComponentCreator('/about/about/Brand meaning', 'f72'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/about/about/Company mission',
                component: ComponentCreator('/about/about/Company mission', 'e77'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/about/about/Ethics',
                component: ComponentCreator('/about/about/Ethics', '3f6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/about/about/Logo',
                component: ComponentCreator('/about/about/Logo', 'dd5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/about/about/Merchandise',
                component: ComponentCreator('/about/about/Merchandise', 'd06'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/about/about/Naming etymology',
                component: ComponentCreator('/about/about/Naming etymology', '830'),
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
                path: '/about/company/values/Gather value 🍯',
                component: ComponentCreator('/about/company/values/Gather value 🍯', '867'),
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
