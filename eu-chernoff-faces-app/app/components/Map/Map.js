import style from "./Map.module.css";
import Image from "next/image";

const Map = () => {
  return (
    <Image
      className={style.mapImage}
      src="euMap.svg"
      width={680}
      height={500}
      alt="Picture of the author"
    />
  );
};

export default Map;
