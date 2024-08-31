import { Wrapper, Image, Detail, Title, ContainerTitle, HP } from "./styles";

type PokemonCardProps = {
  name: string;
  hp: number;
  type: string;
  expansion: string;
  rarity: string;
};

const Card: React.FC<PokemonCardProps> = ({
  name,
  hp,
  type,
  expansion,
  rarity,
}) => {
  return (
    <Wrapper>
      <ContainerTitle>
        <Title>{name}</Title>
        <HP>{hp} HP</HP>
      </ContainerTitle>
      <Image />
      <Detail>Type: {type}</Detail>
      <Detail>Expansion: {expansion}</Detail>
      <Detail>Rarity: {rarity}</Detail>
    </Wrapper>
  );
};

export default Card;
