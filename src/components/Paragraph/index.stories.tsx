import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Paragraph } from ".";
import { x2text as text } from "../../helpers/constants";

export default {
  title: "Example/Paragraph",
  component: Paragraph,
} as ComponentMeta<typeof Paragraph>;

const Template: ComponentStory<typeof Paragraph> = (args) => (
  <Paragraph {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  style: "normal",
  text,
};
