import type { Meta, StoryObj } from "@storybook/react";
import EffectiveTradingSection from "../section";

const meta = {
  title: "EfficientTrading",
  component: EffectiveTradingSection,
  parameters: {
    layout: "fullscreen",
  },

  tags: ["autodocs"],
} satisfies Meta<typeof EffectiveTradingSection>;

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
