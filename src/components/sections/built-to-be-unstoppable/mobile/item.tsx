import Title from "@/components/ui/typography/title";
import WithLeftDash from "./with-left-dash";
import Paragraph from "@/components/ui/typography/paragraph";

type ItemProps = {
  title: string;
  description: string;
};

export default function Item({ title, description }: ItemProps) {
  return (
    <WithLeftDash>
      <div className="flex flex-col gap-2">
        <Title size="small">{title}</Title>
        <Paragraph size="large">{description}</Paragraph>
      </div>
    </WithLeftDash>
  );
}
