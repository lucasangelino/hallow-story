import { useGameContext } from "../hooks/useContext";
import { GameContext } from "./GameContext";

export const Chest = () => {
  const { playerBucket, setPlayerBucket, openChest } = useGameContext();
  return (
    <GameContext isOpen={openChest}>
      <section>
        <h2 className="text-3xl text-center mb-5">Equipamiento</h2>
        <span className="text-xl text-center">
          Aqui encontraras la lista de elementos que te permitiran cumplir los
          objetivos
        </span>
        <div className="h-1 w-full bg-slate-400 my-4"></div>
        <section className="grid grid-cols-5">
          {playerBucket.poisons.map((poison, index) => (
            <section
              key={index}
              className="bg-slate-300 p-4 m-4 text-center rounded-lg"
            >
              <h3 className="text-xl">{poison.name}</h3>
              <p>{poison.description}</p>
            </section>
          ))}
        </section>
      </section>
    </GameContext>
  );
};
