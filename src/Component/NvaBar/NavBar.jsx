import Logo from "./Logo";
import NavButton from "./NavButton";
import TabMenu from "./TabManu";

function NavBar() {
  return (
    <div className="w-full  flex justify-between items-center bg-slate-800 md:px-5 md:py-4 px-3 py-2 sticky top-1">
      <div>
        <Logo />
      </div>
      <div>
        <TabMenu />
      </div>
      <div>
        <NavButton />
      </div>
    </div>
  );
}

export default NavBar;
