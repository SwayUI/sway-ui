import React from "react";
import {Box, Spacer, SpacerProps} from "@chakra-ui/react";

export interface SidebarSpacerProps {
  size: "xs" | "sm" | "md" | "lg" | "xl";
}

const SidebarSpacer = (props: SidebarSpacerProps) => {

    const sizeToPx = () => {
        switch (props.size) {
            case "xs":
                return 1;
            case "sm":
                return 2;
            case "md":
                return 3;
            case "lg":
                return 4;
            case "xl":
                return 5;
            default:
                return 0;
        }
    }


    return (
        <Box py={sizeToPx()} {...props}/>
    );
}

export default SidebarSpacer;
