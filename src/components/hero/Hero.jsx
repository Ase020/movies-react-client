/* eslint-disable react/prop-types */
import { Paper } from "@mui/material";
import Carousel from "react-material-ui-carousel";

import "./hero.css";

const Hero = ({ movies }) => {
  console.log(movies);
  return (
    <div className="movie-carousel-container">
      <Carousel>
        {movies.map(({ imdbId, poster, title }) => (
          <Paper key={imdbId}>
            <div className="movie-card-container">
              <div className="movie-card">
                <div className="movie-detail">
                  <div className="movie-poster">
                    <img src={poster} alt={title} />
                  </div>

                  <div className="movie-title">
                    <h4>{title}</h4>
                  </div>
                </div>
              </div>
            </div>
          </Paper>
        ))}
      </Carousel>
    </div>
  );
};

export default Hero;
