import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: 'Inter, sans-serif',
    body: 'Inter, sans-serif',
  },
  components: {
    Alert: {
      baseStyle: {
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
          fontSize: 12,
        },
        icon: {
          flexShrink: 0,
          marginEnd: 3,
          w: 5,
          h: 6,
        },
      },
    },
    Button: {
      baseStyle: {
        fontWeight: 500,
        borderRadius: 8,
        letterSpacing: '-0.01em',
      },
      sizes: {
        sm: {
          fontWeight: '500',
          fontSize: '13px',
          px: '11px',
        },
        md: {
          h: '40px',
          fontSize: 'sm',
          px: '16px',
        },
        lg: {
          fontSize: 'sm',
          px: '16px',
        },
        xl: {
          fontSize: 'sm',
          px: '16px',
        },
      },
      variants: {
        stripe: (props) => ({
          bg: props.colorMode === 'light' ? '#fff' : '#232323',
          border: '1px solid #dbe6f3',
          boxShadow: 'rgba(50, 50, 93, 0.05) 0px 2px 5px -1px, rgba(0, 0, 0, 0.1) 0px 1px 3px -1px',
        }),
        outline: (props) => ({
          bg: props.colorMode === 'light' ? '#fff' : '#232323',
          border: '1px solid #D0D5DD',
          boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
          borderRadius: 8,
        }),
        primary: {
          bg: '#BB2030',
          color: '#fff',
          border: '1px solid #8e1723',
          boxShadow: '0px 1px 2px rgba(167, 38, 38, 0.2)',
          borderRadius: 8,
          fontWeight: 500,
          _hover: {
            bg: '#8e1723',
            color: '#fff',
          },
        },
      },
    },
    Badge: {
      baseStyle: {
        borderRadius: 5,
        px: 2,
        paddingTop: 0.5,
        paddingBottom: 0.5,
        fontWeight: 600,
        textTransform: 'none',
      },
      variants: {},
    },
    Textarea: {
      baseStyle: (props) => ({
        fontSize: 12,
        bg: props.colorMode === 'light' ? '#fff' : '#232323',
        border: '1px solid ' + (props.colorMode === 'light' ? '#dbe6f3' : '#2e2e2e'),
        boxShadow: 'rgba(50, 50, 93, 0.05) 0px 2px 5px -1px, rgba(0, 0, 0, 0.1) 0px 1px 3px -1px',
        borderRadius: 8,
      }),
      variants: {
        outline: (props) => ({
          bg: props.colorMode === 'light' ? '#fff' : '#232323',
          _focus: {
            zIndex: 1,
            borderColor: props.colorMode === 'light' ? '#dbe6f3' : '#2e2e2e',
          },
        }),
        stripe: (props) => ({
          bg: props.colorMode === 'light' ? '#fff' : '#232323',
          color: props.colorMode === 'light' ? '#000' : '#fff',
          border: '1px solid ' + (props.colorMode === 'light' ? '#dbe6f3' : '#2e2e2e'),
          boxShadow: 'rgba(50, 50, 93, 0.05) 0px 2px 5px -1px, rgba(0, 0, 0, 0.1) 0px 1px 3px -1px',
        }),
      },
    },
    Input: {
      baseStyle: (props) => ({
        field: {
          fontSize: 12,
          bg: props.colorMode === 'light' ? '#fff' : '#232323',
          border: '1px solid ' + (props.colorMode === 'light' ? '#e5e5e5' : '#4a4a4a'),
          boxShadow: 'rgba(50, 50, 93, 0.05) 0px 2px 5px -1px, rgba(0, 0, 0, 0.1) 0px 1px 3px -1px',
          borderRadius: 8,
        },
        addon: {
          bg: '#52577f14',
        },
      }),
      variants: {
        outline: (props) => ({
          field: {
            bg: props.colorMode === 'light' ? '#fff' : '#232323',
            border: '1px solid ' + (props.colorMode === 'light' ? '#e5e5e5' : '#4a4a4a'),
            color: props.colorMode === 'light' ? '#000' : '#fff',
            _focus: {
              zIndex: 1,
              border: '1px solid ' + (props.colorMode === 'light' ? '#dbe6f3' : '#2e2e2e'),
            },
          },
        }),
        sidebar: (props) => ({
          field: {
            bg: props.colorMode === 'light' ? '#52577f14' : '#232323',
            color: props.colorMode === 'light' ? '#000' : '#fff',
            boxShadow: 'none',
            border: 'none',
            _focus: {
              borderColor: 'transparent',
              boxShadow: 'none',
            },
          },
          addon: {
            bg: props.colorMode === 'light' ? '#52577f14' : '#232323',
          },
        }),
        stripe: (props) => ({
          field: {
            bg: props.colorMode === 'light' ? '#fff' : '#232323',
            border: '1px solid ' + (props.colorMode === 'light' ? '#e5e5e5' : '#4a4a4a'),
            boxShadow: 'rgba(50, 50, 93, 0.05) 0px 2px 5px -1px, rgba(0, 0, 0, 0.1) 0px 1px 3px -1px',
            color: props.colorMode === 'light' ? '#000' : '#fff',
          },
          addon: {
            bg: '#52577f14',
          },
        }),
      },
      sizes: {
        lg: {
          field: {
            fontSize: 'sm',
          },
          addon: {
            fontSize: 'sm',
          },
        },
        md: {
          field: {
            fontSize: 'sm',
          },
          addon: {
            fontSize: 'sm',
          },
        },
        sm: {
          field: {
            fontSize: 'sm',
            borderRadius: '5px',
          },
          addon: {
            fontSize: 'sm',
          },
        },
        xs: {
          field: {
            fontSize: 'sm',
          },
          addon: {
            fontSize: 'sm',
          },
        },
      },
    },
    Select: {
      baseStyle: (props) => ({
        field: {
          bg: props.colorMode === 'light' ? '#fff' : '#232323',
          fontWeight: '500',
          border: '1px solid ' + (props.colorMode === 'light' ? '#dbe6f3' : '#2e2e2e'),
          boxShadow: 'rgba(50, 50, 93, 0.05) 0px 2px 5px -1px, rgba(0, 0, 0, 0.1) 0px 1px 3px -1px',
          borderRadius: 8,
        },
        addon: {
          bg: '#52577f14',
        },
      }),
      sizes: {
        sm: {
          field: {
            borderRadius: '5px',
          },
        },
      },
      variants: {
        outline: (props) => ({
          field: {
            bg: props.colorMode === 'light' ? '#fff' : '#232323',
            border: '1px solid ' + (props.colorMode === 'light' ? '#dbe6f3' : '#2e2e2e'),
            _focus: {
              zIndex: 1,
            },
          },
        }),
      },
    },
    Avatar: {
      baseStyle: {
        container: {
          background: '#f5f5f5',
          color: '#000',
        },
      },
    },
    Menu: {
      baseStyle: (props) => ({
        item: {
          fontSize: '14px',
          fontFamily: 'Inter, sans-serif',
          color: props.colorMode === 'light' ? '#000' : '#fff',
        },
        button: {
          fontWeight: '600',
          borderRadius: '4px',
          fontFamily: 'Inter, sans-serif',
        },
      }),
    },
    Modal: {
      baseStyle: (props) => ({
        dialog: {
          border: '1px solid ' + (props.colorMode === 'light' ? '#dbe6f3' : '#2e2e2e'),
          bg: props.colorMode === 'light' ? '#fff' : '#232323',
        },
        footer: {
          bg: props.colorMode === 'light' ? '#fff' : '#232323',
        },
      }),
    },
    Tabs: {
      variants: {
        'soft-rounded': (props) => ({
          tab: {
            borderRadius: '5px',
            fontWeight: 'semibold',
            fontFamily: 'Inter, sans-serif',
            color: '#aaadbc',
            _selected: {
              color: props.colorMode === 'light' ? '#000' : '#fff',
              bg: props.colorMode === 'light' ? '#fff' : '#171717',
              boxShadow: '0 3px 8px 0 rgba(0,0,0,0.08), 0 3px 1px 0 rgba(0,0,0,0.04)',
            },
            _active: {
              color: props.colorMode === 'light' ? '#000' : '#fff',
              bg: props.colorMode === 'light' ? '#fff' : '#171717',
              boxShadow: '0 3px 8px 0 rgba(0,0,0,0.08), 0 3px 1px 0 rgba(0,0,0,0.04)',
            },
            _focus: {
              color: props.colorMode === 'light' ? '#000' : '#fff',
              bg: props.colorMode === 'light' ? '#fff' : '#171717',
              boxShadow: '0 3px 8px 0 rgba(0,0,0,0.08), 0 3px 1px 0 rgba(0,0,0,0.04)',
            },
          },
          tablist: {
            bg: props.colorMode === 'light' ? '#f8f8fb' : '#262626',
            borderRadius: '10px',
            px: 1,
            py: 1,
            marginTop: 0,
          },
        }),
        outline: (props) => ({
          tab: {
            fontFamily: 'Inter, sans-serif',
            color: props.colorMode === 'light' ? 'gray.800' : '#787878',
            fontWeight: 600,
            px: 3,
            py: '5px',
            whiteSpace: 'nowrap',
            fontSize: '13px',
            letterSpacing: '-0.02em',
            borderColor: props.colorMode === 'light' ? '#d0d5dd' : '#2e2e2e',
            _selected: {
              color: props.colorMode === 'light' ? '#000' : '#fff',
              bg: props.colorMode === 'light' ? '#fff' : '#171717',
              fontWeight: 600,
            },
            _active: {
              color: props.colorMode === 'light' ? '#000' : '#fff',
              bg: props.colorMode === 'light' ? '#fff' : '#171717',
            },
            _focus: {
              color: props.colorMode === 'light' ? '#000' : '#fff',
              bg: props.colorMode === 'light' ? '#fff' : '#171717',
            },
            _notLast: {
              borderRight: '1px solid #D0D5DD',
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0,
              borderColor: props.colorMode === 'light' ? '#d0d5dd' : '#2e2e2e',
            },
            _first: {
              borderTopLeftRadius: 8,
              borderBottomLeftRadius: 8,
              borderColor: props.colorMode === 'light' ? '#d0d5dd' : '#2e2e2e',
            },
            _last: {
              borderTopRightRadius: 8,
              borderBottomRightRadius: 8,
              borderColor: props.colorMode === 'light' ? '#d0d5dd' : '#2e2e2e',
            },
          },
          tablist: {
            borderRadius: 8,
            marginTop: 0,
            shadow: 'base',
            border: '1px solid ' + (props.colorMode === 'light' ? '#d0d5dd' : '#454545'),
          },
        }),
      },
    },
    Tooltip: {
      baseStyle: {
        px: '8px',
        py: '2px',
        bg: 'white',
        color: '#000',
        border: '1px solid #eff1f4',
        borderRadius: 'md',
        fontWeight: 'medium',
        fontSize: 'sm',
        boxShadow: 'md',
        maxW: '320px',
        zIndex: 'tooltip',
      },
    },
  },
  colors: {

    red: {
      50: '#f8e9ea',
      100: '#ebbcc1',
      200: '#dd9098',
      300: '#cf636e',
      400: '#c23645',
      500: '#bb2030',
      600: '#a81d2b',
      700: '#831622',
      800: '#5e1018',
      900: '#380a0e',
    },
  },
  config: {
    cssVarPrefix: 'mb',
    initialColorMode: 'system',
    useSystemColorMode: true,
  },
});

export default theme;
