import Logo from "./Logo";
import NavButton from "./NavButton";
import TabMenu from "./TabManu";

function NavBar() {
  return (
    <div className="w-[100vw]  flex justify-between items-center bg-slate-800 md:px-11 md:py-4 px-4 py-2">
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
