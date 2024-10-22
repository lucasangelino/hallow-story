import { useState } from "react";
import { Html } from "@react-three/drei";
import { currentPageAtom } from "../UI";
import { useGameContext } from "../../hooks/useContext";
import { TypeScriptLogo } from "../../logos";

export const LevelSix = () => {
  const {
    gameLevel,
    setGameLevel,
    setOpenChest,
    setPlayerBucket,
    setGlobalPoints,
    setIsMidudevSafe,
  } = useGameContext();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [points, setPoints] = useState(0);
  const questions = [
    {
      question: "¿Qué es un tipo recursivo en TypeScript?",
      answers: [
        { text: "Un tipo que se refiere a sí mismo", correct: true },
        {
          text: "Un tipo que se calcula en tiempo de ejecución",
          correct: false,
        },
        { text: "Un tipo que itera sobre objetos", correct: false },
      ],
      points: 500,
    },
    {
      question: "¿Cuál es el propósito de `as const`?",
      answers: [
        {
          text: "Convierte una estructura en valores de solo lectura",
          correct: true,
        },
        { text: "Cambia el tipo a `any`", correct: false },
        { text: "Asigna un valor por defecto a un tipo", correct: false },
      ],
      points: 500,
    },
    {
      question: "¿Cómo se usa `infer` en un tipo condicional?",
      answers: [
        {
          text: "Permite capturar un tipo dentro de una expresión",
          correct: true,
        },
        { text: "Define una propiedad inferida", correct: false },
        { text: "Restringe el tipo a primitivos", correct: false },
      ],
      points: 500,
    },
    {
      question: "¿Qué es un `Discriminated Union`?",
      answers: [
        { text: "Una unión de tipos con una propiedad común", correct: true },
        { text: "Una unión de tipos exclusivos", correct: false },
        { text: "Una combinación de tipos `unknown` y `any`", correct: false },
      ],
      points: 500,
    },
    {
      question: "¿Para qué se usa `Exhaustiveness Checking` en TypeScript?",
      answers: [
        {
          text: "Garantiza que todas las ramas de una unión estén cubiertas",
          correct: true,
        },
        { text: "Restringe el uso de `any`", correct: false },
        { text: "Asegura que el código compile sin errores", correct: false },
      ],
      points: 500,
    },
    {
      question: "¿Qué es un `branded type`?",
      answers: [
        {
          text: "Un tipo con una etiqueta única para diferenciación",
          correct: true,
        },
        { text: "Un tipo basado en clases abstractas", correct: false },
        { text: "Un tipo que combina objetos y arrays", correct: false },
      ],
      points: 500,
    },
    {
      question: "¿Qué permite hacer `Template Literal Types`?",
      answers: [
        {
          text: "Construir tipos dinámicamente usando literales",
          correct: true,
        },
        { text: "Generar arrays de tipos", correct: false },
        { text: "Reutilizar tipos en funciones", correct: false },
      ],
      points: 500,
    },
    {
      question: "¿Cómo funciona `Key Remapping` en tipos mapeados?",
      answers: [
        { text: "Permite cambiar las claves al mapear un tipo", correct: true },
        { text: "Itera sobre claves y valores", correct: false },
        { text: "Convierte claves en literales", correct: false },
      ],
      points: 500,
    },
    {
      question: "¿Qué es un `Utility Type` en TypeScript?",
      answers: [
        {
          text: "Un tipo predefinido para manipular tipos existentes",
          correct: true,
        },
        { text: "Un tipo definido por el usuario", correct: false },
        { text: "Un tipo que solo acepta primitivos", correct: false },
      ],
      points: 500,
    },
    {
      question: "¿Qué significa `readonly` en parámetros de una función?",
      answers: [
        {
          text: "Impide modificar la referencia dentro de la función",
          correct: true,
        },
        { text: "Bloquea el paso de objetos", correct: false },
        { text: "Convierte el parámetro en un tipo primitivo", correct: false },
      ],
      points: 500,
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
        if (power.id === "typescript-power-ultimate") {
          return { ...power, isBlocked: false };
        }
        return power;
      }),
    }));
    setOpenChest(true);
    setIsMidudevSafe(true);
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
          gameLevel === 6 ? "" : "opacity-0"
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
          gameLevel === 6 ? "" : "opacity-0"
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
