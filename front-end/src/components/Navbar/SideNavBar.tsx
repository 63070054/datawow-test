'use client'
import  getMenus  from "@/static/navMenu";
import NavMenu, { NavMenuProps } from "./NavMenu";
import { faSignOut } from "@fortawesome/free-solid-svg-icons";
import useUser from "@/utils/store/useUser";
import { useEffect, useState } from "react";

export default function SideNavBar() {

  const { user, switchRole } = useUser()

  const [menus, setMenus] = useState<NavMenuProps[]>();

  useEffect(() => {
    const menus = getMenus({
      user,
      switchRole
    })
    setMenus([...menus])
  }, [user])

  
  return (
    <>
      <div className="flex flex-col py-4 md:py-16 px-2 shadow-md md:justify-between">
        <span className="flex flex-col gap-4">
          <p className="text-center text-3xl font-bold">
            {user.role.toUpperCase()}
          </p>
          {menus?.map((menu, index) => {
            return (
              <NavMenu key={index} {...menu} />
            )
          })}
        </span>
        <NavMenu icon={faSignOut} menuName="Log out" redirectPath="" className="mt-4"  />
      </div>
    </>
  )
}