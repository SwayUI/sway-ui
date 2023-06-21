import React from "react";
import {
    Box, Button,
    FormControl,
    FormHelperText,
    FormLabel, IconButton,
    Input,
    InputProps,
    SimpleGrid,
    Text,
    useColorModeValue
} from "@chakra-ui/react";
import {FormikErrors, FormikTouched, FormikValues} from "formik";
import TextInput from "../TextInput";
import {EyeIcon, EyeSlashIcon} from "@heroicons/react/24/solid";
import {TextInputProps} from "../TextInput/TextInput";

export interface PasswordInputProps extends TextInputProps {

}

const PasswordInput = (props: PasswordInputProps) => {

    const [isHidden, setIsHidden] = React.useState(true);

    const type = isHidden ? 'password' : 'text';

   return (
       <TextInput {...props} type={type} rightElementWidth={'2.3rem'} rightElement={(
       <IconButton h='1.75rem' variant={'tertiary'} size='sm' icon={!isHidden ? <EyeSlashIcon width={15}/> : <EyeIcon width={15}/>} onClick={() => setIsHidden(!isHidden)} aria-label={"Show password"}/>
       )} />
   )
}

export default PasswordInput;
