import React from "react";
import {HStack, StackProps, Text, useColorModeValue} from "@chakra-ui/react";

export interface SidebarItemProps extends StackProps {
    name: string;
    icon?: JSX.Element;
    customText?: React.ReactNode;
}

const SidebarItem = (props: SidebarItemProps) => {

    const iconColor = useColorModeValue('gray.700', 'gray.300');

    return (
        <HStack
            w={'100%'}
            px={4}
            py={'4px'}
            spacing={2}
            style={{marginTop: 0}}
            {...props}>
            {props.icon && props.icon}
            {props.customText ? props.customText : (
                <Text fontWeight={600} fontSize={14} color={iconColor}>{props.name}</Text>
            )}
        </HStack>
    );
}

export default SidebarItem;
