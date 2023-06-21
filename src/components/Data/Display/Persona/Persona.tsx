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

export interface PersonaProps {
    name: string;
    nameRightElement?: React.ReactNode;
    avatarUrl?: string;
    presence?: "online" | "offline" | "away" | "busy";
    secondaryText?: string;
    secondaryTextRightElement?: React.ReactNode;
    size: "lg" | "md" | "sm" | "xs" | "2xl" | "xl";
}

const Persona = (props: PersonaProps) => {

    const sizeToFontSize = {
        "xs": 11,
        "sm": 12,
        "md": 14,
        "lg": 17,
        "xl": 20,
        "2xl": 24,
    }

    function Badge(){
        if(props.presence === "online"){
            return <AvatarBadge boxSize='1.25em' bg='green.500' />
        }
        if(props.presence === "offline"){
            return <AvatarBadge boxSize='1.25em' bg='gray.500' />
        }
        if(props.presence === "away"){
            return <AvatarBadge boxSize='1.25em' bg='yellow.500' />
        }
        if(props.presence === "busy"){
            return <AvatarBadge boxSize='1.25em' bg='red.500' />
        }
        return <></>
    }

    return (
        <HStack spacing={2}>
            <Avatar src={props.avatarUrl} size={props.size} name={props.name}>
                <Badge/>
            </Avatar>
            <Box>
                <HStack>
                    <Text noOfLines={1} fontSize={sizeToFontSize[props.size]} fontWeight={600} lineHeight={'1em'}>{props.name}</Text>
                    {props.nameRightElement && props.nameRightElement}
                </HStack>
                {props.secondaryText && (
                    <HStack spacing={1}>
                        <Text noOfLines={1} color={'muted'} fontSize={sizeToFontSize[props.size] - 2}>{props.secondaryText}</Text>
                        {props.secondaryTextRightElement && props.secondaryTextRightElement}
                    </HStack>
                )}
            </Box>
        </HStack>
    );
}

export default Persona;
