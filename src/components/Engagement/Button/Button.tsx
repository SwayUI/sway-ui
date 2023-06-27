import React from "react";
import {Button as ChakraButton, ButtonProps, useColorModeValue, useToken} from "@chakra-ui/react";

export interface IButtonProps extends Omit<ButtonProps, "leftIcon"> {
    cooldown?: number;
    leftIcon?: (props: React.ComponentProps<'svg'> & { title?: string, titleId?: string }) => JSX.Element;
}

const Button = (props: IButtonProps) => {

    const [isCooldown, setIsCooldown] = React.useState(false);

    const [gray600, gray50] = useToken(
        'colors',
        ['gray.500', 'gray.200'],
    )

    const iconColor = useColorModeValue(gray600, gray50);

    const sizeToPx = () => {
        switch(props.size){
            case "xs":
                return 13;
            case "sm":
                return 17;
            case "md":
                return 19;
            case "lg":
                return 21;
            case "xl":
                return 27;
            default:
                return 15;
        }
    }

    const pxSize = sizeToPx();

    if(props.cooldown){
        if(props.leftIcon){
            return (
                <ChakraButton isDisabled={isCooldown || props.isDisabled} {...props} onClick={(e) => {
                    setIsCooldown(true);
                    if(typeof props.onClick === "function") props.onClick(e);
                    setTimeout(() => {
                        setIsCooldown(false);
                    }, (props.cooldown || 5) * 1000);
                }} leftIcon={React.createElement(props.leftIcon, {color: iconColor, width: pxSize, height: pxSize, strokeWidth: 2})}>{props.children}</ChakraButton>
            );
        }

        return (
            <ChakraButton isDisabled={isCooldown || props.isDisabled} {...props} onClick={(e) => {
                setIsCooldown(true);
                if(typeof props.onClick === "function") props.onClick(e);
                setTimeout(() => {
                    setIsCooldown(false);
                }, (props.cooldown || 5) * 1000);
            }}>{props.children}</ChakraButton>
        );
    }

    if(props.leftIcon){
        return (
            <ChakraButton {...props} leftIcon={React.createElement(props.leftIcon, {color: iconColor, width: pxSize, height: pxSize, strokeWidth: 2})}>{props.children}</ChakraButton>
        );
    }

    return (
        <ChakraButton {...props}>{props.children}</ChakraButton>
    );
}

export default Button;
