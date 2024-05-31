import type { Meta, StoryObj } from "@storybook/react";
import LiquidityIncentivesCans from "../cans";

const meta = {
  title: "LiquidityIncentives/Cans",
  component: LiquidityIncentivesCans,
  decorators: (Story) => (
    <div className=" bg-beige pb-40">
      <Story />
    </div>
  ),
  parameters: {
    layout: "fullscreen",
  },

  tags: ["autodocs"],
} satisfies Meta<typeof LiquidityIncentivesCans>;

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
