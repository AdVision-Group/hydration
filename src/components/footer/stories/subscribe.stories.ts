import type { Meta, StoryObj } from "@storybook/react";
import SubscribeToNewsletter from "../subscribe";

const meta = {
  title: "Footer/SubscribeToNewsletter",
  component: SubscribeToNewsletter,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],
} satisfies Meta<typeof SubscribeToNewsletter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
