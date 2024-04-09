// import OverMenu from "./OverMenu";
import "./style.css";

function HumbergerMenu() {
  function clickHandler() {
    const bar1 = document.getElementById("bar1");
    const bar2 = document.getElementById("bar2");
    const bar3 = document.getElementById("bar3");
    const MenuContainer = document.getElementById("MenuContainer");
    const OverMenu = document.getElementById("OverMenu");
    console.log(OverMenu);
    if (MenuContainer.classList.contains("isOpen")) {
      bar2.classList.remove("opacity-0");
      bar1.classList.remove("rotatePlus45Deg");
      bar3.classList.remove("rotateMinus45Deg");
      MenuContainer.classList.remove("isOpen");
      OverMenu.classList.add("-left-full");
      OverMenu.classList.remove("left-0");
    } else {
      bar2.classList.add("opacity-0");
      bar1.classList.add("rotatePlus45Deg");
      bar3.classList.add("rotateMinus45Deg");
      MenuContainer.classList.add("isOpen");
      OverMenu.classList.remove("-left-full");
      OverMenu.classList.add("left-0");
    }
  }

  return (
    <div>
      <div
        className="flex flex-col gap-1 justify-center items-center cursor-pointer select-none"
        onClick={() => clickHandler()}
        id="MenuContainer"
      >
        <div
          className="w-5 h-[2px] bg-slate-200 rounded-md transition-all duration-500"
          id="bar1"
        ></div>
        <div
          className="w-5 h-[2px] bg-slate-200 rounded-md transition-all duration-500"
          id="bar2"
        ></div>
        <div
          className="w-5 h-[2px] bg-slate-200 rounded-md transition-all duration-500"
          id="bar3"
        ></div>
      </div>

      {/* <div 
      className="absolute w-full h-screen  -left-0 bg-green-500"
      id="OverMenu">
        <OverMenu />
      </div> */}
    </div>
  );
}
export default HumbergerMenu;
