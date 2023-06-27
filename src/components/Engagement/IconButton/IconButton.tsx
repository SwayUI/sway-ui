import React from "react";
import {IconButton as ChakraIconButton, IconButtonProps, useColorModeValue, useToken} from "@chakra-ui/react";

export interface IIconButtonProps extends Omit<IconButtonProps, "icon"> {
    icon: (props: React.ComponentProps<'svg'> & { title?: string, titleId?: string }) => JSX.Element;
}

const IconButton = (props: IIconButtonProps) => {

    const [gray600, gray50] = useToken(
        'colors',
        ['gray.500', 'gray.200'],
    )

    const iconColor = useColorModeValue(gray600, gray50);

    const sizeToPx = () => {
        switch(props.size){
            case "xs":
                return 15;
            case "sm":
                return 20;
            case "md":
                return 23;
            case "lg":
                return 25;
            case "xl":
                return 27;
            default:
                return 15;
        }
    }

    const pxSize = sizeToPx();

    return (
        <ChakraIconButton {...props} icon={(
            <>
                {React.createElement(props.icon, {color: iconColor, width: pxSize, height: pxSize, strokeWidth: 2})}
            </>
        )}/>
    );
}

export default IconButton;
