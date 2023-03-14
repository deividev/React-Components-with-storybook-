var s=Object.defineProperty;var n=(o,r)=>s(o,"name",{value:r,configurable:!0});import{j as e}from"./jsx-runtime-c041bf72.js";import"./index-3b3521f0.js";import"./iframe-52fefde0.js";const a={},t=n(({url:o="",children:r})=>e("a",{className:a.link,href:o,children:r}),"Link");try{t.displayName="Link",t.__docgenInfo={description:"",displayName:"Link",props:{url:{defaultValue:{value:""},description:"Url redirect",name:"url",required:!1,type:{name:"string"}}}}}catch{}const y={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Link } from './Link';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  component: Link,
} as ComponentMeta<typeof Link>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Link> = (args) => <Link {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  url: 'http://localhost:3000/',
  children: 'Paco',
};


`,locationsMap:{primary:{startLoc:{col:46,line:11},endLoc:{col:74,line:11},startBody:{col:46,line:11},endBody:{col:74,line:11}}}}},component:t},i=n(o=>e(t,{...o}),"Template"),c=i.bind({});c.args={url:"http://localhost:3000/",children:"Paco"};const u=["Primary"];export{c as Primary,u as __namedExportsOrder,y as default};
//# sourceMappingURL=Link.stories-da6550ae.js.map
