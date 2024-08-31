import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, GridWrapper, Header, SearchBar, Title } from "./styles";
import Card from "../PokemonCard/Card";
import usePokemonCards from "../../hooks/usePokemonCards";

const TITLE_APP = "Pokemon App";

const CardsList: React.FC = () => {
  const [nameFilter, setNameFilter] = useState("");
  const [expansionFilter, setExpansionFilter] = useState("");
  const { pokemonCards, loading, error } = usePokemonCards();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const filteredCards = pokemonCards.filter(
    (card) =>
      card.name.toLowerCase().includes(nameFilter.toLowerCase()) &&
      card.expansion.toLowerCase().includes(expansionFilter.toLowerCase())
  );

  return (
    <Container>
      <Header>
        <Title>{TITLE_APP}</Title>
        <div>
          <SearchBar
            type="text"
            placeholder="Search by Name"
            value={nameFilter}
            onChange={(e) => setNameFilter(e.target.value)}
          />
          <SearchBar
            type="text"
            placeholder="Search Expansion"
            value={expansionFilter}
            onChange={(e) => setExpansionFilter(e.target.value)}
          />
        </div>
      </Header>
      <GridWrapper>
        {filteredCards.map((card) => (
          <Link key={card.id} to={`/cards/${card.id}`}>
            <Card {...card} />
          </Link>
        ))}
      </GridWrapper>
    </Container>
  );
};

export default CardsList;
