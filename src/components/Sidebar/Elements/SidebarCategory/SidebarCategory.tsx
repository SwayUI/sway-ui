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

    const iconColor = useColorModeValue('gray.900', 'gray.300');

    return (
        <>
            <Flex
                as={'a'}
                direction={'row'}
                justifyContent={'space-between'}
                alignItems={'center'}
                gap={'1px'}
                w={'100%'}
                px={5}
                cursor={'pointer'}
                onClick={handleToggle}
                {...props}>
                <Text fontWeight={600} fontSize={14} color={iconColor}>{props.name}</Text>
                <IconButton aria-label={"Toggle"} size={'sm'} variant={'ghost'} icon={isOpen ? (<ChevronDownIcon color={iconColor} width={15}/>) : (<ChevronUpIcon color={iconColor} width={15}/>)}/>
            </Flex>
            {/** @ts-ignore */}
            <Collapse in={isOpen} style={{marginTop: 3}}>
                {props.children && props.children}
            </Collapse>
        </>
    );
}

export default SidebarCategory;
