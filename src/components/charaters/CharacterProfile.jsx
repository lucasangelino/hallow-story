import { OverlayItem } from "../OverlayItem";
import { degToRad } from "three/src/math/MathUtils";

export const CharacterProfile = ({
  title,
  description,
  onClick,
  imgSrc,
  ...props
}) => {
  // const useEffect(() => {

  // }, [imgSrc])

  return (
    <OverlayItem
      position-x={-4}
      position-z={-0.5}
      position-y={8.5}
      rotation-y={degToRad(90)}
      title={title}
      imgSrc={imgSrc}
      description={description}
      onChooseCharacter={onClick}
      bgColor={"bg-yellow-500"}
      className={"transition delay-1000"}
      {...props}
    />
  );
};
