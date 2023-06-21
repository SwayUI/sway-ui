import React, {useEffect} from "react";
import "./PhoneInput.module.scss";
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
import {default as PhoneLibInput} from 'react-phone-input-2';
import {TextInputProps} from "../TextInput/TextInput";

export interface PhoneInputProps extends TextInputProps {

}

const PhoneInput = (props: PhoneInputProps) => {

    const [value, setValue] = React.useState(props.values[props.name]);

    useEffect(() => {
        setValue(props.values[props.name]);
    }, [props.values[props.name]]);

    return (
        <>
            <TextInput {...props} type="hidden" values={{
                [props.name]: value
            }} customInput={(
                <PhoneLibInput
                    containerClass={props.errors[props.name] && props.touched[props.name] ? 'has-error' : ''}
                    country={'fr'}
                    value={value}
                    onChange={phone => setValue(phone)}
                    preferredCountries={['fr']}
                    enableTerritories={true}
                    enableSearch={true}
                    searchPlaceholder={props.placeholder || "Search a country code"}
                />
            )} />
        </>

    );
}

export default PhoneInput;
