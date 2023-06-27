import React from "react";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import DataTable from "./DataTable";

export default {
    title: "SwayUI/Data/Table/DataTable",
    component: DataTable,
} as ComponentMeta<typeof DataTable>;

interface ExampleData {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
}

const Template: ComponentStory<typeof DataTable> = (args) => {
    return <DataTable {...args}></DataTable>;
};

const _fetchAPI = () => {
    return new Promise((resolve) => {
       return fetch("https://jsonplaceholder.typicode.com/photos").then((r) => r.json()).then((r) => {
              resolve({
                data: r,
                current_page: 1,
                last_page: 1,
                per_page: 50,
                total: 50,
              });
       });
    });
}

export const Example = Template.bind({});
Example.args = {

};
