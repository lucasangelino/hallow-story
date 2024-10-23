import { createContext, useState } from "react";

export const GameContext = createContext();
GameContext.displayName = "GameContext";

export const AppProvider = ({ children }) => {
  const [playerName, setPlayerName] = useState("");
  const [playerPicture, setPlayerPicture] = useState(
    "https://res.cloudinary.com/lucasangelinodev/image/upload/v1729612008/hackaton/gogi2su4aqyklxkyej0o.avif"
  );
  const [mainCharacterPicture, setMainCharacterPicture] = useState("");
  const [currentPage, setCurrentPage] = useState("INTRO");
  const [currentAudio, setCurrentAudio] = useState(null);
  const [openChest, setOpenChest] = useState(false);
  const [openGameRules, setOpenGameRules] = useState(false);
  const [introStep, setIntroStep] = useState(0);
  const [enableControls, setEnableControls] = useState(false);
  const [gameLevel, setGameLevel] = useState(0);
  const [globalPoints, setGlobalPoints] = useState(0);
  const [isMidudevSafe, setIsMidudevSafe] = useState(false);
  const [playerBucket, setPlayerBucket] = useState({
    poisons: [],
    powers: [
      {
        id: "typescript-power-story",
        name: "TypeScript Story",
        description: "Conoces la historia de TypeScript.",
        image: "/images/typescript-power-story.avif",
        isBlocked: true,
      },
      {
        id: "typescript-power-tools",
        name: "TypeScript Tools",
        description: "Tienes las herramientas de TypeScript correctas.",
        image: "/images/typescript-tools.avif",
        isBlocked: true,
      },
      {
        id: "typescript-power-junior",
        name: "TypeScript Junior",
        description: "Escribes TypeScript con la documentacion bajo el brazo.",
        image: "/images/typescript-power-junior.avif",
        isBlocked: true,
      },
      {
        id: "typescript-power-semisenior",
        name: "TypeScript SemiSenior",
        description: "La fuerza de TypeScript es fuerte en ti.",
        image: "/images/typescript-power-semisenior.avif",
        isBlocked: true,
      },
      {
        id: "typescript-power-senior",
        name: "TypeScript Senior",
        description:
          "Tienes TypeScript en la sangre. Eres un maestro del tipado.",
        image: "/images/typescript-power-senior.avif",
        isBlocked: true,
      },
      {
        id: "typscript-power-ultimate",
        name: "TypeScript God",
        description: "Escribes TypeScript con la mente.",
        image: "/images/typescript-power-ultimate.avif",
        isBlocked: true,
      },
    ],
  });

  return (
    <GameContext.Provider
      value={{
        isMidudevSafe,
        setIsMidudevSafe,
        globalPoints,
        setGlobalPoints,
        gameLevel,
        setGameLevel,
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
