import { atom, useAtom } from "jotai";

export const currentPageAtom = atom("intro");

export const UI = () => {
  const [currentPage, setCurrentPage] = useAtom(currentPageAtom);
  const introAudio = new Audio("audio/halloween-intro.mp3");
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
            setCurrentPage("store");
          }}
          className="pointer-events-auto py-4 px-8 bg-orange-400 text-white font-black rounded-full hover:bg-orange-600 cursor-pointer transition-colors duration-500"
        >
          ENTER
        </button>
      </section>
    </div>
  );
};

const LoadPhoto = () => {
  return (
    <section>
      <label>Upload a photo</label>
      <input type="file" />
    </section>
  );
};
