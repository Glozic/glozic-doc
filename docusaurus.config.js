// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Docs',
  tagline: 'Rapid Cloud Application Builder',
  favicon: 'img/glozic-favicon.gif',

  // Set the production url of your site here
  url: 'https://glozic-docs.netlify.app',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Glozic', // Usually your GitHub org/user name.
  projectName: 'glozic-docs', // Usually your repo name.
  //deploymentBranch: "source",

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/glozic-logo-small.png', //'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Learning',
        logo: {
          alt: 'My Site Logo',
          src: 'img/glozic-logo-small.png', //'img/logo.svg',
        },
        //items: [
        //  {
        //    type: 'docSidebar',
        //    sidebarId: 'tutorialSidebar',
        //    position: 'left',
        //    label: 'Tutorial',
        //  },
          //{to: '/blog', label: 'Blog', position: 'left'},
        //  {
        //    href: 'https://www.glozic.com',
        //    label: 'Glozic',
        //    position: 'right',
        //  },
        //],
      },
      footer: {
        style: 'dark',
        links: [
          //{
          //  title: 'Docs',
          //  items: [
          //    {
          //      label: 'Tutorial',
          //      to: '/docs/intro',
          //    },
          //  ],
          //},
          //{
          //  title: 'Community',
          //  items: [
              //{
              //  label: 'Stack Overflow',
              //  href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              //},
              //{
              //  label: 'Discord',
              //  href: 'https://discordapp.com/invite/docusaurus',
              //},
           //   {
           //     label: 'Twitter',
           //     href: 'https://x.com/glozic-docs',
           //   },
           // ],
          //},
          //{
          //  title: 'More',
          //  items: [
          //    {
          //      label: 'Blog',
          //      to: 'https://www.glozic.com/blogs',
          //    },
          //    {
          //      label: 'GitHub',
          //      href: 'https://github.com/Glozic',
          //    },
          //  ],
          //},
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Glozic Pte. Ltd.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
