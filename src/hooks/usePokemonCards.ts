import { useState, useEffect } from "react";
import api from "../axios";
import { PokemonCard } from "../types";

const usePokemonCards = () => {
  const [pokemonCards, setPokemonCards] = useState<PokemonCard[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPokemonCards = async () => {
      try {
        setLoading(true);
        const response = await api.get("/api/cards");
        setPokemonCards(response.data);
      } catch (err) {
        console.error(err);
        setError("Error fetching Pokemon cards");
      } finally {
        setLoading(false);
      }
    };

    fetchPokemonCards();
  }, []);

  return { pokemonCards, loading, error };
};

export default usePokemonCards;
