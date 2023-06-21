import * as React from 'react'
import {ChakraProvider, ChakraProviderProps, ColorModeScript} from '@chakra-ui/react'
import { theme as defaultTheme } from './theme'
import { Global } from '@emotion/react';

const Fonts = () => (
    <Global
        styles={`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');`}
    />
)

export interface SwayContextValue {
    linkComponent?: React.ElementType<any>
    onError?: (error: Error, errorInfo: React.ErrorInfo) => void
}

export const SwayContext = React.createContext<SwayContextValue>({})

interface SwayProviderProps extends ChakraProviderProps {
    theme?: any
    linkComponent?: React.ElementType<any>
    children: React.ReactNode
    onError?: (error: Error, errorInfo: React.ErrorInfo) => void
}

export function SwayProvider({
                                 theme,
                                 linkComponent,
                                 onError,
                                 children,
                                 ...rest
                             }: SwayProviderProps) {
    const context = {
        linkComponent,
        onError,
    }

    return (
        <SwayContext.Provider value={context}>
            <ChakraProvider {...rest} theme={theme || defaultTheme}>
                <Fonts/>
                {children}
                <ColorModeScript initialColorMode={"system"}/>
            </ChakraProvider>
        </SwayContext.Provider>
    )
}

export const useSway = (): SwayContextValue => React.useContext(SwayContext)
