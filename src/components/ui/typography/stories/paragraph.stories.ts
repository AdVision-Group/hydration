import type { Meta, StoryObj } from "@storybook/react";
import Paragraph from "../paragraph";

const meta = {
  title: "UI/Typography/Paragraph",
  component: Paragraph,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],
} satisfies Meta<typeof Paragraph>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Large: Story = {
  args: { children: "My name is Kevin", size: "large" },
  parameters: {},
};

export const Small: Story = {
  args: { children: "My name is Kevin", size: "small" },
  parameters: {},
};
