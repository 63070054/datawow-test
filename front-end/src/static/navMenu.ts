'use client'
import { NavMenuProps } from "@/components/Navbar/NavMenu";
import useUser, { User } from "@/utils/store/useUser";
import { faHouse, faInbox, faRepeat } from "@fortawesome/free-solid-svg-icons";

interface getMenusProps {
  user: User;
  switchRole: () => void;
}

export default function getMenus({user, switchRole}: getMenusProps) {
  const menus: NavMenuProps[] = [
    {
      icon: faHouse,
      menuName: "Home",
      redirectPath: "/"
    },
    {
      icon: faInbox,
      menuName: "History",
      redirectPath: "/history",
      show: user.role === "admin"
    },
    {
      icon: faRepeat,
      menuName: `Switch to ${user.role === "admin" ? "user" : "admin"}`,
      redirectPath: "",
      onClick: () => switchRole()
    },
  ]

  return menus;

}