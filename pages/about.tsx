import Seo from "../components/Seo";
import { FaBackward } from "react-icons/fa";

export default function About() {
  return (
    <div className="about">
      <Seo title="about page" />
      <h3>
        Go back and Plese click the movie <FaBackward />
      </h3>
    </div>
  );
}
