import { Html } from "@react-three/drei";

export const Trivia = () => {
  const questions = [
    {
      question: "¿Cuál es la capital de Francia?",
      answers: [
        { text: "Madrid", correct: false },
        { text: "París", correct: true },
        { text: "Londres", correct: false },
      ],
      points: 100,
    },
  ];

  return (
    <Html
      transform
      distanceFactor={8}
      center
      className={`w-48 rounded-md overflow-hidden transition-opacity duration-1000`}
    >
      <img src={"imgSrc"} alt={"title"} />
      <div className="bg-white bg-opacity-50 backdrop-blur-lg text-xs p-2 w-full">
        <h2 className="font-bold">{"title"}</h2>
        <p>{"description"}</p>
      </div>
      <button
        disabled={"disable"}
        className={` hover:bg-opacity-50 transition-colors duration-500 px-4 py-2 font-bold text-white w-full text-xs`}
      >
        Resolviendo otro caso
      </button>
    </Html>
  );
};
