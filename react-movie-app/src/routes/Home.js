import { useEffect, useState } from "react";
import Movie from "../components/MainMovie";
import "../components/style.scss";
function Home({ genres }) {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1); // 페이지 번호 초기값을 1로 설정
  const [isFetching, setIsFetching] = useState(false); // 추가 데이터를 가져오는 중인지 여부

  const getMovies = async (pageNum) => {
    setIsFetching(true); // 데이터를 가져오는 중임을 표시

    try {
      const response = await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8&sort_by=download_count&page=${pageNum}`
      );
      const data = await response.json();

      if (data && data.data && data.data.movies) {
        console.log(response);
        setMovies((prevMovies) => [...prevMovies, ...data.data.movies]);
        setPage(pageNum + 1); // 페이지 번호를 증가시킴
      }
    } catch (error) {
      console.error("Error fetching movies:", error);
    } finally {
      setIsFetching(false); // 데이터를 가져오는 과정이 끝남을 표시
      setLoading(false);
    }
  };

  // 스크롤 이벤트 핸들러
  const handleScroll = () => {
    // 스크롤이 가장 아래로 내려갔을 때, 추가 데이터를 가져오기
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      if (!isFetching) {
        getMovies(page);
      }
    }
  };

  // 스크롤 이벤트 리스너 등록
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isFetching]);

  useEffect(() => {
    getMovies(page);
  }, []);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="bigContainer">
          {movies.map((movies) => (
            <Movie
              key={movies.id}
              id={movies.id}
              coverImg={movies.medium_cover_image}
              title={movies.title}
              summary={movies.summary}
              genres={movies.genres}
            />
          ))}
        </div>
      )}
      {isFetching && <p>Loading more...</p>}
    </div>
  );
}

export default Home;
