import { NavLink } from "./NavLink";

function OverMenu() {
  function clickHandler(link) {
    console.log(link);
  }
  return (
    <div className="w-full h-full bg-slate-600 flex justify-center items-center">
      <ul>
        {NavLink.map((link) => {
          return (
            <li
              key={link.id}
              className="text-sm uppercase text-center my-4 cursor-default select-none"
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
