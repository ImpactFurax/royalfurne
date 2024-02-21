import { NavLink } from "react-router-dom"
import { NavLinks } from "../../constants"
import MobileNav from "./MobileNav"

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-color2 font-montserrat px-2 py-5 flex items-center justify-between sm:px-10 md:px-24 z-10">
      <NavLink to="/">
        <h1 className="text-4xl font-cinzel xl:text-6xl">RoyalFurne</h1>
      </NavLink>
      <div className="hidden  xl:text-xl gap-8 lg:gap-12 sm:flex">
        {NavLinks.map((link) => (
          <NavLink to={link.url} key={link.label}>
            {link.label}
          </NavLink>
        ))}
      </div>
      <MobileNav />
    </nav>
  )
}

export default Navbar