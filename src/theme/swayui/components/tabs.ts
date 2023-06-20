import {ChakraStyledOptions} from "@chakra-ui/react";
import {StyleFunctionProps} from "@chakra-ui/theme-tools";

export default {
    variants: {
        'soft-rounded': (props: StyleFunctionProps) => ({
            tab: {
                borderRadius: '5px',
                fontWeight: 'semibold',
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
        outline: (props: StyleFunctionProps) => ({
            tab: {
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
}
