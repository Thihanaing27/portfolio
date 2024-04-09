import { NavLink } from "./NavLink";

function OverMenu() {
  function clickHandler(link) {
    console.log(link);
  }
  return (
    <div className="min-w-full min-h-full bg-zinc-700 flex justify-center items-center opacity-90">
      <ul className="">
        {NavLink.map((link) => {
          return (
            <li
              key={link.id}
              className="text-sm uppercase text-center my-4 cursor-default select-none OverMenu"
              id={link.id}
              onClick={() => clickHandler(link)}
            >
              {link.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default OverMenu;
