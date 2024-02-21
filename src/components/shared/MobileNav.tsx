import { useState } from "react"
import { NavLinks } from "../../constants";
import { NavLink } from "react-router-dom";

const MobileNav = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex sm:hidden">
      <button className="flex flex-col gap-1 z-20" onClick={() => setOpen(!open)}>
        <span className={`w-5 h-[2px] bg-black rounded-sm duration-300 ${open ? 'rotate-45 translate-y-[3px]' : ''}`}></span>
        <span className={`w-5 h-[2px] bg-black rounded-sm ${open ? 'hidden' : ''}`}></span>
        <span className={`w-5 h-[2px] bg-black rounded-sm duration-300 ${open ? '-rotate-45 -translate-y-[3px]' : ''}`}></span>
      </button>
      <div className={`fixed top-0 w-full h-screen z-10 bg-color3 flex flex-col items-center justify-center gap-20 duration-300 ${open ? 'right-0' : '-right-full'}`}>
        {NavLinks.map((link) => (
          <NavLink to={link.url} key={link.label} onClick={() => setOpen(!open)}>
            {link.label}
          </NavLink>
        ))}
      </div>
    </div>
  )
}

export default MobileNav