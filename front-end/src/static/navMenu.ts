import { NavMenuProps } from "@/components/Navbar/NavMenu";
import { faHouse, faInbox, faRepeat } from "@fortawesome/free-solid-svg-icons";

export const menus: NavMenuProps[] = [
  {
    icon: faHouse,
    menuName: "Home",
    redirectPath: "/"
  },
  {
    icon: faInbox,
    menuName: "History",
    redirectPath: "/history"
  },
  {
    icon: faRepeat,
    menuName: "Switch to user",
    redirectPath: ""
  },
]