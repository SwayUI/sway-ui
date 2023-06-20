import React from "react";
import {Flex, Heading, Text} from "@chakra-ui/react";
import {ExclamationCircleIcon} from "@heroicons/react/24/outline";

export interface ErrorPageProps {
    title?: string;
    description?: string;
    actions?: React.ReactNode;
    icon?: React.ReactNode;
}

const ErrorPage = (props: ErrorPageProps) => {
    return (
        <Flex height={'100vh'} w={'100%'} direction={'column'} justify={'center'} align={'center'}>
            {props.icon && props.icon}
            {!props.icon && <ExclamationCircleIcon width={50}/>}
            <Heading as={'h1'} maxW={'450px'} textAlign={'center'}  size={'md'} fontWeight={600} mt={5}>
                {props.title || 'Something went wrong'}
            </Heading>
            <Text size={'md'} maxW={'450px'} textAlign={'center'} color={'muted'} mb={2}>
                {props.description || 'We have been notified about the problem and will fix it as soon as possible.'}
            </Text>
            {props.actions && props.actions}
        </Flex>
    );
}

export default ErrorPage;
