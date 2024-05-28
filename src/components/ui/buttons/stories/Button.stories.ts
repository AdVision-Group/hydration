import type { Meta, StoryObj } from "@storybook/react";
import Button from "../button";

const meta = {
  title: "UI/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    role: "primary",
    children: "Hello",
  },
};

export const Secondary: Story = {
  args: {
    role: "secondary",
    children: "Hello",
  },
};

export const PrimaryOutline: Story = {
  args: {
    role: "primary",
    fill: "outline",
    children: "Hello",
  },
};

export const SecondaryOutline: Story = {
  args: {
    role: "secondary",
    fill: "outline",
    children: "Hello",
  },
};
