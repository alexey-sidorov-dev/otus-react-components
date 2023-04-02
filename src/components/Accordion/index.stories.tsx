import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Accordion } from ".";
import { text } from "../../constants";

export default {
  title: "Example/Accordion",
  component: Accordion,
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = (args) => (
  <Accordion {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  visible: true,
  text,
};
