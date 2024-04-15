import { menus } from "@/static/navMenu";
import NavMenu from "./NavMenu";
import { faSignOut } from "@fortawesome/free-solid-svg-icons";

export default function SideNavBar() {
  return (
    <>
      <div className="flex flex-col py-4 md:py-16 px-2 shadow-md md:justify-between">
        <span className="flex flex-col gap-4">
          <p className="text-center text-3xl font-bold">
            Admin
          </p>
          {menus.map((menu, index) => {
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