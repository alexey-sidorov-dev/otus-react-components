import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Breaker } from ".";
import { x2text as text } from "../../helpers/constants";

export default {
  title: "Example/Breaker",
  component: Breaker,
} as ComponentMeta<typeof Breaker>;

const Template: ComponentStory<typeof Breaker> = (args) => (
  <Breaker {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  number: 1,
  text,
};
