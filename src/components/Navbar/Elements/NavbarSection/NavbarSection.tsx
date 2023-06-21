import React from "react";
import {Flex, FlexProps, useColorModeValue} from "@chakra-ui/react";

export interface NavbarSectionProps extends FlexProps {
    flex?: number | number[];
    children: React.ReactNode;
}

const NavbarSection = (props: NavbarSectionProps) => {

    return (
        <Flex
            direction={'row'}
            justifyContent={'space-between'}
            alignItems={'center'}
            flexGrow={props.flex || 1}
            h='100%'
            px={3}
            py={2}
            {...props}>
            {props.children}
        </Flex>
    );
}

export default NavbarSection;
