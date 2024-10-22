import { useState } from "react";
import { Html } from "@react-three/drei";
import { currentPageAtom } from "../UI";
import { useGameContext } from "../../hooks/useContext";
import { TypeScriptLogo } from "../../logos";

export const LevelThree = () => {
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
      question: "¿Qué es TypeScript?",
      answers: [
        { text: "Un lenguaje de programación", correct: true },
        { text: "Un navegador web", correct: false },
        { text: "Un sistema operativo", correct: false },
      ],
      points: 100,
    },
    {
      question: "¿TypeScript es un superconjunto de qué lenguaje?",
      answers: [
        { text: "JavaScript", correct: true },
        { text: "Java", correct: false },
        { text: "Python", correct: false },
      ],
      points: 100,
    },
    {
      question: "¿Qué tipo de datos es `string` en TypeScript?",
      answers: [
        { text: "Un número", correct: false },
        { text: "Una cadena de texto", correct: true },
        { text: "Un booleano", correct: false },
      ],
      points: 100,
    },
    {
      question: "¿Cómo se declara una variable en TypeScript?",
      answers: [
        { text: "let variableName: tipo", correct: true },
        { text: "variableName: tipo", correct: false },
        { text: "var variableName", correct: false },
      ],
      points: 100,
    },
    {
      question: "¿TypeScript permite tipado estático?",
      answers: [
        { text: "Sí", correct: true },
        { text: "No", correct: false },
      ],
      points: 100,
    },
    {
      question:
        "¿Qué tipo de dato devuelve la función `Math.random()` en TypeScript?",
      answers: [
        { text: "string", correct: false },
        { text: "boolean", correct: false },
        { text: "number", correct: true },
      ],
      points: 100,
    },
    {
      question: "¿Cómo se define un array de números en TypeScript?",
      answers: [
        { text: "let numbers: number[]", correct: true },
        { text: "let numbers: string[]", correct: false },
        { text: "let numbers = []", correct: false },
      ],
      points: 100,
    },
    {
      question:
        "¿Cuál es la palabra clave para definir un tipo personalizado en TypeScript?",
      answers: [
        { text: "interface", correct: false },
        { text: "type", correct: true },
        { text: "class", correct: false },
      ],
      points: 100,
    },
    {
      question: "¿Qué significa `readonly` en TypeScript?",
      answers: [
        { text: "Una propiedad que no puede ser modificada", correct: true },
        { text: "Un método privado", correct: false },
        { text: "Una constante global", correct: false },
      ],
      points: 100,
    },
    {
      question:
        "¿Qué operador se utiliza para definir un valor opcional en TypeScript?",
      answers: [
        { text: "?", correct: true },
        { text: ":", correct: false },
        { text: "!", correct: false },
      ],
      points: 100,
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
        if (power.id === "typescript-power-junior") {
          return { ...power, isBlocked: false };
        }
        return power;
      }),
    }));
    setOpenChest(true);
    setGameLevel(4);
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
          gameLevel === 3 ? "" : "opacity-0"
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
          gameLevel === 3 ? "" : "opacity-0"
        } transition-opacity duration-1000`}
      >
        <h2 className="text-2xl text-white my-4">
          Gana y desbloquea encantamientos
        </h2>
        <span className="text-white text-xs bg-orange-500 p-1 px-2 rounded-full">
          TypeScript Junior
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
