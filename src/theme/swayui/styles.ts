import { mode, Styles } from '@chakra-ui/theme-tools'

// @ts-ignore
const styles: Styles = {
    global: (props) => ({
        body: {
            bg: mode('#f9fbfc', '#161616')(props),
            WebkitFontSmoothing: 'antialiased',
            TextRendering: 'optimizelegibility',
        },
        '*, *::before, &::after': {
            borderColor: mode('gray.200', 'whiteAlpha.200')(props),
            wordWrap: 'break-word',
        },
    }),
}

export default styles
