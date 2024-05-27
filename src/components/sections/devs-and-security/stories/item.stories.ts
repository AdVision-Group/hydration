import type { Meta, StoryObj } from "@storybook/react";
import DevsAndSecurityItem from "../item";
import LockIcon from "../assets/lock.svg";

const meta = {
  title: "DevsAndSecurity/Item",
  component: DevsAndSecurityItem,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],
} satisfies Meta<typeof DevsAndSecurityItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Hydration security",
    description: "Find and report vulnerabilities, receive generous rewards.",
  },
  parameters: {
    viewport: {
      defaultViewport: "desktop",
    },
  },
};
