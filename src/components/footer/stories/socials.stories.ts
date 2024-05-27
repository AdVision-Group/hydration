import type { Meta, StoryObj } from "@storybook/react";
import FooterSocials from "../socials";

const meta = {
  title: "Footer/Socials",
  component: FooterSocials,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],
} satisfies Meta<typeof FooterSocials>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
