import Image from "./Image";
import Text from "./Text";

function Content() {
  return (
    <div className="w-full  min-h-screen flex justify-center items-center">
      <div className="w-full lg:max-w-7xl mx-auto md:flex justify-center items-center gap-14 ">
        <div>
          <Text />
        </div>
        <div>
          <Image />
        </div>
      </div>
    </div>
  );
}
export default Content;
