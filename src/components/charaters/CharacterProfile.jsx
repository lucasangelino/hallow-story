import { OverlayItem } from "../OverlayItem";

export const CharacterProfile = () => {
  return (
    <OverlayItem
      position-x={-4}
      position-z={-0.5}
      position-y={8.5}
      rotation-y={degToRad(90)}
      title={""}
      description={
        "Detective especialista. Director en DevX en Cloudinary. Esta muy ocupado trabajando, no creo que nos pueda ayudar"
      }
      price={"Elegir"}
      bgColor={"bg-yellow-500"}
      className={"transition delay-1000"}
    />
  );
};
