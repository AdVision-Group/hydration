import type { Meta, StoryObj } from "@storybook/react";
import BuiltToBeUnstoppableSection from "../section";

const meta = {
  title: "BuiltToBeUnstoppable",
  component: BuiltToBeUnstoppableSection,
  parameters: {
    layout: "fullscreen",
  },

  tags: ["autodocs"],
} satisfies Meta<typeof BuiltToBeUnstoppableSection>;

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
