import { inputAnatomy as parts } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system'
import { getColor, mode } from '@chakra-ui/theme-tools'

const { definePartsStyle } = createMultiStyleConfigHelpers(parts.keys)

function getDefaults(props: Record<string, any>) {
  const { focusBorderColor: fc, errorBorderColor: ec } = props
  return {
    focusBorderColor: fc || mode('blue.500', 'blue.300')(props),
    errorBorderColor: ec || mode('red.500', 'red.300')(props),
  }
}

const variantOutline = definePartsStyle((props) => {
  const { theme } = props
  const { focusBorderColor: fc, errorBorderColor: ec } = getDefaults(props)

  return {
    field: {
      bg: props.colorMode === 'light' ? '#fff' : '#232323',
      border: '1px solid ' + (props.colorMode === 'light' ? '#dbe6f3' : '#2e2e2e'),
      boxShadow: 'rgba(50, 50, 93, 0.05) 0px 2px 5px -1px, rgba(0, 0, 0, 0.1) 0px 1px 3px -1px',
      borderRadius: 8,
      _hover: {
        borderColor: 'gray.300',
      },
      _invalid: {
        borderColor: getColor(theme, ec),
        boxShadow: 'none',
      },
      _focusVisible: {
        zIndex: 1,
        borderColor: getColor(theme, fc),
        boxShadow: 'none',
      },
      _dark: {
        _hover: {
          borderColor: 'whiteAlpha.400',
        },
        _invalid: {
          borderColor: getColor(theme, ec),
        },
        _focusVisible: {
          borderColor: getColor(theme, fc),
        },
      },
    },
    addon: {
      borderColor: 'inherit',
      bg: 'gray.100',
      _dark: {
        borderColor: 'whiteAlpha.50',
        bg: 'whiteAlpha.300',
      },
    },
  }
})

const sizes = {
  sm: {
    field: {
      borderRadius: '4px',
      h: 8,
    },
    addon: {
      borderRadius: '4px',
      h: 8,
    },
  },
  md: {
    field: {
      borderRadius: '5px',
      px: 3,
      h: 9,
    },
    addon: {
      borderRadius: '5px',
      px: 3,
      h: 9,
    },
  },
}

const Input = {
  defaultProps: {
    variant: 'outline',
    size: 'md',
    focusBorderColor: 'primary.500',
    fontWeight: '500',
  },
  variants: {
    outline: variantOutline,
  },
  sizes,
}

export default {
  FormLabel: {
    baseStyle: {
      mb: 1,
    },
    variants: {
      horizontal: {
        mb: 0,
        marginStart: '0.5rem',
      },
    },
  },
  Input,
  NumberInput: Input,
  PinInput: Input,
  Textarea: Input,
  Select: Input,
}
