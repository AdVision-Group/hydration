import type { Meta, StoryObj } from "@storybook/react";
import Socials from "../socials";

const meta = {
  title: "Footer/Socials",
  component: Socials,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],
} satisfies Meta<typeof Socials>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
