import React from "react";
import {Box, Flex, Heading, Text} from "@chakra-ui/react";

export interface SectionProps {
    title?: string;
    description?: string;
    actions?: React.ReactNode;
    isLoading?: boolean;
    size?: 'sm' | 'md' | 'lg';
}

const Section = (props: SectionProps) => {

    const sizeToPx = () => {
        if(!props.size) return 22;
        switch (props.size) {
            case 'sm':
                return 19;
            case 'md':
                return 22;
            case 'lg':
                return 28;
        }
    }

    return (
        <Flex w={'100%'} direction={['column', 'row']} justify={['flex-start', 'space-between']} align={['flex-start', 'center']}>
            <Box maxW={props.actions ? '60%' : '100%'}>
                <Heading as={'h2'} fontSize={sizeToPx()} noOfLines={1} fontWeight={600}>
                    {props.title || 'Something went wrong'}
                </Heading>
                <Text fontSize={sizeToPx() * 0.6} color={'muted'} noOfLines={1}>
                    {props.description || 'We have been notified about the problem and will fix it as soon as possible.'}
                </Text>
            </Box>

            {props.actions && props.actions}
        </Flex>
    );
}

export default Section;
