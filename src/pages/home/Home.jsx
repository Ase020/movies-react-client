import { Hero } from "../../components";
import { movies } from "../../movies";
import "./home.css";

const Home = () => {
  return (
    <div>
      <Hero movies={movies} />
    </div>
  );
};

export default Home;
