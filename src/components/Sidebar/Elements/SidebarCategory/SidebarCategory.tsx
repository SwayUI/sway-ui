import React from "react";
import {Collapse, Flex, FlexProps, IconButton, Text, useColorModeValue} from "@chakra-ui/react";
import {ChevronDownIcon, ChevronUpIcon} from "@heroicons/react/24/solid";

export interface SidebarCategoryProps extends FlexProps {
    name: string;
    children?: React.ReactNode;
}

const SidebarCategory = (props: SidebarCategoryProps) => {

    const [isOpen, setIsOpen] = React.useState(true);

    const handleToggle = () => setIsOpen(!isOpen);

    const iconColor = useColorModeValue('gray.500', 'gray.400');

    return (
        <>
            <Flex
                as={'a'}
                direction={'row'}
                justifyContent={'flex-start'}
                alignItems={'center'}
                gap={'1px'}
                w={'100%'}
                px={3}
                cursor={'pointer'}
                onClick={handleToggle}
                {...props}>
                <IconButton aria-label={"Toggle"} size={'sm'} variant={'ghost'} icon={isOpen ? (<ChevronDownIcon color={iconColor} width={15}/>) : (<ChevronUpIcon color={iconColor} width={15}/>)}/>
                <Text fontWeight={500} fontSize={13} color={iconColor}>{props.name}</Text>
            </Flex>
            {/** @ts-ignore */}
            <Collapse mt={4} in={isOpen}>
                {props.children && props.children}
            </Collapse>
        </>
    );
}

export default SidebarCategory;
