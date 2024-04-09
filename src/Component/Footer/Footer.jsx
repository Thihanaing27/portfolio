import { FaFacebook } from "react-icons/fa";
import { FaViber } from "react-icons/fa";

function Footer() {
  return (
    <div className="w-full flex justify-between items-center px-4 py-2 bg-slate-800 text-xs md:text-base ">
      <span>
        Copyright @ 2024 developed by <b>THIHA NAING</b>
      </span>
      <div className="flex justify-center items-center gap-4 bg-blue-600 px-2 py-1 border-sky-800 border-[1px] rounded-xl">
        <FaFacebook className="hover:scale-110 text-xl cursor-pointer select-none" />
        <FaViber className="hover:scale-110 text-xl cursor-pointer select-none" />
      </div>
    </div>
  );
}

export default Footer;
