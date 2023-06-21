import React from "react";
import {Flex, FlexProps, useColorModeValue} from "@chakra-ui/react";

export interface NavbarLogoProps extends FlexProps {
    logo: React.ReactNode;
    action?: React.ReactNode;
}

const NavbarLogo = (props: NavbarLogoProps) => {

    return (
        <Flex
            direction={'row'}
            justifyContent={'space-between'}
            alignItems={'center'}
            maxW={'150px'}
            h='100%'
            px={3}
            py={2}
            {...props}>
            {props.logo}
            {props.action && props.action}
        </Flex>
    );
}

export default NavbarLogo;
