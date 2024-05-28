import type { Meta, StoryObj } from "@storybook/react";
import Caption from "../caption";

const meta = {
  title: "UI/Typography/Caption",
  component: Caption,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],
} satisfies Meta<typeof Caption>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: "My name is Kevin" },
  parameters: {},
};
