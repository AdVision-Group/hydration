import type { Meta, StoryObj } from "@storybook/react";
import Socials from "../socials";
import FooterLinks from "../links";

const meta = {
  title: "Footer/Links",
  component: FooterLinks,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],
} satisfies Meta<typeof FooterLinks>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
