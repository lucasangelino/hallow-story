import { useState } from "react";
import { atom, useAtom } from "jotai";
import Dropzone from "dropzone";
import { useGameContext } from "../hooks/useContext";
import { Cloudinary } from '@cloudinary/url-gen'

export const currentPageAtom = atom("intro");
const cloudinaryHexColor = "#3448C5";

const cloudinary = new Cloudinary({
  cloud: {
    cloudName: "lucasangelinodev",
  },
  url: {
    secure: true,
  },
});

export const UI = () => {
  const { introStep, setIntroStep, setPlayerName, playerName } =
    useGameContext();
  const [currentPage, setCurrentPage] = useAtom(currentPageAtom);
  const introAudio = new Audio("audio/halloween-intro.mp3");
  introAudio.loop = true;

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
              Continuar
            </button>
          )}
        </section>
      </div>
    );
  }

  if (introStep === 2) {
    const CLOUD_API =
      "https://api.cloudinary.com/v1_1/lucasangelino/<resource_type>/upload";
    return (
      <div className="fixed inset-0 pointer-events-none">
        <section
          className={`flex w-full h-full flex-col items-center justify-center
                    duration-500
                    ${currentPage === "home" ? "" : "opacity-0"}`}
        >
          <div className="h-[66%]"></div>
          <form
            id="dropzone"
            action="https://api.cloudinary.com/v1_1/lucasangelinodev/image/upload"
            className="aspect-video shadow-xl border-dashed w-full max-w-xl border-2 p-4 rounded-xl
            border-gray-200 flex flex-col gap-4 justify-center h-40
            "
          >
            <button
              id="form_btn"
              class="pointer-events-none text-gray-400 px-6 py-2"
            >
              Select or drop you character picture
            </button>
          </form>

          <button
            onClick={() => {
              setCurrentPage("store");
            }}
            className="pointer-events-auto uppercase py-4 px-8 bg-orange-400
                    text-white font-black rounded-full hover:bg-orange-600 
                    cursor-pointer transition-colors duration-500 my-5"
          >
            Continuar
          </button>
        </section>
      </div>
    );
  }
};
