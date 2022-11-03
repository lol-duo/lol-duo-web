import React from 'react';

import {DuoTableHeader, SoloTableHeader} from "./TableHeader";

const DuoTableHeaderTemplate = (args) => <DuoTableHeader {...args}/>
const SoloTableHeaderTemplate = (args) => <SoloTableHeader {...args}/>

export default {
    title: "TableHeader",
}

export const StoryDuoTableHeader = DuoTableHeaderTemplate.bind({});
DuoTableHeaderTemplate.args = {}

export const StorySoloTableHeader = SoloTableHeaderTemplate.bind({});
SoloTableHeaderTemplate.args = {}