import type { Meta, StoryObj } from "@storybook/react";
import Galaxy from "../galaxy";

const meta = {
  title: "BringYourGas/Galaxy",
  component: Galaxy,
  parameters: {
    layout: "fulscreen",
  },

  tags: ["autodocs"],
} satisfies Meta<typeof Galaxy>;

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
