import type { Meta, StoryObj } from "@storybook/react";
import LendingArchIcon from "../arch-icon/lending-icon";

const meta = {
  title: "LiquidityIncentives/ArchIcons/Lending",
  component: LendingArchIcon,
  decorators: (Story) => (
    <div className="w-[260px] h-[260px]">
      <Story />
    </div>
  ),
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],
} satisfies Meta<typeof LendingArchIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
