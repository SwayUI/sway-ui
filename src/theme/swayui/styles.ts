import { mode, Styles } from '@chakra-ui/theme-tools'

// @ts-ignore
const styles: Styles = {
    global: (props) => ({
        body: {
            bg: mode('white', 'gray.900')(props),
            WebkitFontSmoothing: 'antialiased',
            TextRendering: 'optimizelegibility',
        },
        "docs-story": {
            bg: mode('white', 'gray.900')(props),
        },
        '*, *::before, &::after': {
            borderColor: mode('gray.200', 'whiteAlpha.200')(props),
            wordWrap: 'break-word',
        },
    }),
}

export default styles
