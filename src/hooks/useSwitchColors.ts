import { useState } from "react";

export function useSwitchColors() {
  const [showColors, setShowColors] = useState(false);
  const toogleColors = () => {
    setShowColors(!showColors);
  };

  return {
    showColors,
    setShowColors,
    toogleColors,
  };
}
