import React from "react";
import {
    Flex,
    FlexProps,
    Input,
    InputGroup,
    InputLeftElement,
    InputRightElement,
    Kbd,
    Stack,
    useColorModeValue
} from "@chakra-ui/react";
import {MagnifyingGlassIcon} from "@heroicons/react/24/outline";

export interface SidebarSearchBarProps extends FlexProps {
}

const SidebarSearchBar = (props: SidebarSearchBarProps) => {

    const borderColor = useColorModeValue('1px solid #f2f2f2', '1px solid #262626');

    return (
        <Flex
            w={'100%'}
            px={3}
            py={3}
            mt={0}
            style={{marginTop: 0}}
            {...props}>
            <InputGroup size={'sm'}>
                <InputLeftElement pointerEvents="none" children={<MagnifyingGlassIcon width={15} color={useColorModeValue("#000", "gray.200")} />} />
                <Input
                    type="text"
                    placeholder={"Search..."}
                    fontSize="12px"
                    bg={useColorModeValue('white', 'gray.700')}
                />
                <InputRightElement pointerEvents="none" right={"12px"} children={(
                    <Stack direction={"row"} spacing={1} align={"center"}>
                        <Kbd>⌥</Kbd> <Kbd>F</Kbd>
                    </Stack>
                )} />
            </InputGroup>
        </Flex>
    );
}

export default SidebarSearchBar;
