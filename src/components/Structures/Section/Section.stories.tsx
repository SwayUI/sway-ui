import React from "react";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import Section from "./Section";
import {Button, ButtonGroup} from "@chakra-ui/react";

export default {
    title: "SwayUI/Structures/Section",
    component: Section,
} as ComponentMeta<typeof Section>;

const Template: ComponentStory<typeof Section> = (args) => {
    return <Section {...args}>

    </Section>;
};

export const Default = Template.bind({});
Default.args = {
    title: 'Discover new articles',
    description: 'Discover our brand new articles and learn more about the latest trends in the world of technology.'
};

export const DefaultWithActions = Template.bind({});
DefaultWithActions.args = {
    title: 'Discover new articles',
    description: 'Discover our brand new articles and learn more about the latest trends in the world of technology.',
    actions: (
        <ButtonGroup>
            <Button variant={'tertiary'}>Go back</Button>
            <Button variant={'ghost'}>Refresh page</Button>
        </ButtonGroup>
    )
};

