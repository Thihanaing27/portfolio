import { FaFacebook } from "react-icons/fa";
import { FaViber } from "react-icons/fa";
import HumbergerMenu from "./HumbergerMenu";
function NavButton() {
  return (
    <div className="flex gap-2 items-center justify-betwen">
      <div className="flex justify-center items-center gap-2">
        <FaFacebook className="hover:scale-110 text-xl cursor-pointer select-none" />
        <FaViber className="hover:scale-110 text-xl cursor-pointer select-none" />
      </div>
      <div className="md:hidden">
        <HumbergerMenu />
      </div>
    </div>
  );
}

export default NavButton;
