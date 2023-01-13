import React from "react";
import "./AppSidebarStructure.module.scss";
import {Container, Heading, HeadingProps, Stack, TextProps, useColorModeValue} from "@chakra-ui/react";

export interface AppSidebarStructureProps {
    sidebar: React.ReactNode;
    navbar?: React.ReactNode;
    children: React.ReactNode;
    disableContainer?: boolean;
}

const AppSidebarStructure = (props: AppSidebarStructureProps) => {
    return (
        <>
            {props.sidebar}
            <Stack className={'app_sidebar_structure_content'}>
                {props.disableContainer ? props.children : (
                    <Container maxW={'container.xl'} pt={3}>
                        {props.children}
                    </Container>
                )}
            </Stack>
        </>

    );
}

export default AppSidebarStructure;
