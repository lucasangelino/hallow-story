import { useState } from "react";
import { Html } from "@react-three/drei";
import { currentPageAtom } from "../UI";
import { useGameContext } from "../../hooks/useContext";
import { TypeScriptLogo } from "../../logos";

export const LevelOne = () => {
  const {
    gameLevel,
    setGameLevel,
    setOpenChest,
    setPlayerBucket,
    setGlobalPoints,
  } = useGameContext();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [points, setPoints] = useState(0);
  const questions = [
    {
      question:
        "¿En qué año se lanzó la primera versión pública de TypeScript?",
      answers: [
        { text: "2011", correct: false },
        { text: "2012", correct: true },
        { text: "2013", correct: false },
      ],
      points: 100,
    },
    {
      question:
        "¿Cuál fue la versión inicial de TypeScript lanzada públicamente?",
      answers: [
        { text: "0.8", correct: true },
        { text: "1.0", correct: false },
        { text: "2.0", correct: false },
      ],
      points: 200,
    },
    {
      question:
        "¿Quién fue el principal arquitecto detrás de la creación de TypeScript?",
      answers: [
        { text: "Anders Hejlsberg", correct: true },
        { text: "Brendan Eich", correct: false },
        { text: "Guido van Rossum", correct: false },
      ],
      points: 150,
    },
    {
      question:
        "¿En qué conferencia fue presentado oficialmente TypeScript al público?",
      answers: [
        { text: "Microsoft Build 2012", correct: false },
        { text: "JSConf 2012", correct: false },
        { text: "TechEd 2012", correct: true },
      ],
      points: 250,
    },
    {
      question:
        "¿Cuál fue la principal razón para la creación de TypeScript según Microsoft?",
      answers: [
        {
          text: "Superar las limitaciones de JavaScript para grandes aplicaciones",
          correct: true,
        },
        {
          text: "Mejorar la velocidad de ejecución de JavaScript",
          correct: false,
        },
        { text: "Simplificar la programación funcional", correct: false },
      ],
      points: 150,
    },
    {
      question:
        "¿En qué versión de TypeScript se introdujo el soporte para JSX?",
      answers: [
        { text: "1.6", correct: true },
        { text: "2.0", correct: false },
        { text: "1.3", correct: false },
      ],
      points: 200,
    },
    {
      question:
        "¿Qué característica importante se introdujo en TypeScript 2.0?",
      answers: [
        {
          text: "Control de null y undefined (Strict Null Checks)",
          correct: true,
        },
        { text: "Decorators", correct: false },
        { text: "Tipado de 'Unknown'", correct: false },
      ],
      points: 250,
    },
    {
      question:
        "¿Qué framework popular influyó en el crecimiento de TypeScript al adoptarlo en su núcleo?",
      answers: [
        { text: "React", correct: false },
        { text: "Angular", correct: true },
        { text: "Vue", correct: false },
      ],
      points: 200,
    },
    {
      question:
        "¿En qué versión de TypeScript se añadió soporte para async/await?",
      answers: [
        { text: "1.7", correct: true },
        { text: "2.1", correct: false },
        { text: "2.4", correct: false },
      ],
      points: 200,
    },
    {
      question:
        "¿Qué versión de TypeScript introdujo el soporte para el tipo 'Unknown'?",
      answers: [
        { text: "3.0", correct: true },
        { text: "2.8", correct: false },
        { text: "2.5", correct: false },
      ],
      points: 300,
    },
  ];

  const handleAnswer = (correct) => {
    if (correct) {
      setPoints(points + questions[currentQuestion].points);
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  const handleNextLevel = () => {
    setGlobalPoints(points);
    setPlayerBucket((prev) => ({
      ...prev,
      powers: prev.powers.map((power) => {
        if (power.id === "typescript-power-story") {
          return { ...power, isBlocked: false };
        }
        return power;
      }),
    }));
    setOpenChest(true);
    setGameLevel(2);
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
          gameLevel === 1 ? "" : "opacity-0"
        } transition-opacity duration-1000`}
      >
        <section className="rounded-md bg-orange-500 p-4">
          <h2 className="text-2xl text-white">
            {points > 300 ? "Bien hecho!" : "Porias hacerlo mejor!"}
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
          gameLevel === 1 ? "" : "opacity-0"
        } transition-opacity duration-1000`}
      >
        <h2 className="text-2xl text-white my-4">
          Gana y desbloquea encantamientos
        </h2>
        <h2 className="text-md text-white">
          {points ? `Has sumado ${points} puntos` : ""}
        </h2>
        <section className="flex flex-col gap-4 rounded-md bg-orange-500 p-4">
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
