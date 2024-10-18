import { createContext, useState } from "react";

export const GameContext = createContext();
GameContext.displayName = "GameContext";

export const AppProvider = ({ children }) => {
  const [playerName, setPlayerName] = useState("");
  const [playerPicture, setPlayerPicture] = useState(
    "https://res.cloudinary.com/lucasangelinodev/image/upload/v1729190976/hallow-story/rg9vaso49sags5ed51xs.jpg"
  );
  const [mainCharacterPicture, setMainCharacterPicture] = useState("");
  const [currentPage, setCurrentPage] = useState("intro");
  const [currentAudio, setCurrentAudio] = useState(null);
  const [openChest, setOpenChest] = useState(true);
  const [openGameRules, setOpenGameRules] = useState(false);
  const [introStep, setIntroStep] = useState(0);
  const [enableControls, setEnableControls] = useState(false);
  const [playerBucket, setPlayerBucket] = useState({
    poisons: [],
    powers: [
      {
        id: "typescript-power-story",
        name: "TypeScript Story",
        description: "Conoces la historia de TypeScript.",
        image: "/images/typescript-power-story.avif",
      },
      {
        id: "typescript-power-tools",
        name: "TypeScript Tools",
        description: "Tienes las herramientas de TypeScript correctas.",
        image: "/images/typescript-tools.avif",
      },
      {
        id: "typescript-power-junior",
        name: "TypeScript Junior",
        description: "Escribes TypeScript con la documentacion bajo el brazo.",
        image: "/images/typescript-power-junior.avif",
      },
      {
        id: "typescript-power-semisenior",
        name: "TypeScript SemiSenior",
        description: "La fuerza de TypeScript es fuerte en ti.",
        image: "/images/typescript-power-semisenior.avif",
      },
      {
        id: "typescript-power-senior",
        name: "TypeScript Senior",
        description:
          "Tienes TypeScript en la sangre. Eres un maestro del tipado.",
        image: "/images/typescript-power-senior.avif",
      },
      {
        id: "typscript-power-ultimate",
        name: "TypeScript God",
        description: "Escribes TypeScript con la mente.",
        image: "/images/typescript-power-ultimate.avif",
      },
    ],
  });

  return (
    <GameContext.Provider
      value={{
        playerBucket,
        setPlayerBucket,
        openGameRules,
        setOpenGameRules,
        openChest,
        setOpenChest,
        introStep,
        setIntroStep,
        playerName,
        setPlayerName,
        playerPicture,
        setPlayerPicture,
        mainCharacterPicture,
        setMainCharacterPicture,
        currentPage,
        setCurrentPage,
        currentAudio,
        enableControls,
        setEnableControls,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
