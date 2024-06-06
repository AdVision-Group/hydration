"use client";

import useScreenSize from "@/hooks/useScreenSize";
import EmpoweringDaosDesktopContent from "./desktop/content";
import EmpoweringDaosMobileContent from "./mobile/content";
import { useMemo } from "react";

export default function EmpoweringDaosSection() {
  // Using js to determine if the screen is mobile to avoid unnecessary scroll lock calculations
  // on mobile devices

  const { width, height } = useScreenSize();
  const showMobile = useMemo(
    () => width < 1024 || height < 850,
    [width, height]
  );

  return showMobile ? (
    <EmpoweringDaosMobileContent />
  ) : (
    <EmpoweringDaosDesktopContent />
  );
}
