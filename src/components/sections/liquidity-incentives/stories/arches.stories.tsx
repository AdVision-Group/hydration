import type { Meta, StoryObj } from "@storybook/react";
import Arches from "../arches";

const meta = {
  title: "LiquidityIncentives/Arches",
  component: Arches,
  parameters: {
    layout: "fullscreen",
  },

  tags: ["autodocs"],
} satisfies Meta<typeof Arches>;

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
