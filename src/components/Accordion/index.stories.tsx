import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Accordion } from ".";
import { x2text as text } from "../../helpers/constants";

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
