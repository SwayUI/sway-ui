import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Title from "./Title";

export default {
    title: "SwayUI/Typography/Title",
    component: Title,
} as ComponentMeta<typeof Title>;

const Template: ComponentStory<typeof Title> = (args) => {
    return <Title {...args}>The best React UI Library</Title>;
};

export const H1 = Template.bind({});
H1.args = {
    as: "h1",
    size: "2xl",
};

export const H2 = Template.bind({});
H2.args = {
    as: "h2",
    size: "xl",
};

export const H3 = Template.bind({});
H3.args = {
    as: "h3",
    size: "lg",
};

export const H4 = Template.bind({});
H4.args = {
    as: "h4",
    size: "md",
};

export const H5 = Template.bind({});
H5.args = {
    as: "h5",
    size: "sm",
};

export const H6 = Template.bind({});
H6.args = {
    as: "h6",
    size: "xs",
};
