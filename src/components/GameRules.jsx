import { useGameContext } from "../hooks/useContext";
import { GameContext } from "./GameContext";

export const GameRules = () => {
  const { openGameRules } = useGameContext();
  return (
    <GameContext isOpen={openGameRules}>
      <h2 className="text-slate-800 font-bold text-3xl text-center">Nota</h2>
      <h3 className="text-slate-800 text-center my-4 font-semibold text-xl">
        Midudev ha sido secuestrado y embrujado!!!!
      </h3>
      <p className="text-slate-800 text-center my-4">
        Los monstruos y brujas de Halloween han secuestrado a Midudev y lo han
        embrujado con poderosos hechizos que lo han hecho{" "}
        <strong>olvidar como programar!</strong>
      </p>
      <p className="text-slate-800 text-center my-4">
        Segun algunos testigos, las ultimas palabras de Midudev fueron: <br />
        <strong>"No se centrar un div"</strong>
        <br />
        <strong>"ECMA Script que?"</strong>
        <br />
        <strong>"Mi framework favorito es Angular"</strong>
      </p>
      <p className="text-slate-800 text-center my-4">
        Imagina por lo que debe estar pasando!!
      </p>
      <p className="text-slate-800 text-center my-4">
        Elige a tu <strong>detective</strong> y consigue superar los retos y
        desafíos para liberar a <strong>Midudev</strong> de este hechizo que lo
        ha convertido en un programador Junior.
      </p>
      <p className="text-slate-800 text-center my-4">
        Te advierto que no será fácil, pero no pierdas las esperanzas.{" "}
        <strong>¡Tú puedes!</strong>
      </p>
    </GameContext>
  );
};
