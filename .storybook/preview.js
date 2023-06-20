const theme = require('../src/theme/index').theme;

let themeModifiedForStorybook = {
  ...theme,
  fonts: {
    ...theme.fonts,
    body: 'Inter, sans-serif',
    heading: 'Inter, sans-serif',
  }
}

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  chakra: {
    theme: themeModifiedForStorybook,
  },
  backgrounds: {
    default: 'light',
    values: [
      {
        name: 'light',
        value: '#fff',
      },
      {
        name: 'dark',
        value: '#161616',
      },
    ],
  },
}
