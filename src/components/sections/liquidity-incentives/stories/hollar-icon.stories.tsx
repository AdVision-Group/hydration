import type { Meta, StoryObj } from "@storybook/react";
import HollarArchIcon from "../arch-icon/hollar-icon";

const meta = {
  title: "LiquidityIncentives/ArchIcons/Hollar",
  component: HollarArchIcon,
  decorators: (Story) => (
    <div className="w-[260px] h-[260px]">
      <Story />
    </div>
  ),
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],
} satisfies Meta<typeof HollarArchIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
