import { createContext, useState } from "react";

export const AppContext = createContext();
AppContext.displayName = "AppContext";

export const AppProvider = ({ children }) => {
  const [playerName, setPlayerName] = useState("Lucas");
  const [playerPicture, setPlayerPicture] = useState("");
  const [mainCharacterPicture, setMainCharacterPicture] = useState("");
  const [currentPage, setCurrentPage] = useState("intro");
  const [currentAudio, setCurrentAudio] = useState(null);

  return (
    <AppContext.Provider
      value={{
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
    </AppContext.Provider>
  );
};
