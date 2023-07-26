import { Chip } from "@mui/material";
import axios from "axios";
import { useEffect } from "react";

const Genres = ({
  selectedGenres,
  setSelectedGenres,
  genres,
  setGenres,
  setPage,
}) => {
  const handleAdd = (genre) => {
    setSelectedGenres([...selectedGenres, genre]);
    setGenres(genres.filter((g) => g.id !== genre.id));
    setPage(1);
  };

  const handleRemove = (genre) => {
    setSelectedGenres(
      selectedGenres.filter((selected) => selected.id !== genre.id)
    );
    setGenres([...genres, genre]);
    setPage(1);
  };

  const fetchGenres = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=a5e2c43d79f3acc3fade9ef3449c3c6b&language=en-US`
    );
    setGenres(data.genres);
  };

  useEffect(() => {
    fetchGenres();
  }, []);

  // return () => {
  //   setGenres({}); // unmounting
  // };
  // // eslint-disable-next-line

  return (
    <div
      style={{
        padding: "6px 0",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        marginBottom: "2rem",
      }}
    >
      {selectedGenres?.map((genre) => (
        <Chip
          style={{
            margin: 2,
            minWidth: "10vw",
            minHeight: "5vh",

            fontSize: "1rem",
          }}
          label={genre.name}
          key={genre.id}
          color="success"
          clickable
          size="small"
          onDelete={() => handleRemove(genre)}
        />
      ))}
      {genres.map((genre) => (
        <Chip
          style={{
            margin: 3,

            minWidth: "10vw",
            minHeight: "5vh",
            fontSize: "1rem",
          }}
          label={genre.name}
          key={genre.id}
          color="primary"
          variant="outlined"
          clickable
          size="small"
          onClick={() => handleAdd(genre)}
        />
      ))}
    </div>
  );
};

export default Genres;
