import { useGameContext } from "../hooks/useContext";
import { GameContext } from "./GameContext";

export const Chest = () => {
  const { openChest } = useGameContext();
  const playerPoisons = [
    {
      id: "poison-js",
      name: "Poisson super JavaScript",
      description: "Permite escribir codido Js mas rapido",
      image:
        "https://res.cloudinary.com/dkcbxnhg0/image/upload/v1633940876/health_potion",
    },
  ];
  return (
    <GameContext isOpen={openChest}>
      <section>
        {[] === 0 ? (
          <h2>Parece que aun no tiene posiones dev</h2>
        ) : (
          <h2>Tienes {"poissons.lenght"} posiones</h2>
        )}
        <section className="grid ">
          {playerPoisons.map((poison) => (
            <article key={poison.id} className="flex flex-col gap-2">
              <span className="rounded-full bg-orange-500 p-1 inline-block">
                <svg
                  class="inline-block"
                  width="35"
                  height="35"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#000000"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M9 3l6 0" />
                  <path d="M10 9l4 0" />
                  <path d="M10 3v6l-4 11a.7 .7 0 0 0 .5 1h11a.7 .7 0 0 0 .5 -1l-4 -11v-6" />
                </svg>
              </span>
              <h3>{poison.name}</h3>
              <p>{poison.description}</p>
            </article>
          ))}
        </section>
      </section>
    </GameContext>
  );
};
