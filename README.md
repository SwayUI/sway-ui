<img src="https://i.imgur.com/E9QzoQj.png" style="background: #fff; padding: 20px; height: 100px; border-radius: 20px"/>

🎨 The React UI library for SaaS built with Chakra UI

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Npm package version](https://badgen.net/npm/v/@swayui/sway-ui)](https://npmjs.com/package/@swayui/sway-ui)

___

## :cloud: Installation

### Install first [Chakra UI](https://chakra-ui.com/getting-started) :
```shell
npm install @chakra-ui/react @emotion/react @emotion/styled framer-motion @heroicons/react
```
or
```shell
yarn add @chakra-ui/react @emotion/react @emotion/styled framer-motion @heroicons/react
```

### And then install SwayUI :

```shell  
npm install @swayui/sway-ui 
```  
or
```shell  
yarn add @swayui/sway-ui 
```  

## :rocket: Usage

```jsx
import { SwayProvider, theme, DotBadge } from "@swayui/sway-ui";

function App() {
  return (
    <SwayProvider theme={theme}>
      <DotBadge colorScheme={'green.300'} size={'sm'} text={'Active'}/>
    </SwayProvider>
  );
}
```

## :raised_hands: Documentation

![Documentation](https://img.shields.io/badge/Documentation-📚-blue.svg)

Documentation and examples are available here : [Example of use](https://swayui.github.io/sway-ui)

## :mag_right: Credits

sway-ui is a library of  [Clément de Louvencourt](https://github.com/c-delouvencourt)

**Special thanks to:**

- *Your name here ?*
