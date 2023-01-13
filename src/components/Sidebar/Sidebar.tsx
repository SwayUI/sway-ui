import React from "react";
import "./sidebar.module.scss";
import {Heading, HeadingProps, Stack, StackProps, TextProps, useColorModeValue} from "@chakra-ui/react";

export interface SidebarProps extends StackProps{
    children: React.ReactNode;
}

const Sidebar = (props: SidebarProps) => {

    const bgColor = useColorModeValue('#fbfbfb', '#222222');
    const borderColor = useColorModeValue('1px solid #e8e8e8', '1px solid #262626');

    return (
        <Stack className="sidebar-container" bg={bgColor} borderRight={borderColor} {...props}>
            {props.children}
        </Stack>
    );
}

export default Sidebar;
