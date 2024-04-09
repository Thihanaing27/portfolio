import thiha from "../../assets/thiha.png";
function Image() {
  return (
    <div className="w-full md:h-[300px] h-[250px] md:min-w-[300px] md:mt-10 mt-5">
      <div className="relative bg-zinc-900 w-10/12 h-full mx-auto p-1 ">
        <span className="[writing-mode:vertical-rl] rotate-180 h-full leading-none tracking-widest">
          THIHA NAING
        </span>
        <img
          src={thiha}
          className="w-[95%] h-full object-cover absolute -bottom-2 -right-3 bg-slate-700 rounded-tr-xl rounded-bl-xl grayscale hover:grayscale-0 hover:-bottom-1 hover:-right-2 transition-all duration-300 cursor-pointer"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-sky-800 shadow-[0_0_100px_100px] -z-10"></div>
      </div>
    </div>
  );
}

export default Image;
