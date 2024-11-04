import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Gratheon',
  tagline: 'Dinosaurs are cool',
  favicon: 'favicons/favicon.ico',

  // Set the production url of your site here
  url: 'https://gratheon.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'gratheon', // Usually your GitHub org/user name.
  projectName: 'website', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],
  
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/gratheon/website/tree/main/packages/create-docusaurus/templates/shared/',
        },

        blog: {
          blogSidebarCount: 20,
          showLastUpdateTime: false,
          blogSidebarTitle: ' ',
          showReadingTime: true,
          postsPerPage: 20,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/gratheon/website/tree/main/',

          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },

        theme: {
          customCss: './src/css/custom.css',
        },

        pages: {
          path: './pages',
          routeBasePath: '',
          include: ['**/*.{js,jsx,ts,tsx,md,mdx}'],
          exclude: [
            '**/_*.{js,jsx,ts,tsx,md,mdx}',
            '**/_*/**',
            '**/*.test.{js,jsx,ts,tsx}',
            '**/__tests__/**',
          ],
          mdxPageComponent: '@theme/MDXPage',
          rehypePlugins: [],
          beforeDefaultRemarkPlugins: [],
          beforeDefaultRehypePlugins: [],
        },

      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },

    // Replace with your project's social card
    image: 'img/gratheon-web-app.webp',
    navbar: {
      title: '',
      logo: {
        alt: 'Gratheon',
        src: 'img/logo_v7w.svg',
      },
      items: [
        {to: '/about', label: 'About', position: 'left'},
        {to: '/about/products', label: 'Products', position: 'left'},
        


        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },

        {to: '/research', label: 'Research', position: 'left'},

        {to: '/blog', label: 'Blog', position: 'left'},

        {href: '/about/products/prices', label: 'Pricing', position: 'left'},
        
        {href: 'https://app.gratheon.com/account/authenticate/', label: 'Log in', position: 'right'},
        
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
            items: [{
              html: `
                <a href="https://ariregister.rik.ee/est/company/12245103/Gratheon-O%C3%9C">Gratheon OÜ</a><br />
                Tallinn, Estonia
              `,
            }],
        },
        {
          // title: 'Docs',
          items: [
            {
              label: 'Privacy Policy',
              to: 'privacy',
            },
            {
              label: 'Terms Of Service',
              to: 'terms',
            },
            {
              label: 'Email',
              href: 'mailto:pilot@gratheon.com',
            },
          ],
        },
        {
          // title: 'Community',
          items: [
            {
              label: 'Telegram',
              href: 'https://t.me/gratheon',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/gratheon',
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/company/gratheon/',
            },
          ],
        },
        {
          // title: 'More',
          items: [
            {
              label: 'Facebook',
              to: 'https://www.facebook.com/gratheon',
            },
            {
              label: 'Twitch',
              to: 'https://www.twitch.tv/tot_ra',
            },
            {
              label: 'Youtube',
              href: 'https://www.youtube.com/channel/UCHR1mB4V00ggI3v-CUwfUBQ',
            },
          ],
        },
        {
          // title: 'More',
          items: [
            {
              label: 'Discord',
              to: 'https://discord.gg/PcbP4uedWj',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/gratheon',
            },
          ],
        },
      ],
      // copyright: `Copyright © ${new Date().getFullYear()} Gratheon`,
    },

    blog: {
      sidebar: {
        groupByYear: true,
      },
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'api',
        path: './about',
        routeBasePath: 'about',
        sidebarPath: 'sidebars.ts',
        // ... other options
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'research',
        path: './research',
        routeBasePath: 'research',
        sidebarPath: 'sidebars.research.ts',
        // ... other options
      },
    ],
  ],
};

export default config;
