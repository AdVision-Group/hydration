import Heading from "@/components/ui/typography/heading";
import Paragraph from "@/components/ui/typography/paragraph";
import Image from "next/image";
import Bullet from "../assets/bullet.svg";

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
    <div className="flex justify-between gap-8">
      <div className="flex items-center gap-4 w-[45%]">
        {active && <Image src={Bullet} alt="" />}
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
          className={`transition text-lavender ${active ? "opacity-100" : "opacity-0"}`}
        >
          {description}
        </Paragraph>
      </div>
    </div>
  );
}
