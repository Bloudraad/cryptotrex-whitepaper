/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually

  tutorialSidebar: [
    {
      type: 'doc',
      label: 'Executive Summary',
      id: 'executive_summary',
    },
    {
      type: 'doc',
      label: 'Backstory',
      id: 'backstory',
    },
    {
      type: 'doc',
      label: 'Dinosaurs',
      id: 'dinosaurs',
    },
    {
      type: 'doc',
      label: 'Gameplay',
      id: 'gameplay',
    },
    {
      type: 'doc',
      label: 'Marketplace',
      id: 'marketplace',
    },
    {
      type: 'doc',
      label: 'Staking',
      id: 'staking',
    },
    {
      type: 'category',
      label: 'Tokenomics',
      items: [
        {
          type: 'doc',
          label: 'Overview',
          id: 'tokenomics',
        },
        {
          type: 'category',
          label: 'Allocations',
          items: [
            'allocations_ecosystem',
            'allocations_development',
            'allocations_advisors',
            'allocations_p2e',
            'allocations_private',
            'allocations_public',
          ],
        },
      ],
    },
    {
      type: 'doc',
      label: 'Team',
      id: 'team',
    },
  ],
};

module.exports = sidebars;
