import React from "react";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import ErrorPage from "./ErrorPage";
import {Button, ButtonGroup} from "@chakra-ui/react";

export default {
    title: "SwayUI/Structures/ErrorPage",
    component: ErrorPage,
} as ComponentMeta<typeof ErrorPage>;

const Template: ComponentStory<typeof ErrorPage> = (args) => {
    return <ErrorPage {...args}>

    </ErrorPage>;
};

export const Default = Template.bind({});
Default.args = {
    actions: (
        <ButtonGroup mt={6}>
            <Button variant={'tertiary'}>Go back</Button>
            <Button variant={'ghost'}>Refresh page</Button>
        </ButtonGroup>
    )
};
Default.parameters = {
    layout: "fullscreen",
}
