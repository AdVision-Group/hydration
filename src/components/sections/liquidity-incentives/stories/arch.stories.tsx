import type { Meta, StoryObj } from "@storybook/react";
import HollarArchIcon from "../arch-icon/hollar-icon";
import Arch from "../arch";
import LendingArchIcon from "../arch-icon/lending-icon";

const meta = {
  title: "LiquidityIncentives/Arch",
  component: Arch,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],
} satisfies Meta<typeof Arch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LendingArch: Story = {
  args: {
    empty: false,
    title: "Lending & Borrowing",
    Icon: <LendingArchIcon />,
    description:
      "Borrow a multitude of digital assets after providing collateral in one or several accepted currencies.",
  },
};

export const HollarArch: Story = {
  args: {
    empty: false,
    title: "HOLLAR",
    Icon: <HollarArchIcon />,
    description:
      "The future deserves the HOLLAR - a decentralized, over-collateralized digital currency designed to be price-stable.",
  },
};

export const EmptyArch: Story = {
  args: {
    empty: true,
  },
};
