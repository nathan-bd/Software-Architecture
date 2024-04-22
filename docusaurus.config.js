import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Software Architecture",
  tagline: "Lets Learn",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://nathan-bd.github.io",
  baseUrl: "/Software-Architecture/",
  projectName: "Software-Architecture",
  organizationName: "nathan-bd",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      colorMode: {
        disableSwitch: true,
      },
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "Software Architecture",
        logo: {
          alt: "logo",
          src: "img/logo.png",
        },
        style: "dark",

        items: [
          {
            label:
              'github', 
            position: "right",
            href: "https://github.com/nathan-bd",
            className: "header-github-link",
          },
        ],
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
