import { NavLink } from "./NavLink";

function TabMenu() {
  function clickHaler(link) {
    const sliderTag = document.getElementById("slider");
    const liTag = document.getElementById(link.id);
    const liTagWidth = liTag.offsetWidth;
    const liTagLeft = liTag.offsetLeft;
    sliderTag.style.width = liTagWidth + "px";
    sliderTag.style.transform = `translateX(${liTagLeft}px)`;
  }

  return (
    <div className="hidden md:block">
      <div className="relative ">
        <ul>
          {NavLink.map((link) => {
            return (
              <li
                key={link.id}
                className="inline-block px-2 uppercase text-xs md:text-sm cursor-pointer select-none"
                id={link.id}
                onClick={() => clickHaler(link)}
              >
                {link.name}
              </li>
            );
          })}
        </ul>
      </div>
      <div
        className="w-[62px] h-[2px] bg-green-500 rounded-xl transition-all duration-200"
        id="slider"
      ></div>
    </div>
  );
}

export default TabMenu;
