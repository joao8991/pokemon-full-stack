import { Route, Routes } from "react-router-dom";
import { PageLayout } from "./design/common";
import MainPage from "./pages/MainPage";
import PokemonDetailsPage from "./pages/PokemonDetailsPage";

const App = () => {
  return (
    <PageLayout>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/pokemon/:name" element={<PokemonDetailsPage />} />
      </Routes>
    </PageLayout>
  );
};

export default App;
