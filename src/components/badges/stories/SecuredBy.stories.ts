import type { Meta, StoryObj } from "@storybook/react";
import SecuredByBadge from "@/components/badges/securedByBadge";

const meta = {
  title: "Badges/SecuredBy",
  component: SecuredByBadge,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],
} satisfies Meta<typeof SecuredByBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
