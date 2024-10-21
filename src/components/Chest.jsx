import { useGameContext } from "../hooks/useContext";
import { GameContext } from "./GameContext";

export const Chest = () => {
  const { playerBucket, setPlayerBucket, openChest } = useGameContext();
  return (
    <GameContext isOpen={openChest}>
      <section className="p-2 overflow-hidden">
        <h2 className="text-3xl text-center mb-5">Equipo & Libreta</h2>
        <span className="text-xl text-center">Aqui</span>
        <div className="h-1 w-full bg-blue-400 my-4"></div>
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
