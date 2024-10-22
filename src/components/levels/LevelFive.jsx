import { useState } from "react";
import { Html } from "@react-three/drei";
import { currentPageAtom } from "../UI";
import { useGameContext } from "../../hooks/useContext";
import { TypeScriptLogo } from "../../logos";

export const LevelFive = () => {
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
      question: "¿Qué hace el tipo `ReturnType<T>` en TypeScript?",
      answers: [
        { text: "Extrae el tipo de retorno de una función", correct: true },
        {
          text: "Convierte una función en una función genérica",
          correct: false,
        },
        { text: "Restringe el tipo de retorno a `void`", correct: false },
      ],
      points: 250,
    },
    {
      question:
        "¿Cómo se comporta el `Conditional Type` `T extends U ? X : Y` en TypeScript?",
      answers: [
        {
          text: "Retorna `X` si `T` extiende de `U`, de lo contrario retorna `Y`",
          correct: true,
        },
        { text: "Retorna `T` si `U` es una clase base", correct: false },
        {
          text: "Siempre retorna `Y` cuando `T` no extiende `U`",
          correct: false,
        },
      ],
      points: 300,
    },
    {
      question:
        "¿Qué significa el modificador `infer` dentro de un tipo condicional en TypeScript?",
      answers: [
        {
          text: "Permite inferir un tipo dentro de una cláusula condicional",
          correct: true,
        },
        { text: "Define un tipo que no puede ser instanciado", correct: false },
        { text: "Especifica un tipo dentro de un genérico", correct: false },
      ],
      points: 300,
    },
    {
      question:
        "¿Qué es el 'Discriminated Union' en TypeScript y para qué se utiliza?",
      answers: [
        {
          text: "Es una técnica para manejar uniones de tipos que comparten una propiedad común para diferenciarlos",
          correct: true,
        },
        {
          text: "Es un tipo que permite usar múltiples tipos a la vez sin conflicto",
          correct: false,
        },
        {
          text: "Es un patrón que fuerza a los tipos a ser mutuamente excluyentes",
          correct: false,
        },
      ],
      points: 300,
    },
    {
      question: "¿Qué es el tipo `never` y cuándo se usa en TypeScript?",
      answers: [
        {
          text: "Indica que una función nunca retorna un valor",
          correct: true,
        },
        { text: "Es un tipo que nunca puede ser instanciado", correct: false },
        {
          text: "Se usa para declarar propiedades no inicializadas",
          correct: false,
        },
      ],
      points: 250,
    },
    {
      question:
        "¿Cuál es la diferencia entre `interface` y `type` en TypeScript?",
      answers: [
        {
          text: "`interface` soporta herencia múltiple, mientras que `type` permite composiciones complejas",
          correct: true,
        },
        {
          text: "`type` es más rápido en tiempo de ejecución que `interface`",
          correct: false,
        },
        {
          text: "`interface` solo puede combinar tipos primitivos",
          correct: false,
        },
      ],
      points: 250,
    },
    {
      question:
        "¿Qué característica avanzada permite `Mapped Types` en TypeScript?",
      answers: [
        {
          text: "Transformar todas las propiedades de un tipo existente aplicando modificaciones como `readonly` o `optional`",
          correct: true,
        },
        {
          text: "Permitir la iteración dinámica de tipos en tiempo de ejecución",
          correct: false,
        },
        { text: "Convertir un tipo de objeto en una clase", correct: false },
      ],
      points: 300,
    },
    {
      question:
        "¿Cómo define TypeScript los `Branded Types` y para qué se utilizan?",
      answers: [
        {
          text: "Son tipos únicos utilizados para garantizar una mayor seguridad en el tipado en situaciones ambiguas",
          correct: true,
        },
        {
          text: "Son tipos que extienden de tipos nativos como `string` o `number`",
          correct: false,
        },
        {
          text: "Son tipos exclusivos que permiten sobreescribir propiedades de otros tipos",
          correct: false,
        },
      ],
      points: 350,
    },
    {
      question: "¿Cómo funciona la sobrecarga de funciones en TypeScript?",
      answers: [
        {
          text: "Permite definir múltiples firmas para una misma función que admiten diferentes tipos y retornos",
          correct: true,
        },
        {
          text: "Permite que una función tenga múltiples tipos de retorno simultáneamente",
          correct: false,
        },
        {
          text: "Restringe las funciones para que solo acepten un tipo específico",
          correct: false,
        },
      ],
      points: 300,
    },
    {
      question: "¿Qué es un `Key Remapping` en `Mapped Types`?",
      answers: [
        {
          text: "Es la capacidad de cambiar las claves de un tipo mientras se mapean sus propiedades",
          correct: true,
        },
        {
          text: "Es una técnica para reasignar los valores de un objeto en tiempo de ejecución",
          correct: false,
        },
        {
          text: "Es la función que permite convertir un tipo de objeto en un tipo de array",
          correct: false,
        },
      ],
      points: 350,
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
        if (power.id === "typescript-power-senior") {
          return { ...power, isBlocked: false };
        }
        return power;
      }),
    }));
    setOpenChest(true);
    setGameLevel(6);
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
          gameLevel === 5 ? "" : "opacity-0"
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
          gameLevel === 5 ? "" : "opacity-0"
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
