import { Meta, StoryObj } from "@storybook/react";
import EmpoweringDaosSection from "../section";
import EffectiveTradingSection from "../../efficient-trading/section";

const Wrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-blue py-[100vh]">
    {children}
    <EffectiveTradingSection />
  </div>
);

const meta = {
  title: "EmpoweringDaos",
  component: () => <EmpoweringDaosSection />,
  parameters: {
    layout: "fullscreen",
  },

  tags: ["autodocs"],
} satisfies Meta<typeof EmpoweringDaosSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Wrapped: Story = {
  decorators: (Story) => (
    <Wrapper>
      <Story />
    </Wrapper>
  ),
  args: {},
  parameters: {},
};

export const Default: Story = {
  args: {},
  parameters: {},
};
