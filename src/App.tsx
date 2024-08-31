import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CardDetailPage from "./components/CardDetailPage/CardDetailPage";
import CardsList from "./components/CardList/CardsList";
import GlobalStyles from "./globalStyles";

const App: React.FC = () => {
  return (
    <Router>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<CardsList />} />
        <Route path="/cards/:id" element={<CardDetailPage />} />
      </Routes>
    </Router>
  );
};

export default App;
