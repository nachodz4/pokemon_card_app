import { useState } from "react";
import {
  CardInfo,
  Image,
  Detail,
  Title,
  ContainerTitle,
  HP,
  DefaultImage,
} from "./styles";

type PokemonCardProps = {
  name: string;
  hp: number;
  type: string;
  expansion: string;
  rarity: string;
};

const CardDetail: React.FC<PokemonCardProps> = ({
  name,
  hp,
  type,
  expansion,
  rarity,
}) => {
  const [errorImg, setErrorImg] = useState<boolean>(false);

  return (
    <CardInfo>
      <ContainerTitle>
        <Title>{name}</Title>
        <HP>{hp} HP</HP>
      </ContainerTitle>
      {errorImg ? (
        <DefaultImage />
      ) : (
        <Image
          src={`/images/${name.toLocaleLowerCase()}.png`}
          alt={`${name.toLocaleLowerCase()}`}
          onError={() => setErrorImg(true)}
        />
      )}
      <Detail>Type: {type}</Detail>
      <Detail>Expansion: {expansion}</Detail>
      <Detail>Rarity: {rarity}</Detail>
    </CardInfo>
  );
};

export default CardDetail;
