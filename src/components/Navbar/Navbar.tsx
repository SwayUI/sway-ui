import React from "react";
import "./Navbar.module.scss";
import {Box, Heading, HeadingProps, Stack, StackProps, TextProps, useColorModeValue} from "@chakra-ui/react";

export interface NavbarProps extends StackProps{
    children: React.ReactNode;
}

const Navbar = (props: NavbarProps) => {

    const bgColor = useColorModeValue('white', 'gray.900');
    const borderColor = useColorModeValue('gray.100', 'gray.700');

    return (
        <Box className="navbar-container" bg={bgColor} borderBottomWidth={1} borderBottomColor={borderColor} {...props}>
            {props.children}
        </Box>
    );
}

export default Navbar;
