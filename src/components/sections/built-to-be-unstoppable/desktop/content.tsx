import { builtToBeUnstoppableItems } from "../data";
import Divider from "./divider";
import Item from "./item";

export default function BuiltToBeUnstoppableDesktopContent() {
  return (
    <div className="hidden lg:block">
      <Divider />
      <div className="grid grid-cols-4 gap-2">
        {builtToBeUnstoppableItems.map((item, index) => (
          <Item key={index} {...item} />
        ))}
      </div>
    </div>
  );
}
