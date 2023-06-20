import { alertAnatomy as parts } from '@chakra-ui/anatomy'
import {
  createMultiStyleConfigHelpers,
  cssVar,
  StyleFunctionProps,
} from '@chakra-ui/styled-system'
import { transparentize } from '@chakra-ui/theme-tools'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys)

const $fg = cssVar('alert-fg')
const $bg = cssVar('alert-bg')
const $b = cssVar('alert-border')

function getBg(props: StyleFunctionProps) {
  const { theme, colorScheme: c } = props
  const darkBg = transparentize(`${c}.600`, 0.16)(theme)
  return {
    light: `colors.${c}.100`,
    dark: darkBg,
  }
}

function getBorder(props: StyleFunctionProps) {
  const { theme, colorScheme: c } = props
  const darkBg = transparentize(`${c}.300`, 0.16)(theme)
  return {
    light: `colors.${c}.200`,
    dark: darkBg,
  }
}

const variantSubtle = definePartsStyle((props) => {
  const { colorScheme: c } = props
  const bg = getBg(props)
  const border = getBorder(props)
  return {
    container: {
      borderWidth: '1px',
      [$fg.variable]: `colors.${c}.500`,
      [$bg.variable]: bg.light,
      [$b.variable]: border.light,
      _dark: {
        [$fg.variable]: `colors.${c}.500`,
        [$bg.variable]: bg.dark,
        [$b.variable]: border.dark,
      },
    },
  }
})

const baseStyle = definePartsStyle(() => {
  return {
    container: {
      borderRadius: 5,
    },
    title: {
      fontWeight: 'bold',
      fontSize: 14,
      lineHeight: 4,
      marginEnd: 2,
    },
    description: {
      lineHeight: 4,
      fontSize: 13,
      fontWeight: 500,
      paddingTop: 1
    },
    icon: {
      flexShrink: 0,
      marginEnd: 3,
      w: 5,
      h: 6,
    },
  }
})

export default defineMultiStyleConfig({
  defaultProps: {
    size: 'sm',
    colorScheme: 'primary',
  },
  baseStyle,
  variants: {
    subtle: variantSubtle,
  },
})
