import React from "react";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import AppSidebarStructure from "./AppSidebarStructure";
import SidebarHeader from "../../Sidebar/Elements/SidebarHeader";
import {Flex, Switch} from "@chakra-ui/react";
import {SidebarCategory, SidebarItem, SidebarSearchBar, Title} from "../../index";
import {ChartBarIcon, DocumentIcon, InboxIcon, UsersIcon} from "@heroicons/react/24/outline";
import {BuildingOfficeIcon, InboxStackIcon} from "@heroicons/react/24/solid";
import Sidebar from "../../Sidebar";

export default {
    title: "SwayUI/Structures/AppSidebarStructure",
    component: AppSidebarStructure,
} as ComponentMeta<typeof AppSidebarStructure>;

const Template: ComponentStory<typeof AppSidebarStructure> = (args) => {
    return <AppSidebarStructure {...args}>
        <Title as={'h1'} size={'xl'}>The best React UI Library for SaaS</Title>
    </AppSidebarStructure>;
};

export const Default = Template.bind({});
Default.args = {
    sidebar: (
        <Sidebar>
            <SidebarHeader
                logo={<img src={'https://i.imgur.com/E9QzoQj.png'} alt={'SwayUI Logo'} style={{height: 22}}/>}
                action={<Switch colorScheme={'purple'} size={'sm'} isChecked/>}/>
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
                    <Flex align={'center'} justifyContent={'center'} position={'relative'} bg={'#beb7fd'} w={6} h={6}
                          borderRadius={'lg'}>
                        <InboxStackIcon width={15} color={"#251c66"}/>
                    </Flex>
                )}/>
                <SidebarItem name={"Companies"} icon={(
                    <Flex align={'center'} justifyContent={'center'} position={'relative'} bg={'#b7fdda'} w={6} h={6}
                          borderRadius={'lg'}>
                        <BuildingOfficeIcon width={15} color={"#1c664c"}/>
                    </Flex>
                )}/>
            </SidebarCategory>
        </Sidebar>
    )
};
Default.parameters = {
    layout: "fullscreen",
}
