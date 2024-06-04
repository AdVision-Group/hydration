import { StaticImageData } from "next/dist/shared/lib/get-img-props";
import { useEffect, useState } from "react";

function parseSrc(src: string | StaticImageData) {
  return typeof src === "string" ? src : src.src;
}

export default function useProgressiveImage({
  src,
  placeholderSrc,
}: {
  src: string | StaticImageData;
  placeholderSrc: string | StaticImageData;
}) {
  const parsed = {
    src: parseSrc(src),
    placeholderSrc: parseSrc(placeholderSrc),
  };

  const [sourceLoaded, setSourceLoaded] = useState(parsed.placeholderSrc);

  useEffect(() => {
    const img = new Image();
    const parsedSrc = typeof src === "string" ? src : src.src;
    img.src = parsedSrc;
    img.onload = () => setSourceLoaded(parsedSrc);
  }, [src]);

  return sourceLoaded;
}
