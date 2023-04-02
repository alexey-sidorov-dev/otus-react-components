import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Columns } from ".";
import { text } from "../../constants";

export default {
  title: "Example/Columns",
  component: Columns,
} as ComponentMeta<typeof Columns>;

const Template: ComponentStory<typeof Columns> = (args) => (
  <Columns {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  number: 2,
  text,
};
