import {
  IconHome,
  IconLogout,
  IconSetting,
  IconChart,
  IconUser,
} from "@/components/icons";
import { TSidebarLink } from "@/types/general.types";

export const sidebarLinks: TSidebarLink[] = [
  {
    title: "Home",
    icon: <IconHome />,
    path: "/home",
  },
  {
    title: "POS",
    icon: <IconHome />,
    path: "/point-of-sale",
  },
  {
    title: "Users",
    icon: <IconUser />,
    path: "/users",
  },
  {
    title: "Dashboard",
    icon: <IconChart />,
    path: "/dashboard",
  },
  {
    title: "Products",
    icon: <IconChart />,
    path: "/products",
  },
  {
    title: "Settings",
    icon: <IconSetting />,
    path: "/settings",
  },
];
