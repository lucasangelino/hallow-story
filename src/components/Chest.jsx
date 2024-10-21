import { useGameContext } from "../hooks/useContext";
import { GameContext } from "./GameContext";

export const Chest = () => {
  const {
    playerBucket,
    setPlayerBucket,
    openChest,
    playerName,
    playerPicture,
  } = useGameContext();
  console.log(playerPicture);
  return (
    <GameContext isOpen={openChest}>
      <section className="p-2 overflow-hidden z-50">
        <h2 className="text-3xl text-center mb-5">Libreta</h2>
        <span className="text-xl text-center">
          Aqui podrás ver informacion del caso. Ver tu equipo, encantamientos y
          posiones adquiridas.
        </span>
        <div className="h-1 w-full bg-blue-400 my-4"></div>
        <h3 className="text-xl mb-4">Detectives del caso</h3>
        <section className="flex flex-row gap-4 justify-between items-center mb-10">
          <div className="object-cover rounded-md h-32">
            <img
              src={playerPicture}
              alt=""
              className="object-cover rounded-md h-32"
            />
            <span className="text-md font-bold">{playerName}</span>
          </div>
          <div className="object-cover rounded-md h-32">
            <img
              src={playerPicture}
              alt=""
              className="object-cover rounded-md h-32"
            />
            <span className="text-md font-bold">{playerName}</span>
          </div>
        </section>
        <h3 className="text-xl">Poderes</h3>
        <section className="grid grid-cols-2 gap-2 mb-10">
          {playerBucket.powers.map((power, index) => {
            return (
              <div key={index} className="rounded-lg cursor-pointer">
                <img
                  className="w-40 h-40"
                  src={power.image}
                  alt={power.description}
                />
                <p className="text-center">{power.name}</p>
              </div>
            );
          })}
        </section>
        <h3 className="text-xl">Posiones</h3>
        <section className="grid grid-cols-2 gap-2">
          {playerBucket.powers.map((power, index) => {
            return (
              <div key={index} className="rounded-lg cursor-pointer">
                <img
                  className="w-40 h-40"
                  src={power.image}
                  alt={power.description}
                />
                <p className="text-center">{power.name}</p>
              </div>
            );
          })}
        </section>
      </section>
    </GameContext>
  );
};
