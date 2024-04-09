import HumbergerMenu from "./HumbergerMenu";
import Logo from "./Logo";
import NavButton from "./NavButton";
import TabMenu from "./TabManu";

function NavBar() {
  return (
    <div className="w-full  flex justify-between items-center bg-slate-800 md:px-6 md:py-4 px-4 py-2 fixed top-0 z-20">
      <div>
        <Logo />
      </div>
      <div>
        <TabMenu />
      </div>
      <div className="">
        <NavButton />
      </div>
    </div>
  );
}

export default NavBar;
