import React from "react";
import {HStack, StackProps, Text, useColorModeValue, useToken} from "@chakra-ui/react";
// @ts-ignore
import Emoji from 'react-emojis';

export interface SidebarItemProps extends StackProps {
    name: string;
    icon?: (props: React.ComponentProps<'svg'> & { title?: string, titleId?: string }) => JSX.Element;
    emoji?: string;
    customText?: React.ReactNode;
    hasPaddingLeft?: boolean;
}

const SidebarItem = (props: SidebarItemProps) => {

    const [gray300, gray700] = useToken(
        'colors',
        ['gray.500', 'gray.700'],
    )

    const iconColor = useColorModeValue(gray300, gray700);
    const textColor = useColorModeValue('gray.900', 'gray.300');

    return (
        <HStack
            w={'100%'}
            px={5}
            py={'5px'}
            pl={props.hasPaddingLeft ? 8 : 5}
            cursor={'pointer'}
            spacing={2}
            style={{marginTop: 0}}
            _hover={{
                bg: useColorModeValue('gray.100', 'gray.700'),
            }}
            {...props}>
            {props.icon && (
                <>
                    {React.createElement(props.icon, {color: iconColor, width: 18, height: 18, strokeWidth: 2})}
                </>
            )}
            {props.emoji && (
                <Emoji emoji={props.emoji} size={"15"}/>
            )}
            {props.customText ? props.customText : (
                <Text fontWeight={500} fontSize={14} noOfLines={1} color={textColor}>{props.name}</Text>
            )}
        </HStack>
    );
}

export default SidebarItem;
