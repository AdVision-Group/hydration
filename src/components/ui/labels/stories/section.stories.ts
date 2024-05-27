import type { Meta, StoryObj } from "@storybook/react";
import SectionLabel from "../section";

const meta = {
  title: "UI/Labels/SectionLabel",
  component: SectionLabel,
  parameters: {
    layout: "fulscreen",
  },

  tags: ["autodocs"],
} satisfies Meta<typeof SectionLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: "Built to be unstoppable" },
  parameters: {},
};
