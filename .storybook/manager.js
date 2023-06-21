// .storybook/manager.js

import { addons } from '@storybook/manager-api';
import swayTheme from "./sway-theme";

addons.setConfig({
  theme: swayTheme,
  sidebar: {
    showRoots: true,
  },
});
