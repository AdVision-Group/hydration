import type { Meta, StoryObj } from "@storybook/react";
import Stats from "../stats";

const meta = {
  title: "Stats",
  component: Stats,
  parameters: {
    layout: "fulscreen",
  },

  tags: ["autodocs"],
} satisfies Meta<typeof Stats>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  parameters: {
    viewport: {
      defaultViewport: "desktop",
    },
  },
};
