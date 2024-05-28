import type { Meta, StoryObj } from "@storybook/react";
import Item from "../item";

const meta = {
  title: "BuiltToBeUnstoppable/Item",
  component: Item,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],
} satisfies Meta<typeof Item>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    align: "left",
    title: "On-Chain Governance",
    description:
      "Decisions for the Hydration Protocol are democratically made through transparent processes with broad community involvement. ",
  },
  parameters: {
    viewport: {
      defaultViewport: "desktop",
    },
  },
};
