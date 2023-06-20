import React from "react";
import {Flex, Heading, ResponsiveValue, Text} from "@chakra-ui/react";

export interface PageProps {
    contentWidth?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "full" | "100%";
    title?: string;
    description?: string;
    errorComponent?: React.ReactNode;
    fullWidth?: boolean;
    hasError?: boolean;
    isLoading?: boolean;
    nav?: React.ReactNode;
    toolbar?: React.ReactNode;
}

const Page = (props: PageProps) => {
    return (
        <Flex height={'100vh'} w={'100%'} direction={'column'} justify={'center'} align={'center'}>
        </Flex>
    );
}

export default Page;
