import { render, screen } from "@testing-library/react";
import Card from "./Card";

describe("PokemonCardComponent", () => {
  it("should render the pokemon card with correct details", () => {
    render(
      <Card
        name="Pikachu"
        hp={42}
        type="Electric"
        expansion="Basic Set"
        rarity="Common"
      />
    );

    screen.getByText("Pikachu");
    screen.getByText("Type: Electric");
    screen.getByText("HP: 42");
    screen.getByText("Expansion: Basic Set");
    screen.getByText("Rarity: Common");
  });
});
