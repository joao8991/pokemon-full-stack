import { Link } from "react-router-dom";
import { Button } from "../../design/common";

export default function BackButton() {
  return (
    <Link to="/">
      <Button>Back</Button>
    </Link>
  );
}
