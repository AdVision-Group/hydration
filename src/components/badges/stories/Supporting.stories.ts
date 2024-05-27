import type { Meta, StoryObj } from "@storybook/react";
import SupportingBadge from "../supportingBadge";

const meta = {
  title: "Badges/Supporting",
  component: SupportingBadge,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],
} satisfies Meta<typeof SupportingBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
