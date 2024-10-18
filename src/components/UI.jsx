import { useState, useEffect } from "react";
import { atom, useAtom } from "jotai";
import { useGameContext } from "../hooks/useContext";
import { CloudinaryUpload } from "./CloudinaryUpload";
import { CharacterCard } from "./CharacterCard";

export const currentPageAtom = atom("intro");
const cloudinaryHexColor = "#3448C5";

export const UI = () => {
  const {
    introStep,
    setIntroStep,
    setPlayerName,
    playerName,
    playerPicture,
    setOpenGameRules,
    setEnableControls,
  } = useGameContext();
  const [currentPage, setCurrentPage] = useAtom(currentPageAtom);
  const [files, setFiles] = useState([]);
  const introAudio = new Audio("audio/halloween-intro.mp3");
  const [image, setImage] = useState(null);
  introAudio.loop = true;
  introAudio.volume = 0.3;

  if (introStep === 0) {
    return (
      <div className="fixed inset-0 pointer-events-none">
        <section
          className={`flex w-full h-full flex-col items-center justify-center
                    duration-500
                    ${currentPage === "home" ? "" : "opacity-0"}`}
        >
          <div className="h-[66%]"></div>
          <button
            onClick={() => {
              introAudio.play();
              setIntroStep(1);
            }}
            className="pointer-events-auto uppercase py-4 px-8 bg-orange-400
                    text-white font-black rounded-full hover:bg-orange-600
                    cursor-pointer transition-colors duration-500 flex flex-row gap-4 items-center"
          >
            Comenzar
          </button>
        </section>
      </div>
    );
  }

  if (introStep === 1) {
    return (
      <div className="fixed inset-0 pointer-events-none">
        <section
          className={`flex w-full h-full flex-col items-center justify-center
                    duration-500
                    ${currentPage === "home" ? "" : "opacity-0"}`}
        >
          <div className="h-[66%]"></div>
          <input
            type="text"
            aria-label="Nombre del jugador"
            onChange={(e) => {
              setPlayerName(e.target.value);
            }}
            placeholder="Cual es tu nombre?"
            className="pointer-events-auto uppercase py-4 px-8
                    text-black font-black border-orange-400 rounded-full
                    cursor-pointer transition-colors duration-500"
          />
          {playerName.length > 0 && (
            <button
              onClick={() => {
                setIntroStep(2);
              }}
              className="pointer-events-auto uppercase py-4 px-8 bg-orange-400
                    text-white font-black rounded-full hover:bg-orange-600
                    cursor-pointer transition-colors duration-500 my-5"
            >
              Continuar to step 2
            </button>
          )}
        </section>
      </div>
    );
  }

  if (introStep === 2) {
    return (
      <div className="fixed inset-0 pointer-events-none">
        <section
          className={`flex w-full h-full flex-col items-center justify-center
                    duration-500
                    ${currentPage === "home" ? "" : "opacity-0"}`}
        >
          <div className="h-[66%]"></div>

          <section
            className="pointer-events-auto uppercase p-1
                    text-white font-black rounded-xl
                    cursor-pointer transition-colors duration-500 my-5 w-[500px]"
          >
            {/* <CloudinaryUpload /> */}
            <button
              onClick={() => {
                // setCurrentPage("store");
                setIntroStep(3);
              }}
              className="pointer-events-auto uppercase py-4 px-8 bg-orange-400
                    text-white font-black rounded-full hover:bg-orange-600
                    cursor-pointer transition-colors duration-500 my-5"
            >
              Continuar to step 3
            </button>
          </section>
        </section>
      </div>
    );
  }

  if (introStep === 3) {
    return (
      <div className="fixed inset-0 pointer-events-none">
        <section
          className={`flex w-full h-full flex-col items-center justify-center
                    duration-500
                    ${currentPage === "home" ? "" : "opacity-0"}`}
        >
          <div className="h-[66%]"></div>

          <section
            className="pointer-events-auto uppercase p-1
                    text-white font-black rounded-xl
                    cursor-pointer transition-colors duration-500 my-5 w-[500px]"
          >
            {/* <CloudinaryUpload /> */}
            <button
              onClick={() => {
                setEnableControls(true);
                setOpenGameRules(true);
                console.log("open game rules");
                setCurrentPage("store");
              }}
              className="pointer-events-auto uppercase py-4 px-8 bg-orange-400
                    text-white font-black rounded-full hover:bg-orange-600
                    cursor-pointer transition-colors duration-500 my-5"
            >
              current page step 3sss
            </button>
          </section>
        </section>
      </div>
    );
  }
};

const GameStepOne = () => {
  console.log("game step 1");
  const introAudio = new Audio("audio/halloween-intro.mp3");
  introAudio.loop = true;
  introAudio.volume = 0.5;

  return (
    <div className="fixed inset-0 pointer-events-none">
      <section
        className={`flex w-full h-full flex-col items-center justify-center
                  duration-500
                  ${"currentPage" === "home" ? "" : "opacity-0"}`}
      >
        <div className="h-[66%]"></div>
        <button
          onClick={() => {
            introAudio.play();
            setGameStep(2);
            // setIntroStep(1);
          }}
          className="pointer-events-auto uppercase py-4 px-8 bg-orange-400
                  text-white font-black rounded-full hover:bg-orange-600 
                  cursor-pointer transition-colors duration-500 flex flex-row gap-4 items-center"
        >
          Comenzar
        </button>
      </section>
    </div>
  );
};

const GameStepTwo = () => {
  return (
    <div className="fixed inset-0 pointer-events-none">
      <section
        className={`flex w-full h-full flex-col items-center justify-center
                    duration-500
                    ${"currentPage" === "home" ? "" : "opacity-0"}`}
      >
        <div className="h-[66%]"></div>
        <input
          type="text"
          aria-label="Nombre del jugador"
          onChange={(e) => {
            setPlayerName(e.target.value);
          }}
          placeholder="Cual es tu nombre?"
          className="pointer-events-auto uppercase py-4 px-8
                    text-black font-black border-orange-400 rounded-full
                    cursor-pointer transition-colors duration-500"
        />
        {playerName.length > 0 && (
          <button
            onClick={() => {
              setIntroStep(2);
            }}
            className="pointer-events-auto uppercase py-4 px-8 bg-orange-400
                    text-white font-black rounded-full hover:bg-orange-600
                    cursor-pointer transition-colors duration-500 my-5"
          >
            Continuar to step 2
          </button>
        )}
      </section>
    </div>
  );
};

export const GameControls = () => {
  const { enableControls } = useGameContext();

  if (!enableControls) return;

  return (
    <div className="fixed inset-0 pointer-events-none">
      <section
        className={`flex w-full h-full flex-col items-center justify-center
                    duration-500`}
      >
        <div className="h-[66%]"></div>

        <section
          className="pointer-events-auto uppercase p-1
                    text-white font-black rounded-xl
                    cursor-pointer transition-colors duration-500 my-5 w-[500px]
                    flex gap-4 justify-center"
        >
          <OpenGameRulesButton />
          <OpenChestButton />
        </section>
      </section>
    </div>
  );
};

const OpenGameRulesButton = () => {
  const { setOpenGameRules, openGameRules } = useGameContext();
  const chestAudio = new Audio("audio/chest.mp3");
  chestAudio.loop = false;
  chestAudio.volume = 0.5;

  return (
    <button
      onClick={() => {
        setOpenGameRules((prev) => !prev);
        chestAudio.play();
      }}
      className={`pointer-events-auto uppercase py-4 px-8 hover:bg-green-400 ${
        openGameRules ? "bg-green-400 text-white" : "bg-orange-500 text-white"
      }
                    text-white font-black rounded-full
                    cursor-pointer transition-colors duration-500 my-5 flex gap-4`}
    >
      {openGameRules ? "Cerrar" : ""}
      <svg
        width="25"
        height="25"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="#ffffff"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
        <path d="M6 4v4" />
        <path d="M6 12v8" />
        <path d="M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
        <path d="M12 4v10" />
        <path d="M12 18v2" />
        <path d="M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
        <path d="M18 4v1" />
        <path d="M18 9v11" />
      </svg>
    </button>
  );
};

const OpenChestButton = () => {
  const { setOpenChest, openChest } = useGameContext();
  const chestAudio = new Audio("audio/chest.mp3");
  chestAudio.loop = false;
  chestAudio.volume = 0.5;

  return (
    <button
      onClick={() => {
        setOpenChest((prev) => !prev);
        chestAudio.play();
      }}
      className={`pointer-events-auto uppercase py-4 px-8 hover:bg-green-400  ${
        openChest ? "bg-green-400 text-white" : "bg-orange-500 text-white"
      }
                    text-white font-black rounded-full
                    cursor-pointer transition-colors duration-500 my-5 flex gap-4`}
    >
      {openChest ? "Cerrar" : ""}
      <svg
        width="25"
        height="25"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="#ffffff"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M6 21l15 -15l-3 -3l-15 15l3 3" />
        <path d="M15 6l3 3" />
        <path d="M9 3a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2" />
        <path d="M19 13a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2" />
      </svg>
    </button>
  );
};
