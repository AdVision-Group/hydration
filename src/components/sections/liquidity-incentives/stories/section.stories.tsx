import type { Meta, StoryObj } from "@storybook/react";
import LiquidityIncentivesSection from "../section";

const meta = {
  title: "LiquidityIncentives",
  component: LiquidityIncentivesSection,
  parameters: {
    layout: "fullscreen",
  },

  tags: ["autodocs"],
} satisfies Meta<typeof LiquidityIncentivesSection>;

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
