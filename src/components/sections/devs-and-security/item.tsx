import React from "react";
import Title from "@/components/ui/typography/title";
import Paragraph from "@/components/ui/typography/paragraph";

export type DevsAndSecurityItemProps = {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
};

export default function DevsAndSecurityItem({
  title,
  description,
  icon: Icon,
}: DevsAndSecurityItemProps) {
  return (
    <div className="flex gap-5 p-2 bg-white rounded-md border border-blue group">
      <div className="rounded-sm bg-white shadow-blue-inset w-[4.875rem] h-[6.125rem] flex justify-center items-center">
        <Icon className="transition-all text-blue group-hover:text-purple" />
      </div>
      <div className="flex flex-col gap-4 max-w-[351px]">
        <Title size="small">{title}</Title>
        <Paragraph className="text-purple-dim" size="small">
          {description}
        </Paragraph>
      </div>
    </div>
  );
}
