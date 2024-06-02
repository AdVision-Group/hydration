import { useState } from "react";
import useResize from "./useResize";

export default function useScreenSize() {
  const [screenSize, setScreenSize] = useState({
    width: 0,
    height: 0,
  });

  useResize(({ width, height }) => {
    setScreenSize({ width, height });
  });

  return screenSize;
}
