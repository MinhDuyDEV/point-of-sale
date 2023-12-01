import {
  IconHome,
  IconLogout,
  IconSetting,
  IconChart,
  IconUser,
  IconUsers,
} from "@/components/icons";
import { TSidebarLink } from "@/types/general.types";

export const sidebarLinks: TSidebarLink[] = [
  {
    title: "Home",
    icon: <IconHome />,
    path: "/home",
    role: ["employee", "admin"],
  },
  {
    title: "POS",
    icon: <IconHome />,
    path: "/point-of-sale",
    role: ["employee", "admin"],
  },
  {
    title: "Dashboard",
    icon: <IconChart />,
    path: "/dashboard",
    role: ["admin"],
  },
  {
    title: "Users",
    icon: <IconUsers />,
    path: "/users",
    role: ["admin"],
  },
  {
    title: "Products",
    icon: <IconChart />,
    path: "/products",
    role: ["employee", "admin"],
  },
  {
    title: "Profile",
    icon: <IconUser />,
    path: "/profile",
    role: ["employee", "admin"],
  },
  {
    title: "Settings",
    icon: <IconSetting />,
    path: "/settings",
    role: ["employee", "admin"],
  },
];
