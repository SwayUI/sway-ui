import React from "react";
import {SwayProvider} from "../src";

const theme = require('../src/theme/index').theme;

export const decorators = [
  (Story, context) => {
    return (
      <SwayProvider theme={theme}>
        <Story  />
      </SwayProvider>
    );
  }
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  chakra: {
    theme: theme,
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
        value: '#141a23',
      }
      ]
  }
}
