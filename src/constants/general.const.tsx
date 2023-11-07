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
