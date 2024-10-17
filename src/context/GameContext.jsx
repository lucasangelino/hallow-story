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
  const [introStep, setIntroStep] = useState(0);

  return (
    <GameContext.Provider
      value={{
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
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
