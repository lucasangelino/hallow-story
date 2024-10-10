import { useState } from "react";
import { atom, useAtom } from "jotai";
import { useAppContext } from "../hooks/useContext";

export const currentPageAtom = atom("intro");
const cloudinaryHexColor = "#3448C5";

export const UI = () => {
  const [step, setStep] = useState(0);
  const { playerName } = useAppContext();
  const [currentPage, setCurrentPage] = useAtom(currentPageAtom);
  const introAudio = new Audio("audio/halloween-intro.mp3");
  introAudio.loop = true;
  return (
    <div className="fixed inset-0 pointer-events-none">
      <section
        className={`flex w-full h-full flex-col items-center justify-center
                    duration-500
                    ${currentPage === "home" ? "" : "opacity-0"}`}
      >
        <div className="h-[66%]"></div>
        <section
          onClick={() => {
            introAudio.play();
            // setCurrentPage("store");
          }}
          className="pointer-events-auto uppercase py-4 px-8 bg-orange-400
                    text-white font-black rounded-full hover:bg-orange-600 
                    cursor-pointer transition-colors duration-500"
        >
          <input
            type="text"
            placeholder={playerName}
            className="px-2 py-1 rounded-full"
          />
        </section>
      </section>
    </div>
  );
};
