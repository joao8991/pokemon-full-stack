import { useNavigate, useParams } from "react-router-dom";
import PokemonDetails from "../components/PokemonDetails/PokemonDetails";

const PokemonDetailsPage = () => {
  let { name } = useParams<{ name: string }>();

  const navigate = useNavigate();

  if (!name) {
    navigate("/");
    name = "";
  }

  return <PokemonDetails name={name} />;
};

export default PokemonDetailsPage;
