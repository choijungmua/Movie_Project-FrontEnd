import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "./DetailMovie.scss";
import { useEffect, useState } from "react";
function DetailMovie({
  background,
  coverImg,
  title,
  summary,
  intro,
  image,
  year,
  genre,
  runtime,
}) {
  const Wrap = styled.div`
    background-image: ${(props) => `url(${props.background})`};
    @media screen and (max-width: 767px) {
      background-image: ${(props) => `url(${props.coverImg})`};
    }
  `;
  const [imgChange, setImgChange] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setImgChange(window.innerWidth <= 767);
    };
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Wrap
      background={!imgChange ? background : coverImg}
      className="containerDetail"
    >
      <div className="smContainer">
        <div className="contents">
          <img src={image} alt="#" />
          <div className="text">
            <h1>{title}</h1>
            <p>{intro}</p>
            <p>{summary}</p>
            <p>
              {year} / {runtime}min
            </p>
            <ul>{genre && genre.map((g) => <li key={g}>{g}</li>)}</ul>
          </div>
        </div>
      </div>
    </Wrap>
  );
}

DetailMovie.propTypes = {
  background: PropTypes.string.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  intro: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  genre: PropTypes.arrayOf(PropTypes.string).isRequired,
  runtime: PropTypes.number.isRequired,
};

export default DetailMovie;
