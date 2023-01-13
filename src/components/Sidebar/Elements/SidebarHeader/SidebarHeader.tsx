import React from "react";
import {Flex, FlexProps, useColorModeValue} from "@chakra-ui/react";

export interface SidebarHeaderProps extends FlexProps {
    logo: React.ReactNode;
    action?: React.ReactNode;
}

const SidebarHeader = (props: SidebarHeaderProps) => {

    const borderColor = useColorModeValue('1px solid #f2f2f2', '1px solid #262626');

    return (
        <Flex
            direction={'row'}
            justifyContent={'space-between'}
            alignItems={'center'}
            w={'100%'}
            h='45px'
            px={3}
            py={2}
            borderBottom={borderColor}
            {...props}>
            {props.logo}
            {props.action && props.action}
        </Flex>
    );
}

export default SidebarHeader;
