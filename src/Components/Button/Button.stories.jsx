import Button from "./Button";

export default {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary", "text"],
    },
    disabled: { control: "boolean" },
    inverted: { control: "boolean" },
    children: { control: "text" },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
  children: "Primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary",
  children: "Secondary",
};

export const Text = Template.bind({});
Text.args = {
  variant: "text",
  children: "Text",
};
