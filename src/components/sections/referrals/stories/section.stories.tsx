import type { Meta, StoryObj } from "@storybook/react";
import LiquidityIncentivesSection from "../section";
import ReferralsSection from "../section";

const meta = {
  title: "Referrals",
  component: ReferralsSection,
  parameters: {
    layout: "fullscreen",
  },

  tags: ["autodocs"],
} satisfies Meta<typeof ReferralsSection>;

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
