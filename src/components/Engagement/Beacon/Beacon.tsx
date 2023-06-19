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
import "./Beacon.module.scss";

export interface BeaconProps extends HeadingProps {
    colorScheme: string;
    size: "lg" | "md" | "sm" | "xs" | "2xl" | "xl";
}

const Beacon = (props: BeaconProps) => {

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
            case "2xl":
                return "48px";
            case "xl":
                return "40px";
            default:
                return "32px";
        }
    }

    const pxSize = sizeToPx();

    return (
        <Box className={'sway_ui_beacon ' + props.size} bg={props.colorScheme} h={pxSize} w={pxSize} borderRadius={'100%'}/>
    );
}

export default Beacon;
