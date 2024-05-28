import type { Meta, StoryObj } from "@storybook/react";
import Heading from "../heading";

const meta = {
  title: "UI/Typography/Heading",
  component: Heading,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Large: Story = {
  args: { children: "My name is Kevin", size: "large" },
  parameters: {},
};

export const Medium: Story = {
  args: { children: "My name is Kevin", size: "medium" },
  parameters: {},
};

export const Small: Story = {
  args: { children: "My name is Kevin", size: "small" },
  parameters: {},
};
