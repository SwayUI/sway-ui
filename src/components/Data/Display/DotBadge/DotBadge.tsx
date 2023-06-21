import React from "react";
import {
    Avatar, AvatarBadge, Box,
    ChakraProps,
    Heading,
    HeadingProps,
    HStack,
    Stack, Text,
    TextProps,
    useColorModeValue
} from "@chakra-ui/react";

export interface DotBadgeProps {
    colorScheme?: string;
    text: string;
    size: "lg" | "md" | "sm" | "xs" | "xl";
}

const DotBadge = (props: DotBadgeProps) => {

    const sizeToPx = () => {
        switch(props.size){
            case "lg":
                return "32px";
            case "md":
                return "24px";
            case "sm":
                return "16px";
            case "xs":
                return "8px";
            case "xl":
                return "40px";
            default:
                return "32px";
        }
    }

    const textSizeToPx = () => {
        switch(props.size){
            case "lg":
                return "32px";
            case "md":
                return "24px";
            case "sm":
                return "14px";
            case "xs":
                return "12px";
            case "xl":
                return "40px";
            default:
                return "32px";
        }
    }

    const borderColor = useColorModeValue('gray.100', 'gray.600');

    const pxSize = sizeToPx();

    return (
        <Box display={'inline-block'}
             gap={3}
             border={'1px solid'}
             borderColor={borderColor}
             px={3}
             py={1}
             borderRadius={'lg'}
             boxShadow={'xs'}
             maxWidth={'auto'}
        >
            <HStack>
                <Box w={pxSize} h={pxSize} borderRadius={'100%'} bg={props.colorScheme || 'gray.500'}></Box>
                <Text fontWeight={500} noOfLines={1} isTruncated fontSize={textSizeToPx()}>{props.text}</Text>
            </HStack>

        </Box>

    );
}

export default DotBadge;
