import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Modal from "./Modal";
import {Button} from "@chakra-ui/react";

export default {
    title: "SwayUI/Modal/Modal",
    component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => {
    return <Modal {...args}>
        {(onClick) => <Button onClick={onClick}>Open Modal</Button>}
    </Modal>;
};

export const Example = Template.bind({});
Example.args = {
    title: 'Create new user',
    body: (onClose) => (
        <p>Are you sure you want to create this user?</p>
    ),
    footer: (onClose) => (
        <Button variant={'primary'} colorScheme={'green'} onClick={onClose}>Create user</Button>
    )
};
