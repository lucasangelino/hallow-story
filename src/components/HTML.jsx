import { currentPageAtom } from "./UI";
import { Html } from "@react-three/drei";
import { useAtom } from "jotai";

export const HTML = ({ children, ...props }) => {
  const [currentPage] = useAtom(currentPageAtom);
  return (
    <Html
      transform
      distanceFactor={1.2}
      center
      className={`w-48 rounded-md overflow-hidden ${
        currentPage === "store" ? "" : "opacity-0"
      } transition-opacity duration-1000 ${className}`}
      {...props}
    >
      {children}
    </Html>
  );
};
