import type { Meta, StoryObj } from "@storybook/react";
import FooterLinks from "../links";
import Footer from "../footer";

const meta = {
  title: "Footer",
  component: Footer,
  parameters: {
    layout: "fulscreen",
    viewport: {
      defaultViewport: "desktop",
    },
  },

  tags: ["autodocs"],
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
