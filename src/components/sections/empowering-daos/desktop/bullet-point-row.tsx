import Heading from "@/components/ui/typography/heading";
import Paragraph from "@/components/ui/typography/paragraph";
import Bullet from "./bullet";
import { none } from "@/animation/variants";

type BulletPointRowProps = {
  title: React.ReactNode;
  description: string;
  active: boolean;
};

export default function BulletPointRow({
  title,
  description,
  active,
}: BulletPointRowProps) {
  return (
    <div className="flex justify-between gap-8 z-[2]">
      <div className="flex items-center gap-4 w-[45%]">
        <Bullet active={active} />
        <Heading
          size="small"
          className={`transition ${active ? "text-lavender" : "text-lavender-dim"}`}
        >
          {title}
        </Heading>
      </div>
      <div className="w-[55%]">
        <Paragraph
          size="medium"
          animationVariants={none()}
          className={`transition text-lavender ${active ? "opacity-100" : "opacity-0"}`}
        >
          {description}
        </Paragraph>
      </div>
    </div>
  );
}
