import { useState } from "react";
import { Html } from "@react-three/drei";
import { currentPageAtom } from "../UI";
import { useGameContext } from "../../hooks/useContext";
import { TypeScriptLogo } from "../../logos";

export const LevelFour = () => {
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
        "¿Qué tipo se usa para representar un valor que puede ser de cualquier tipo en TypeScript?",
      answers: [
        { text: "any", correct: true },
        { text: "unknown", correct: false },
        { text: "void", correct: false },
      ],
      points: 150,
    },
    {
      question:
        "¿Cuál es la diferencia principal entre `unknown` y `any` en TypeScript?",
      answers: [
        {
          text: "`unknown` requiere comprobaciones antes de usarse",
          correct: true,
        },
        {
          text: "`any` permite comprobaciones de tipo más estrictas",
          correct: false,
        },
        { text: "`unknown` es equivalente a `null`", correct: false },
      ],
      points: 200,
    },
    {
      question:
        "¿Qué palabra clave se usa para especificar que un tipo o propiedad no puede cambiar después de su declaración?",
      answers: [
        { text: "const", correct: false },
        { text: "readonly", correct: true },
        { text: "static", correct: false },
      ],
      points: 150,
    },
    {
      question: "¿Qué es un 'Intersection Type' en TypeScript?",
      answers: [
        {
          text: "Un tipo que combina múltiples tipos usando `&`",
          correct: true,
        },
        {
          text: "Un tipo que combina múltiples tipos usando `|`",
          correct: false,
        },
        {
          text: "Un tipo que representa una lista de tipos compatibles",
          correct: false,
        },
      ],
      points: 200,
    },
    {
      question: "¿Qué significa `Partial<T>` en TypeScript?",
      answers: [
        {
          text: "Hace que todas las propiedades de un tipo sean opcionales",
          correct: true,
        },
        {
          text: "Hace que todas las propiedades de un tipo sean requeridas",
          correct: false,
        },
        {
          text: "Convierte todas las propiedades en `readonly`",
          correct: false,
        },
      ],
      points: 200,
    },
    {
      question: "¿Cómo se define un tipo genérico en TypeScript?",
      answers: [
        { text: "function <T>(arg: T): T", correct: true },
        { text: "function generic<T>(arg: T): any", correct: false },
        { text: "let T = type", correct: false },
      ],
      points: 150,
    },
    {
      question:
        "¿Qué utilidad tiene la palabra clave `abstract` en TypeScript?",
      answers: [
        {
          text: "Define una clase o método que no puede ser instanciado directamente",
          correct: true,
        },
        {
          text: "Define una clase que puede ser instanciada sin métodos concretos",
          correct: false,
        },
        { text: "Hace que las propiedades sean inmutables", correct: false },
      ],
      points: 150,
    },
    {
      question:
        "¿Qué hace el operador `!` cuando se usa al final de una expresión en TypeScript?",
      answers: [
        {
          text: "Indica que el valor no es `null` ni `undefined`",
          correct: true,
        },
        { text: "Forza a que el valor sea `null`", correct: false },
        { text: "Evita la ejecución de un bloque de código", correct: false },
      ],
      points: 150,
    },
    {
      question:
        "¿Cómo se puede combinar varios tipos en una sola variable en TypeScript?",
      answers: [
        { text: "Usando el operador `|` (Union Types)", correct: true },
        { text: "Usando el operador `&` (Intersection Types)", correct: false },
        { text: "Usando `extends`", correct: false },
      ],
      points: 150,
    },
    {
      question: "¿Qué permite hacer el tipo `Mapped Type` en TypeScript?",
      answers: [
        {
          text: "Permite crear nuevos tipos basados en la transformación de propiedades de otro tipo",
          correct: true,
        },
        { text: "Permite iterar sobre un array de tipos", correct: false },
        {
          text: "Permite realizar operaciones matemáticas sobre tipos",
          correct: false,
        },
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
    setGlobalPoints(points);
    setPlayerBucket((prev) => ({
      ...prev,
      powers: prev.powers.map((power) => {
        if (power.id === "typescript-power-semisenior") {
          return { ...power, isBlocked: false };
        }
        return power;
      }),
    }));
    setOpenChest(true);
    setGameLevel(5);
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
          gameLevel === 4 ? "" : "opacity-0"
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
          gameLevel === 4 ? "" : "opacity-0"
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
