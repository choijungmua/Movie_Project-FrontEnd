import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailMovie from "../components/DetailMovie";
function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovies([json.data.movie]);
    setLoading(false);
    console.log(json);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {movies.map((movies) => (
            <DetailMovie
              coverImg={movies.medium_cover_image}
              title={movies.title}
              runtime={movies.runtime}
              year={movies.year}
              genres={movies.genres}
              intro={movies.description_intro}
              image={movies.large_cover_image}
              background={movies.background_image_original}
            />
          ))}
        </div>
      )}
    </div>
  );
}
export default Detail;
