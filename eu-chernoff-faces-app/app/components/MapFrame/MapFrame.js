import { useEffect, useRef } from "react";
import style from "./MapFrame.module.css";
import { useAppContext } from "@/app/contexts/appContext";

const MapFrame = ({ children }) => {
  const wrapperRef = useRef(null);
  const { isModalVisible } = useAppContext();

  useEffect(() => {
    // Get the wrapper element
    const wrapper = wrapperRef.current;

    // Set the initial scroll position (adjust as needed)
    const initialScrollLeft = 150; // Horizontal scroll
    const initialScrollTop = 400; // Vertical scroll

    // Set the scroll position on component mount
    if (wrapper) {
      wrapper.scrollLeft = initialScrollLeft;
      wrapper.scrollTop = initialScrollTop;
    }
  }, [isModalVisible]);

  return (
    <div className={style.outterframe}>
      <div className={style.innerframe} ref={wrapperRef}>
        {children}
      </div>
    </div>
  );
};

export default MapFrame;
