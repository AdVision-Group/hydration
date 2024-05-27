import type { Meta, StoryObj } from "@storybook/react";
import DevsAndSecurityItem from "../item";
import DevsAndSecuritySection from "../section";

const meta = {
  title: "DevsAndSecurity",
  component: DevsAndSecuritySection,
  parameters: {
    layout: "fullscreen",
  },

  tags: ["autodocs"],
} satisfies Meta<typeof DevsAndSecuritySection>;

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
