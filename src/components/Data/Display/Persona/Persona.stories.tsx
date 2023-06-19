import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Persona from "./Persona";

export default {
    title: "SwayUI/Data/Display/Persona",
    component: Persona,
} as ComponentMeta<typeof Persona>;

const Template: ComponentStory<typeof Persona> = (args) => {
    return <Persona {...args}></Persona>;
};

export const Large = Template.bind({});
Large.args = {
    size: "lg",
    name: "John Doe",
    secondaryText: "Software Engineer",
    avatarUrl: "https://bit.ly/dan-abramov",
    presence: "busy",
};

export const Medium = Template.bind({});
Medium.args = {
    size: "md",
    name: "John Doe",
    secondaryText: "Software Engineer",
    avatarUrl: "https://bit.ly/dan-abramov",
    presence: "away",
};

export const Small = Template.bind({});
Small.args = {
    size: "sm",
    name: "John Doe",
    secondaryText: "Software Engineer",
    avatarUrl: "https://bit.ly/dan-abramov",
    presence: "online",
};

export const XSmall = Template.bind({});
XSmall.args = {
    size: "xs",
    name: "John Doe",
    secondaryText: "Software Engineer",
    avatarUrl: "https://bit.ly/dan-abramov",
    presence: "offline",
};
