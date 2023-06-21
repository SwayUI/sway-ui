import React from "react";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import Navbar from "./Navbar";
import NavbarLogo from "./Elements/NavbarLogo";
import NavbarSection from "./Elements/NavbarSection";
import {ButtonGroup} from "@chakra-ui/react";
import {CogIcon, ExclamationCircleIcon, LifebuoyIcon} from "@heroicons/react/24/outline";
import Persona from "../Data/Display/Persona";
import IconButton from "../Engagement/IconButton";

export default {
    title: "SwayUI/Navbar",
    component: Navbar,
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => {
    return (
        <Navbar {...args}>
            <NavbarSection flex={[0, 1]}>
                <NavbarLogo logo={<img src={'https://i.imgur.com/E9QzoQj.png'} alt={'SwayUI Logo'} style={{height: 22}}/>}/>
            </NavbarSection>
            <NavbarSection flex={[0, 1]} justifyContent={"flex-end"}>
                <ButtonGroup variant={'ghost'} mr={5}>
                    <IconButton aria-label={"Assistance"} size={'sm'} icon={LifebuoyIcon}/>
                    <IconButton aria-label={"Settings"} size={'sm'} icon={CogIcon}/>
                    <IconButton aria-label={"Settings"} size={'sm'} icon={ExclamationCircleIcon}/>
                </ButtonGroup>
                <Persona name={"John Doe"} size={"sm"} secondaryText={"Developper"}/>
            </NavbarSection>
        </Navbar>
    )
};

export const Default = Template.bind({});
Default.args = {
};
Default.parameters = {
    layout: "fullscreen",
}
