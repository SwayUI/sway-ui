import React from "react";
import {
    Box,
    FormControl,
    FormHelperText,
    FormLabel,
    Input,
    InputProps,
    SimpleGrid,
    Text,
    useColorModeValue
} from "@chakra-ui/react";
import {FormikErrors, FormikTouched, FormikValues} from "formik";
import TextInput from "../TextInput";
import {TextInputProps} from "../TextInput/TextInput";

export interface EmailInputProps extends TextInputProps {
}

const EmailInput = (props: EmailInputProps) => {
   return (
       <TextInput {...props} type="email" />
   )
}

export default EmailInput;
