import type { Meta, StoryObj } from "@storybook/react";
import Title from "../title";

const meta = {
  title: "UI/Typography/Title",
  component: Title,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],
} satisfies Meta<typeof Title>;

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
