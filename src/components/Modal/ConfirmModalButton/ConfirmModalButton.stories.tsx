import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ConfirmModalButton from "./ConfirmModalButton";
import {Button} from "@chakra-ui/react";

export default {
    title: "SwayUI/Modal/ConfirmModalButton",
    component: ConfirmModalButton,
} as ComponentMeta<typeof ConfirmModalButton>;

const Template: ComponentStory<typeof ConfirmModalButton> = (args) => {
    return <ConfirmModalButton {...args}>
        {(onClick) => <Button colorScheme={'red'} onClick={onClick}>Delete user</Button>}
    </ConfirmModalButton>;
};

export const Example = Template.bind({});
Example.args = {

};
