// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Age of Dinos Whitepaper',
  tagline: 'A full decentralized play-and-earn dinosaur game',
  url: 'https://whitepaper.cryptotrexnft.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'pixel8labs', // Usually your GitHub org/user name.
  projectName: 'whitepaper', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          // Please change this to your repo.
          // editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Age of Dinos Whitepaper',
        logo: {
          alt: 'Age of Dinos Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            href: 'https://cryptotrexnft.com',
            label: 'Official Website',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/ekk838XkbV',
              },
              {
                label: 'Twitter',
                href: 'https://www.twitter.com/cryptotrexnft/',
              },
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/cryptotrexnft/',
              },
            ],
          },
          // {
          // title: 'More',
          // items: [
          //   {
          //     label: 'Blog',
          //     to: '/blog',
          //   },
          //   {
          //     label: 'GitHub',
          //     href: 'https://github.com/facebook/docusaurus',
          //   },
          // ],
          // },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Pixel8 Labs. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
