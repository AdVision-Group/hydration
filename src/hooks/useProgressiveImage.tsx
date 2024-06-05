import { StaticImageData } from "next/dist/shared/lib/get-img-props";
import { useEffect, useState } from "react";
import { useInView } from "framer-motion";

function parseSrc(src: string | StaticImageData) {
  return typeof src === "string" ? src : src.src;
}

export default function useProgressiveImage({
  src,
  placeholderSrc,
  sectionRef,
}: {
  src: string | StaticImageData;
  placeholderSrc: string | StaticImageData;
  sectionRef: React.RefObject<any>;
}) {
  const shouldLoad = useInView(sectionRef, { once: true });
  const parsed = {
    src: parseSrc(src),
    placeholderSrc: parseSrc(placeholderSrc),
  };

  const [sourceLoaded, setSourceLoaded] = useState(parsed.placeholderSrc);

  useEffect(() => {
    if (shouldLoad) {
      console.log("loading");
      const img = new Image();
      const parsedSrc = typeof src === "string" ? src : src.src;
      img.src = parsedSrc;
      img.onload = () => setSourceLoaded(parsedSrc);
    }
  }, [src, shouldLoad]);

  return sourceLoaded;
}
