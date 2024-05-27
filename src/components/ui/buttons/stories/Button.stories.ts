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

export const Tertiary: Story = {
  args: {
    role: "tertiary",
    children: "Hello",
  },
};

export const Footer: Story = {
  args: {
    role: "footer",
    children: "Join us",
    decoration: "star",
  },
};
