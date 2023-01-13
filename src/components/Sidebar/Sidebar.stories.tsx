import React from "react";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import Sidebar from "./Sidebar";
import SidebarHeader from "./Elements/SidebarHeader";
import {Box, Flex, Switch} from "@chakra-ui/react";
import {SidebarCategory, SidebarItem, SidebarSearchBar} from "../index";
import {
    ChartBarIcon,
    DocumentIcon,
    InboxIcon,
    UserIcon,
    UsersIcon
} from "@heroicons/react/24/outline";
import {InboxStackIcon, BuildingOfficeIcon} from "@heroicons/react/24/solid";

export default {
    title: "SwayUI/Sidebar/Sidebar",
    component: Sidebar,
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => {
    return <Sidebar {...args}>
        <SidebarHeader logo={<img src={'https://i.imgur.com/E9QzoQj.png'} alt={'SwayUI Logo'} style={{height: 22}}/>} action={<Switch colorScheme={'purple'} size={'sm'} isChecked/>}/>
        <SidebarSearchBar/>
        <SidebarItem name={"Dashboard"} icon={<ChartBarIcon width={18}/>}/>
        <SidebarItem name={"Activity Inbox"} icon={<InboxIcon width={18}/>}/>
        <SidebarItem name={"Notes"} icon={<DocumentIcon width={18}/>}/>
        <SidebarCategory name={'Records'}>
            <SidebarItem name={"Users"} icon={<UsersIcon width={18}/>}/>
            <SidebarItem name={"Companies"} icon={<BuildingOfficeIcon width={18}/>}/>
        </SidebarCategory>
        <SidebarCategory name={'Pinned Views'}>
            <SidebarItem name={"Users"} icon={(
                <Flex align={'center'} justifyContent={'center'} position={'relative'} bg={'#beb7fd'} w={6} h={6} borderRadius={'lg'}>
                    <InboxStackIcon width={15} color={"#251c66"}/>
                </Flex>
            )}/>
            <SidebarItem name={"Companies"} icon={(
                <Flex align={'center'} justifyContent={'center'} position={'relative'} bg={'#b7fdda'} w={6} h={6} borderRadius={'lg'}>
                    <BuildingOfficeIcon width={15} color={"#1c664c"}/>
                </Flex>
            )}/>
        </SidebarCategory>
    </Sidebar>;
};

export const Default = Template.bind({});
Default.args = {
};
Default.parameters = {
    layout: "fullscreen",
}
