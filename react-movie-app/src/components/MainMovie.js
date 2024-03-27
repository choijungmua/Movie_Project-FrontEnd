import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./style.scss";
import styled from "styled-components";
function Movie({ id, coverImg, title, summary = "", genres }) {
  const StyledLink = styled(Link)`
    text-decoration: none;
    font-weight: 500;
  `;

  return (
    <div className="container">
      <div className="imgWrap">
        <StyledLink basename={process.env.PUBLIC_URL} to={`/movie/${id}`}>
          <img src={coverImg} alt={title} />
          <p className="title">{title}</p>
        </StyledLink>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
