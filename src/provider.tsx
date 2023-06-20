import * as React from 'react'
import { ChakraProvider, ChakraProviderProps } from '@chakra-ui/react'
import { theme as defaultTheme } from './theme'

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
                {children}
            </ChakraProvider>
        </SwayContext.Provider>
    )
}

export const useSway = (): SwayContextValue => React.useContext(SwayContext)
