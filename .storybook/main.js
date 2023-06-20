module.exports = {
  "typescript": {
    "reactDocgen": true
  },
  "stories": ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  "addons": ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions", '@chakra-ui/storybook-addon', 'storybook-addon-sass-postcss'],
  "framework": {
    name: "@storybook/react-webpack5",
    options: {}
  },
  "features": {
    "emotionAlias": false
  },
  docs: {
    autodocs: true
  }
};
