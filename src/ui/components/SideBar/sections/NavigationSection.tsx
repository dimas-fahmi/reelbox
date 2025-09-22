import { useSidebarStore } from "@/src/lib/stores/sidebar";
import { Film, House, LucideIcon, Monitor, Newspaper } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

type interactivity =
  | { href: string; onClick?: null }
  | { href?: null; onClick: () => void };

const NavItem = ({
  icon,
  text,
  href,
  onClick,
}: { icon: LucideIcon; text: string } & interactivity) => {
  const router = useRouter();
  const { setOpen } = useSidebarStore();
  const Icon = icon;
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <button
      className={`flex ${
        active ? "bg-yellow-400 text-black" : "hover:underline"
      } px-4 py-2 items-center gap-2 w-full rounded-md font-semibold cursor-pointer`}
      onClick={() => {
        if (href) {
          router.push(href);
          setOpen(false);
        }

        if (onClick) {
          onClick();
        }
      }}
    >
      <Icon className="w-4 h-4" />
      <span className="text-sm">{text}</span>
    </button>
  );
};

const NavigationSection = () => {
  return (
    <section id="navigation" className="mt-4 p-4">
      <h1 className="mb-4 font-header font-bold">Navigation</h1>
      <nav className="grid gap-2">
        <NavItem icon={House} text="Homepage" href={"/"} />
        <NavItem icon={Film} text="Movies" href={"/movies"} />
        <NavItem icon={Monitor} text="Shows" href={"/shows"} />
        <NavItem icon={Newspaper} text="News" href={"/news"} />
      </nav>
    </section>
  );
};

export default NavigationSection;
