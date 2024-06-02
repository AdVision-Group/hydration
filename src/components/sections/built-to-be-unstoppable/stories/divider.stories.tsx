import type { Meta, StoryObj } from "@storybook/react";
import Divider from "../desktop/divider";

const meta = {
  title: "BuiltToBeUnstoppable/Divider",
  component: () => (
    <div className="py-28">
      <Divider />
    </div>
  ),
  parameters: {
    layout: "fullscreen",
  },

  tags: ["autodocs"],
} satisfies Meta<typeof Divider>;

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
