import { Link } from "react-router-dom";
import FormNewsletter from "./form/FormNewsletter";
import { RiInstagramFill, RiPinterestFill, RiFacebookCircleFill, RiTwitterFill, RiTiktokFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="bg-color2 px-2 py-5 flex flex-col justify-between gap-7 md:flex-row md:items-center xl:px-24 xl:py-8">
      <div>
        <h2 className="font-cinzel text-3xl font-bold">NEWSLETTER</h2>
        <FormNewsletter />
      </div>
      <p className="font-montserrat text-center font-semibold">© RoyalFurne 2024 | All Right reserved</p>
      <div className="flex justify-between md:gap-5">
        <Link to="/">
          <RiInstagramFill size={45} color="#616161" className="cursor-pointer" />
        </Link>
        <Link to="/">
          <RiPinterestFill size={45} color="#616161" className="cursor-pointer" />
        </Link>
        <Link to="/">
          <RiFacebookCircleFill size={45} color="#616161" className="cursor-pointer" />
        </Link>
        <Link to="/">
          <RiTwitterFill size={45} color="#616161" className="cursor-pointer" />
        </Link>
        <Link to="/">
          <RiTiktokFill size={45} color="#616161" className="cursor-pointer" />
        </Link>
      </div>
    </footer>
  )
}

export default Footer