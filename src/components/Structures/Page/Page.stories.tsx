import React from "react";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import Page from "./Page";

export default {
    title: "SwayUI/Structures/Page",
    component: Page,
} as ComponentMeta<typeof Page>;

const Template: ComponentStory<typeof Page> = (args) => {
    return <Page {...args}>

    </Page>;
};

export const Default = Template.bind({});
Default.args = {

};
Default.parameters = {
    layout: "fullscreen",
}
