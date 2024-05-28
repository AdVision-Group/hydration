import type { Meta, StoryObj } from "@storybook/react";
import EfficientTradingCard from "../card";
import Button from "@/components/ui/buttons/button";

const meta = {
  title: "EfficientTrading/Card",
  component: EfficientTradingCard,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],
} satisfies Meta<typeof EfficientTradingCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Split your trades",
    description:
      "No trade is too large for Hydration. Our user-friendly trading app will help you minimize slippage by allowing you to easily split your order in several consecutive trades.",
    theme: "lavander",
    icon: {
      src: "/hand.svg",
      alt: "Lock icon",
    },
    buttons: [
      <Button key="x" role="secondary" action={{ href: "/app" }}>
        Launch App
      </Button>,
    ],
  },
};
