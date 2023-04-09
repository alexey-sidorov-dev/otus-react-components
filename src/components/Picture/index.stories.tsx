import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Picture } from ".";
import { x2text as text } from "../../helpers/constants";

export default {
  title: "Example/Picture",
  component: Picture,
} as ComponentMeta<typeof Picture>;

const Template: ComponentStory<typeof Picture> = (args) => (
  <Picture {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  float: "left",
  text,
};
