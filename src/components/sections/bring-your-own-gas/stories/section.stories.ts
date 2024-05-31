import type { Meta, StoryObj } from "@storybook/react";
import BringYourOwnGasSection from "../section";

const meta = {
  title: "BringYourOwnGas",
  component: BringYourOwnGasSection,
  parameters: {
    layout: "fullscreen",
  },

  tags: ["autodocs"],
} satisfies Meta<typeof BringYourOwnGasSection>;

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
