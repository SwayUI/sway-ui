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

export interface PersonaProps extends HeadingProps {
    name: string;
    avatarUrl?: string;
    presence?: "online" | "offline" | "away" | "busy";
    secondaryText?: string;
    size: "lg" | "md" | "sm" | "xs" | "2xl" | "xl";
}

const Persona = (props: PersonaProps) => {

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
        <HStack spacing={4}>
            <Avatar src={props.avatarUrl} size={props.size} name={props.name}>
                <Badge/>
            </Avatar>
            <Box>
                <Text noOfLines={1} fontSize={props.size} fontWeight={600} lineHeight={'1em'}>{props.name}</Text>
                {props.secondaryText && (
                    <Text noOfLines={1} color={'muted'} fontSize={props.size}>{props.secondaryText}</Text>
                )}
            </Box>
        </HStack>
    );
}

export default Persona;
