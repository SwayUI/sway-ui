import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Beacon from "./Beacon";

export default {
    title: "SwayUI/Engagement/Beacon",
    component: Beacon,
} as ComponentMeta<typeof Beacon>;

const Template: ComponentStory<typeof Beacon> = (args) => {
    return <Beacon {...args}></Beacon>;
};

export const Example = Template.bind({});
Example.args = {
    size: "sm",
    colorScheme: "purple.300"
};

export const Example2 = Template.bind({});
Example2.args = {
    size: "xl",
    colorScheme: "green.300",
};
