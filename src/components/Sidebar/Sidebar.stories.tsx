import React from "react";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import Sidebar from "./Sidebar";
import SidebarHeader from "./Elements/SidebarHeader";
import {Box, ButtonGroup, Container, Flex, Switch} from "@chakra-ui/react";
import {SidebarCategory, SidebarItem, SidebarSearchBar} from "../index";
import {
    ChartBarIcon,
    DocumentIcon,
    InboxIcon,
    UserIcon,
    InboxStackIcon, BuildingOfficeIcon,
    UsersIcon, LifebuoyIcon, CogIcon, ExclamationCircleIcon
} from "@heroicons/react/24/outline";
import AppSidebarStructure from "../Structures/AppSidebarStructure";
import Section from "../Structures/Section";
import Navbar from "../Navbar/Navbar";
import NavbarLogo from "../Navbar/Elements/NavbarLogo";
import SidebarSpacer from "./Elements/SidebarSpacer/SidebarSpacer";
import NavbarSection from "../Navbar/Elements/NavbarSection";
import IconButton from "../Engagement/IconButton";
import Persona from "../Data/Display/Persona";
import ErrorPage from "../Structures/ErrorPage";

export default {
    title: "SwayUI/Sidebar",
    component: Sidebar,
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => {
    return <AppSidebarStructure variant={'static'}
                                navbar={(
                                    <Navbar>
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
                                )}
                                sidebar={(
        <Sidebar {...args}>
            <SidebarSpacer size={'sm'}/>
            <SidebarItem name={"Dashboard"} icon={ChartBarIcon}/>
            <SidebarItem name={"Activity Inbox"} icon={InboxIcon}/>
            <SidebarItem name={"Notes"} icon={DocumentIcon}/>
            <SidebarCategory name={'Records'}>
                <SidebarItem name={"Users"} icon={UsersIcon}/>
                <SidebarItem name={"Companies"} icon={BuildingOfficeIcon}/>
            </SidebarCategory>
            <SidebarCategory name={'Transport'}>
                <SidebarItem name={"Train sales & marketing, work for the future"} emoji={"train"} hasPaddingLeft/>
                <SidebarItem name={"Skateboard"} emoji={"skateboard"} hasPaddingLeft/>
                <SidebarItem name={"Ideas & Work"} emoji={"light-bulb"} hasPaddingLeft/>
                <SidebarItem name={"Waiting list"} emoji={"hourglass-done"} hasPaddingLeft/>
            </SidebarCategory>
        </Sidebar>
    )}>
        <ErrorPage/>
    </AppSidebarStructure>;
};

export const Default = Template.bind({});
Default.args = {
};
Default.parameters = {
    layout: "fullscreen",
}
