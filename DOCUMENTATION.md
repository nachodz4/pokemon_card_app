Pokemon Card APP Documentation

1. Assumptions

   - Endpoints follow standard conventions GET for fetching cards, POST to create a card.

   - Each pokemon has all attributes fetched from API even if do not use it so far, but ideally it has to use just neccesary fields to show.

   - The application can load images of Pokémon cards locally. If the image is unavailable, a default placeholder image or a "not found" message is shown.

2. Solution

- Components:

  - Header: A header component with a two search boxes

  - CardList: Displays a grid of Pokémon cards with search options.

  - CardDetailPage: Shows detailed information for a selected Pokemon card and the option to simulate a battle.

  - PokemonCard: card to show data and attributes of pokemon. As enhance, customize this component to be sizeable, and it be able to use in different pages.

  - Modal: A modal component for showing the winner after a battle simulation.

- Routing:

  `React Router` is used for navigation between different views:

  - `/:` Displays all Pokémon cards (CardList component).

  - `/cards/:id:` Displays details for a specific card (CardDetail component).

- Styling:

  - `Styled-components`: Used for styling components. A global stylesheet is defined for base styles. Components like buttons, modals, and cards have specific styles. Also, ideally, it could be possible to add a `ThemeProvider` using a default theme (colors, fonts, etc) across different components on the app.

- API integration:

  - Axios is used to connect with API fetching cards, simulate battle.

  - A custom hook `usePokemonCards` is implemented to fetch and manage the list of Pokemon cards, handling loading states and errors. As improvement, it could use library such as `react-query` to caching data from server.

- Potential improvements

  - Global State Management: Implement a global state management solution like Redux or Context API for better state handling across the app, especially if the app grows in complexity.

  - Memoization: Use `React.memo` and `useMemo` to avoid unnecessary re-renders, especially in lists with many items.

  - Testing: integrate [Vistest](https://vitest.dev/) to test correctly according to library.
