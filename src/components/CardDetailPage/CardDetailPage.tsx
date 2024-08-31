import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PokemonCard } from "../../types";
import api from "../../axios";
import {
  PageTitle,
  BattleButton,
  BattleSection,
  BattleWith,
  CardWrapper,
  Container,
  Dropdown,
  VS,
} from "./styles";
import CardDetail from "./components/CardDetail";
import usePokemonCards from "../../hooks/usePokemonCards";
import WinnerModal from "../Modal/WinnerModal";

const CardDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [card, setCard] = useState<PokemonCard | null>(null);
  const [opponentId, setOpponentId] = useState<string>("");
  const [winner, setWinner] = useState<string | null>(null);

  const { pokemonCards, loading, error } = usePokemonCards();

  const handleCloseModal = () => {
    setWinner(null);
  };

  useEffect(() => {
    const fetchPokemonCard = async () => {
      try {
        const result = await api.get(`api/cards/${id}`);
        setCard(result.data);
      } catch (error) {
        console.error("Error fetching cards:", error);
      }
    };
    fetchPokemonCard();
  }, [id]);

  const handleBattle = async () => {
    try {
      const result = await api.post("api/battle", {
        card1Id: id,
        card2Id: opponentId,
      });
      setWinner(result.data.result);
    } catch (error) {
      console.error("Error during battle:", error);
    }
  };

  if (!card || loading) return <div>Loading...</div>;

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <Container>
      <PageTitle>{card.name}</PageTitle>
      <CardWrapper>
        <CardDetail {...card} />
        <VS>VS</VS>
        <BattleSection>
          <BattleWith>Battle with:</BattleWith>
          <Dropdown
            value={opponentId}
            onChange={(e) => setOpponentId(e.target.value)}
          >
            <option value="" disabled>
              Select a Pokémon
            </option>
            {pokemonCards.map((pokemon) => (
              <option key={pokemon.id} value={pokemon.id}>
                {pokemon.name}
              </option>
            ))}
          </Dropdown>
          <BattleButton onClick={handleBattle}>BATTLE!</BattleButton>
          {winner && (
            <WinnerModal winnerText={winner} onClose={handleCloseModal} />
          )}
        </BattleSection>
      </CardWrapper>
    </Container>
  );
};

export default CardDetailPage;
