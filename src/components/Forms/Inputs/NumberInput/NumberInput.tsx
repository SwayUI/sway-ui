import React from "react";
import TextInput from "../TextInput";
import {TextInputProps} from "../TextInput/TextInput";

export interface NumberInputProps extends TextInputProps {
    min?: number;
    max?: number;
    step?: number;
}

const NumberInput = (props: NumberInputProps) => {

    return (
        <TextInput {...props} type={"number"}/>
    )
}

export default NumberInput;
