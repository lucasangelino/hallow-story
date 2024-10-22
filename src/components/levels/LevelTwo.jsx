import { useState } from "react";
import { Html } from "@react-three/drei";
import { currentPageAtom } from "../UI";
import { useGameContext } from "../../hooks/useContext";
import { TypeScriptLogo } from "../../logos";
import { Scenes } from "../scenes";

export const LevelTwo = () => {
  const {
    gameLevel,
    setGameLevel,
    setOpenChest,
    setPlayerBucket,
    setGlobalPoints,
    setCurrentPage,
  } = useGameContext();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [points, setPoints] = useState(0);
  const questions = [
    {
      question:
        "¿Qué herramienta se usa para convertir TypeScript a JavaScript?",
      answers: [
        { text: "Webpack", correct: false },
        { text: "TypeScript Compiler (tsc)", correct: true },
        { text: "Babel", correct: false },
      ],
      points: 100,
    },
    {
      question:
        "¿Qué archivo es necesario para configurar las opciones del compilador de TypeScript?",
      answers: [
        { text: "tsconfig.json", correct: true },
        { text: "package.json", correct: false },
        { text: "webpack.config.js", correct: false },
      ],
      points: 100,
    },
    {
      question:
        "¿Qué herramienta se puede usar junto con TypeScript para transpilar código moderno a versiones anteriores de JavaScript?",
      answers: [
        { text: "Babel", correct: true },
        { text: "Parcel", correct: false },
        { text: "ESLint", correct: false },
      ],
      points: 150,
    },
    {
      question:
        "¿Qué editor de texto es comúnmente usado con soporte completo para TypeScript?",
      answers: [
        { text: "VSCode", correct: true },
        { text: "Sublime Text", correct: false },
        { text: "Atom", correct: false },
      ],
      points: 100,
    },
    {
      question:
        "¿Cuál es el linter más popular utilizado con TypeScript para mantener la calidad del código?",
      answers: [
        { text: "JSLint", correct: false },
        { text: "ESLint", correct: true },
        { text: "Prettier", correct: false },
      ],
      points: 150,
    },
    {
      question:
        "¿Qué herramienta puede formatear automáticamente tu código TypeScript?",
      answers: [
        { text: "Prettier", correct: true },
        { text: "JSLint", correct: false },
        { text: "Terser", correct: false },
      ],
      points: 100,
    },
    {
      question:
        "¿Qué herramienta permite hacer análisis estático de tipos para evitar errores en TypeScript?",
      answers: [
        { text: "TypeScript Compiler (tsc)", correct: true },
        { text: "Webpack", correct: false },
        { text: "Parcel", correct: false },
      ],
      points: 200,
    },
    {
      question:
        "¿Cuál de estas herramientas ayuda a empaquetar aplicaciones TypeScript?",
      answers: [
        { text: "Webpack", correct: true },
        { text: "Gulp", correct: false },
        { text: "Rollup", correct: true },
      ],
      points: 200,
    },
    {
      question:
        "¿Qué herramienta facilita la ejecución de tests en proyectos TypeScript?",
      answers: [
        { text: "Mocha", correct: false },
        { text: "Jest", correct: true },
        { text: "ESLint", correct: false },
      ],
      points: 150,
    },
    {
      question:
        "¿Qué plugin de ESLint permite verificar las reglas específicas de TypeScript?",
      answers: [
        { text: "eslint-plugin-typescript", correct: false },
        { text: "eslint-plugin-tslint", correct: false },
        { text: "eslint-plugin-@typescript-eslint", correct: true },
      ],
      points: 200,
    },
  ];

  const handleAnswer = (correct) => {
    if (correct) {
      setPoints(points + questions[currentQuestion].points);
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  const handleNextLevel = () => {
    setGlobalPoints((prev) => prev + points);
    setPlayerBucket((prev) => ({
      ...prev,
      powers: prev.powers.map((power) => {
        if (power.id === "typescript-power-tools") {
          return { ...power, isBlocked: false };
        }
        return power;
      }),
    }));
    setOpenChest(true);
    setGameLevel(3);
    console.log("Next level");
    setCurrentPage(Scenes.CEMENTERY_TWO);
  };

  if (currentQuestion >= questions.length) {
    return (
      <Html
        transform
        distanceFactor={10}
        position-x={-4}
        position-z={-1}
        position-y={8.5}
        rotation-y={2}
        className={`overflow-hidden ${
          gameLevel === 2 ? "" : "opacity-0"
        } transition-opacity duration-1000`}
      >
        <section className="rounded-md bg-orange-500 p-4">
          <h2 className="text-2xl text-white">
            {points > 1500 ? "Bien hecho!" : "Porias hacerlo mejor!"}
          </h2>
          <h2 className="text-md text-white">{`Has sumado ${points} puntos`}</h2>
          <h3 className="text-md text-white"> y has desbloqueado un poder</h3>
          <button
            onClick={handleNextLevel}
            className="bg-white text-black p-1 my-4 rounded-md hover:bg-gray-200"
          >
            Obtener poder y seguir jugando
          </button>
        </section>
      </Html>
    );
  }

  return (
    <>
      <Html
        transform
        distanceFactor={10}
        position-x={-4}
        position-z={-1}
        position-y={8.5}
        rotation-y={2}
        className={`overflow-hidden ${
          gameLevel === 2 ? "" : "opacity-0"
        } transition-opacity duration-1000`}
      >
        <h2 className="text-2xl text-white my-4">
          Gana y desbloquea encantamientos
        </h2>
        <span className="text-white text-xs bg-orange-500 p-1 px-2 rounded-full">
          TypeScript Tools
        </span>
        <h2 className="text-md text-white text-right">
          {points ? `Has sumado ${points} puntos` : ""}
        </h2>
        <section className="flex flex-col gap-4 rounded-md bg-orange-500 p-4 mt-2">
          <h3 className="text-white text-2xl">
            {questions[currentQuestion].question}
          </h3>
          <section className="flex flex-row gap-4 justify-center">
            <button
              onClick={() =>
                handleAnswer(questions[currentQuestion].answers[0].correct)
              }
              className="flex flex-col gap-4 p-2 hover:bg-orange-600 hover:text-white rounded-md"
            >
              {questions[currentQuestion].answers[0].text}
            </button>
            <button
              onClick={() =>
                handleAnswer(questions[currentQuestion].answers[1].correct)
              }
              className="flex flex-col gap-4 p-2 hover:bg-orange-700 hover:text-white rounded-md"
            >
              {questions[currentQuestion].answers[1].text}
            </button>
            <button
              onClick={() =>
                handleAnswer(questions[currentQuestion].answers[2].correct)
              }
              className="flex flex-col gap-4 p-2 hover:bg-orange-700 hover:text-white rounded-md"
            >
              {questions[currentQuestion].answers[2].text}
            </button>
          </section>
        </section>
      </Html>
    </>
  );
};
