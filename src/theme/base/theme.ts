import { theme, extendTheme, ChakraTheme } from '@chakra-ui/react'
import {components} from "./components";
import {mode, StyleFunctionProps} from "@chakra-ui/theme-tools";

export const baseTheme = extendTheme({
    colors: {
        primary: theme.colors.blue,
    },
    semanticTokens: {
        colors: {
            'presence.online': 'green.500',
            'presence.offline': 'gray.400',
            'presence.busy': 'orange.500',
            'presence.dnd': 'red.500',
            'presence.away': 'gray.400',
        },
    },
    components,
    styles: {
        global: (props: StyleFunctionProps) => ({
            body: {
                bg: props.colorMode === 'dark' ? 'gray.900' : 'gray.50',
            },
            "docs-story": {
                bg: mode('white', 'gray.900')(props),
            },
        })
    }
}) as ChakraTheme
