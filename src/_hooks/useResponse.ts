import React from "react";
import { useMediaQuery } from "@chakra-ui/react";

export function useResponse() {
  const [isMobile] = useMediaQuery("(max-width: 425px)");
  const [isTabletVertical] = useMediaQuery("(max-width: 768px)");
  const [isTabletHorizontal] = useMediaQuery("(max-width: 1023px)");
  const [isDesktop] = useMediaQuery("(min-width: 1024px)");

  return {
    isMobile,
    isTabletVertical,
    isTabletHorizontal,
    isDesktop,
  };
}
