import React from "react";

function OffCanvas({
  show,
  direction = "left",
  area = "100%",
  bg_color = "secondary-emphasis",
  children,
}) {
  // Direction
  let activeCondition, disableCondition;
  switch (direction) {
    case "top":
      direction = "top-0 left-0 right-0";
      disableCondition = "p-0 h-0";
      activeCondition = `h-[${area}]`;
      break;
    case "left":
      activeCondition = `w-[${area}]`;
      disableCondition = "p-0 w-0";
      direction = "top-0 left-0 bottom-0";
      break;
    case "right":
      activeCondition = `w-[${area}]`;
      disableCondition = "p-0 w-0";
      direction = "top-0 right-0 bottom-0";
      break;
    case "bottom":
      activeCondition = `h-[${area}]`;
      disableCondition = "p-0 h-0";
      direction = "bottom-0 right-0 left-0";
      break;
  }

  // Rendering
  return (
    <div
      className={`fixed ${direction} overflow-hidden transition-all duration-300 ease-in-out ${
        show ? activeCondition : disableCondition
      } bg-${bg_color} z-50 `}
    >
      {children}
    </div>
  );
}

export default OffCanvas;
