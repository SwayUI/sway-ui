import React from "react";
import "./AppSidebarStructure.module.scss";
import { createContext } from '@chakra-ui/react-utils'
import {
    Flex,
    HTMLChakraProps,
    omitThemingProps, StylesProvider,
    SystemStyleObject,
    useBreakpointValue,
    useDisclosure, useMultiStyleConfig
} from '@chakra-ui/react'
import { cx } from '@chakra-ui/utils';
import {Breakpoints, getBreakpoints} from "../../Sidebar/Utils/SidebarBreakpoint";
import {ThemingProps} from "@chakra-ui/system";

export const [AppSidebarStructureProvider, useAppSidebarStructureContext] = createContext<
    ReturnType<typeof useAppSidebarStructure>
>({
    strict: false,
    errorMessage: 'AppSidebarStructure context not available.',
})

export interface UseAppSidebarStructureProps {
    toggleBreakpoint?: Breakpoints
}

export const useAppSidebarStructure = (props: UseAppSidebarStructureProps) => {
    const disclosure = useDisclosure()

    const breakpoints = getBreakpoints(props.toggleBreakpoint)

    const isMobile = useBreakpointValue(breakpoints, {
        fallback: props.toggleBreakpoint || 'lg',
    })

    return {
        isSidebarOpen: disclosure.isOpen,
        closeSidebar: disclosure.onClose,
        openSidebar: disclosure.onOpen,
        toggleSidebar: disclosure.onToggle,
        isMobile,
    }
}

export interface AppSidebarStructureProps extends HTMLChakraProps<'div'>, ThemingProps<'SwayAppSidebarStructure'> {
    sidebar?: React.ReactElement;
    navbar?: React.ReactNode;
    aside?: React.ReactNode;
    footer?: React.ReactNode;
    children: React.ReactNode;
}

const AppSidebarStructure = (props: AppSidebarStructureProps) => {

    const styles = useMultiStyleConfig('SwayAppSidebarStructure', props) as Record<
        string,
        SystemStyleObject
    >

    const { navbar, sidebar, aside, footer, children, ...containerProps } = omitThemingProps(props);

    const isSidebar =
        React.isValidElement(sidebar) && (sidebar as any).type.id === 'Sidebar'

    const context = useAppSidebarStructure({
        toggleBreakpoint: isSidebar
            ? (sidebar as any)?.props.toggleBreakpoint
            : undefined,
    })

    const containerStyles: SystemStyleObject = {
        flexDirection: 'column',
        ...styles.container,
    }

    const innerStyles: SystemStyleObject = {
        flex: 1,
        minHeight: 0,
        minWidth: 0,
        ...styles.inner,
    }

    const mainStyles: SystemStyleObject = {
        flex: 1,
        flexDirection: 'column',
        minWidth: 0,
        ...styles.main,
    }

    return (
        <AppSidebarStructureProvider value={context}>
            <StylesProvider value={styles}>
                <Flex
                    {...containerProps}
                    sx={containerStyles}
                    className={cx('sway-app-sidebar-structure', props.className)}
                >
                    {navbar}
                    <Flex sx={innerStyles} className="sway-app-sidebar-structure__inner">
                        {sidebar}
                        <Flex sx={mainStyles} className="sway-app-sidebar-structure__main">
                            {children}
                        </Flex>
                        {aside}
                    </Flex>
                    {footer}
                </Flex>
            </StylesProvider>
        </AppSidebarStructureProvider>

    );
}

export default AppSidebarStructure;
