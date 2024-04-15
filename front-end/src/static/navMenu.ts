import { NavMenuProps } from "@/components/Navbar/NavMenu";
import { faHouse } from "@fortawesome/free-solid-svg-icons/faHouse";

export const menus: NavMenuProps[] = [
  {
    icon: faHouse,
    menuName: "Home",
    redirectPath: "/home"
  },
  {
    icon: faHouse,
    menuName: "History",
    redirectPath: "/home"
  },
  {
    icon: faHouse,
    menuName: "Switch to user",
    redirectPath: ""
  },
]