import type { Meta, StoryObj } from "@storybook/react";
import ScrollLockDemo from "../demo";

const meta = {
  title: "EmpoweringDaos/ScrollLockDemo",
  component: ScrollLockDemo,
  parameters: {
    layout: "fullscreen",
  },

  tags: ["autodocs"],
} satisfies Meta<typeof ScrollLockDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  parameters: {},
};
