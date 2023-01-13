import React from "react";
import {Heading, HeadingProps, TextProps, useColorModeValue} from "@chakra-ui/react";

export interface TitleProps extends HeadingProps {
    children: React.ReactNode;
}

const Title = (props: TitleProps) => {
    return (
        <Heading color={useColorModeValue('black', 'white')} fontWeight={600} letterSpacing={'-0.05em'} {...props}>
            {props.children}
        </Heading>
    );
}

export default Title;
