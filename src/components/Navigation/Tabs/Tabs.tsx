import React, {ReactNode} from "react";
import {
    Tabs as ChakraTabs,
    ButtonProps,
    Tab,
    TabList, TabPanel,
    TabPanels, TabsProps,
    useColorModeValue,
    useToken, HStack, Spacer, ScaleFade, Fade, Collapse
} from "@chakra-ui/react";

export interface TabContent{
    title: string;
    content: ReactNode;
    icon?: (props: React.ComponentProps<'svg'> & { title?: string, titleId?: string }) => JSX.Element;
}

export interface ITabsProps extends TabsProps {
    tabs: TabContent[];
}

const Tabs = (props: ITabsProps) => {

    const [activeTab, setActiveTab] = React.useState(0);

    return (
        <ChakraTabs {...props} onChange={(i) => setActiveTab(i)}>
            <TabList>
                {props.tabs.map((tab, index) => (
                    <>
                        <Tab>
                            {tab.icon && (
                                <Collapse in={activeTab === index} style={{marginRight: 5}}>
                                    {React.createElement(tab.icon, {width: 20, height: 20, strokeWidth: 2})}
                                </Collapse>
                            )}

                            {tab.title}
                        </Tab>
                    </>
                ))}
            </TabList>

            <TabPanels>
                {props.tabs.map((tab, index) => (
                    <TabPanel>
                        <ScaleFade in={activeTab === index}>
                            {tab.content}
                        </ScaleFade>
                    </TabPanel>
                ))}
            </TabPanels>
        </ChakraTabs>
    );
}

export default Tabs;
