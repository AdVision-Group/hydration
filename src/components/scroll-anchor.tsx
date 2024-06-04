type ScrollAnchorProps = {
  id: string;
};

export default function ScrollAnchor({ id }: ScrollAnchorProps) {
  return <div className="absolute -top-[5.5rem]" id={id} />;
}
