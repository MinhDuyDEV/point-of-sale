import {
  IconHome,
  IconLogout,
  IconSetting,
  IconChart,
  IconUser,
} from "@/components/icons";
import { TSidebarLink } from "@/types/general.types";
import { redirect } from "next/navigation";

export const sidebarLinks: TSidebarLink[] = [
  {
    title: "Home",
    icon: <IconHome />,
    path: "/home",
  },
  {
    title: "Dashboard",
    icon: <IconChart />,
    path: "/dashboard",
  },
  {
    title: "Profile",
    icon: <IconUser />,
    path: "/profile",
  },
  {
    title: "Settings",
    icon: <IconSetting />,
    path: "/settings",
  },
];
