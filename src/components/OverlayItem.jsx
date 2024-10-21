import { useCallback } from "react";
import { currentPageAtom } from "./UI";
import { Html } from "@react-three/drei";
import { useAtom } from "jotai";

export const OverlayItem = ({
  className = "",
  title,
  description,
  price,
  bgColor,
  onClick,
  imgSrc,
  ...props
}) => {
  const [currentPage] = useAtom(currentPageAtom);

  // const handleClick = useCallback(() => {
  //   onClick();
  // }, [onClick]);

  return (
    <Html
      transform
      distanceFactor={8}
      center
      className={`w-48 rounded-md overflow-hidden ${
        currentPage === "CEMENTERY" ? "" : "opacity-0"
      } transition-opacity duration-1000 ${className}`}
      {...props}
    >
      <img src={imgSrc} alt={title} />
      <div className="bg-white bg-opacity-50 backdrop-blur-lg text-xs p-2 w-full">
        <h2 className="font-bold">{title}</h2>
        <p>{description}</p>
      </div>
      <button
        className={`${bgColor} hover:bg-opacity-50 transition-colors duration-500 px-4 py-2 font-bold text-white w-full text-xs`}
      >
        Elegir Detective
      </button>
    </Html>
  );
};
