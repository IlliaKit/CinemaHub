import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import tmdbApi, { movieType } from "../../api/tmdbApi";
import apiConfig from "../../api/apiConfig";
import { OutlineButton } from "../button/Button";
import "./current-showings.scss";

const CurrentShowings = () => {
  const [movieItems, setMovieItems] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const params = { page: 1 };
      try {
        const response = await tmdbApi.getMoviesList(movieType.popular, {
          params,
        });
        setMovieItems(response.results.slice(0, 5));
      } catch (error) {
        console.log("error", error);
      }
    };
    getMovies();
  }, []);

  return (
    <div className="current-showings">
      {movieItems.map((item) => (
        <MovieItem key={item.id} item={item} />
      ))}
    </div>
  );
};

const MovieItem = ({ item }) => {
  const navigate = useNavigate();
  const background = apiConfig.w500Image(item.poster_path);

  const handleWatchNow = () => {
    navigate(`/movie/${item.id}`);
  };

  return (
    <div className="movie-item">
      <img src={background} alt={item.title} className="movie-item__poster" />
      <div className="movie-item__info">
        <h3 className="movie-item__title">{item.title}</h3>
        <p className="movie-item__overview">{item.overview}</p>
        <div className="movie-item__btns">
          <OutlineButton onClick={handleWatchNow}>Buy now</OutlineButton>
        </div>
      </div>
    </div>
  );
};

export default CurrentShowings;
