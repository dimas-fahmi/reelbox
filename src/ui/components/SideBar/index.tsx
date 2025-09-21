import React from "react";
import { motion } from "motion/react";
import HeaderSection from "./sections/HeaderSection";
import { useSidebarStore } from "@/src/lib/stores/sidebar";
import NavigationSection from "./sections/NavigationSection";

const SideBar = () => {
  const { open, toggleOpen } = useSidebarStore();

  return (
    <>
      {/* Sidebar */}
      <motion.aside
        initial={{ x: -480 }}
        animate={open ? { x: 0 } : { x: -480 }}
        transition={{
          duration: 0.3,
        }}
        className="fixed top-0 left-0 bottom-0 w-[320px] bg-secondary z-30"
      >
        {/* Sidebar Header */}
        <HeaderSection />

        {/* Navigation Section */}
        <NavigationSection />
      </motion.aside>

      {/* Overlay */}
      <div
        className={`${
          open ? "opacity-50" : "opacity-0 pointer-events-none"
        } z-20 bg-background fixed inset-0 transition-all duration-300`}
        onClick={() => toggleOpen()}
      ></div>
    </>
  );
};

export default SideBar;
