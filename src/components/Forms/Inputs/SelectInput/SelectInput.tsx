import React from "react";
import {
    Box,
    FormControl,
    FormHelperText,
    FormLabel,
    Input, InputGroup,
    InputProps, InputRightElement, Select,
    SimpleGrid,
    Text,
    useColorModeValue
} from "@chakra-ui/react";
import {FormikErrors, FormikTouched, FormikValues} from "formik";

export interface SelectInputProps extends InputProps {
    label: string;
    name: string;
    placeholder?: string;
    helperText?: string;
    handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    handleBlur: (e: React.FocusEvent<HTMLSelectElement>) => void;
    values: FormikValues;
    errors: FormikErrors<{[field: string]: string}>;
    touched: FormikTouched<{[field: string]: boolean}>;
    isHorizontal?: boolean;
    isRequired?: boolean;
    options: ISelectInputOption[];
}

export interface ISelectInputOption {
    label: string;
    value: string;
}

const SelectInput = (props: SelectInputProps) => {

    const isInvalid = props.errors[props.name] && props.touched[props.name];

    if(props.isHorizontal) return (
        <SimpleGrid columns={[1, 2]} spacing={4}>
            <Box>
                <Text fontSize={13} fontWeight={600}>
                    {props.label}
                </Text>
                {props.helperText && (
                    <Text fontSize={12} fontWeight={400} color={'muted'}>
                        {props.helperText}
                    </Text>
                )}
            </Box>
            <Box>
                <Select
                    autoComplete="off"
                    {...props}
                    name={props.name}
                    placeholder={props.placeholder || ""}
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values[props.name]}
                    // @ts-ignore
                    isInvalid={isInvalid}
                >
                    {props.options.map((option, index) => (
                        <option key={index} value={option.value}>{option.label}</option>
                    ))}
                </Select>
                {props.errors[props.name] && props.touched[props.name] && (
                    <Text fontSize={12} color={useColorModeValue('red.600', 'red.300')} mt={1}>
                        {props.errors[props.name]}
                    </Text>
                )}
            </Box>
        </SimpleGrid>
    );

    return (
        <FormControl>
            <FormLabel fontSize={12} fontWeight={600}>
                {props.label}
            </FormLabel>
            <Select
                autoComplete="off"
                {...props}
                name={props.name}
                placeholder={props.placeholder || ""}
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values[props.name]}
                // @ts-ignore
                isInvalid={isInvalid}
            >
                {props.options.map((option, index) => (
                    <option key={index} value={option.value}>{option.label}</option>
                ))}
            </Select>
            {props.errors[props.name] && props.touched[props.name] && (
                <FormHelperText fontSize={13} color={'red.600'}>
                    {props.errors[props.name]}
                </FormHelperText>
            )}
            {props.helperText && (!props.errors[props.name] || !props.touched[props.name]) && (
                <FormHelperText fontSize={13} color={'muted'}>
                    {props.helperText}
                </FormHelperText>
            )}
        </FormControl>
    );
}

export default SelectInput;
