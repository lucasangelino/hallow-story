export const CharacterCard = ({ imgSrc }) => {
  return (
    <a href="#" className="block">
      <img
        alt={`character picture`}
        src={imgSrc}
        className="h-64 w-full object-cover sm:h-80 lg:h-96"
      />

      <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
        Lorem, ipsum dolor.
      </h3>

      <p className="mt-2 max-w-sm text-gray-700">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni
        reiciendis sequi ipsam incidunt.
      </p>
    </a>
  );
};
