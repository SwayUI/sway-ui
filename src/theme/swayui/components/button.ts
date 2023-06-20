import { defineStyle, defineStyleConfig } from '@chakra-ui/styled-system'

const variantSolid = defineStyle((props) => {
  const { colorScheme: c } = props

  const color = `${c}.500`
  const hoverColor = `${c}.600`

  return {
    borderWidth: '1px',
    borderColor: color,
    boxShadow: 'xs',
    bg: color,
    color: 'white',
    fontWeight: 'medium',
    _hover: {
      borderColor: hoverColor,
      bg: hoverColor,
    },
    _dark: {
      boxShadow: 'dark-xs',
    },
  }
})

const variantGhost = defineStyle((props) => {
  return {
    fontWeight: 'medium',
    _checked: {
      bg: 'blackAlpha.100',
    },
    _dark: {
      _checked: {
        bg: 'whiteAlpha.100',
      },
    },
  }
})

const variantOutline = defineStyle((props) => {
  const { colorScheme: c } = props

  if (c === 'gray') {
    return {
      fontWeight: 'medium',
    }
  }

  return {
    fontWeight: 'medium',
    color: `${c}.500`,
    _hover: {
      color: `${c}.400`,
      bg: 'blackAlpha.50',
    },
    _dark: {
      color: `${c}.500`,
      _hover: {
        color: `${c}.400`,
        bg: 'whiteAlpha.50',
      },
    },
  }
})

const variantPrimary = defineStyle((props) => {
  return variantSolid({ ...props, colorScheme: 'primary' })
})

const variantSecondary = defineStyle({
  borderWidth: '1px',
  borderColor: 'gray.200',
  boxShadow: 'xs',
  bg: 'white',
  fontWeight: 'medium',
  color: 'inherit',
  _hover: {
    borderColor: 'gray.300',
    bg: 'gray.50',
  },
  _dark: {
    boxShadow: 'dark-xs',
    borderColor: 'gray.600',
    bg: 'transparent',
    _hover: {
      borderColor: 'gray.500',
      bg: 'gray.600',
    },
  },
})

const variantTertiary = defineStyle({
  borderWidth: '1px',
  borderColor: 'gray.200',
  bg: 'gray.200',
  color: 'black',
  fontWeight: 'medium',
  _hover: {
    borderColor: 'gray.300',
    bg: 'gray.200',
  },
  _dark: {
    borderColor: 'gray.700',
    bg: 'gray.700',
    color: 'white',
    _hover: {
      borderColor: 'gray.600',
    },
  },
})

const sizes = {
  lg: defineStyle({
    h: '9',
    minW: '9',
    fontSize: 'md',
    px: '4',
    rounded: '8',
  }),
  md: defineStyle({
    h: '8',
    minW: '8',
    fontSize: 'sm',
    px: '3',
    rounded: '8',
  }),
  sm: defineStyle({
    h: '7',
    minW: '7',
    fontSize: 'sm',
    px: '2',
    rounded: '6',
  }),
  xs: defineStyle({
    h: '6',
    minW: '6',
    fontSize: 'xs',
    px: '1',
    rounded: '5',
  }),
}

export default defineStyleConfig({
  defaultProps: {
    size: 'md',
    variant: 'secondary',
  },
  variants: {
    solid: variantSolid,
    outline: variantOutline,
    ghost: variantGhost,
    primary: variantPrimary,
    secondary: variantSecondary,
    tertiary: variantTertiary
  },
  sizes,
})
