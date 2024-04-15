import { menus } from "@/static/navMenu";
import NavMenu from "./NavMenu";
import { faHouseChimney } from "@fortawesome/free-solid-svg-icons";

export default function SideNavBar() {
  return (
    <>
      <div className="flex flex-col py-16 px-2 shadow-md justify-between">
        <span className="flex flex-col gap-4">
          <p className="text-center h1">
            Admin
          </p>
          {menus.map((menu, index) => {
            return (
              <NavMenu key={index} {...menu} />
            )
          })}
        </span>
        <NavMenu icon={faHouseChimney} menuName="Log out" redirectPath="" />
      </div>
    </>
  )
}