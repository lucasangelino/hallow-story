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
  const [openChest, setOpenChest] = useState(false);
  const [openGameRules, setOpenGameRules] = useState(false);
  const [introStep, setIntroStep] = useState(0);
  const [enableControls, setEnableControls] = useState(false);

  return (
    <GameContext.Provider
      value={{
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
