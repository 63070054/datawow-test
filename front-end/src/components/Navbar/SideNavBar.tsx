import { menus } from "@/static/navMenu";
import NavMenu from "./NavMenu";
import { faHouseChimney } from "@fortawesome/free-solid-svg-icons";

export default function SideNavBar() {
  return (
    <>
      <div className="w-48 flex flex-col py-16 px-2 shadow-md justify-between">
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
        <NavMenu icon={faHouseChimney} menuName="Log out" redirectPath="" />
      </div>
    </>
  )
}