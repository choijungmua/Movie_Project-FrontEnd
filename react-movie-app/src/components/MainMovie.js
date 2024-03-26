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
        {/* <h2>
        <Link basename={process.env.PUBLIC_URL} to={`/movie/${id}`}>
          {title}
        </Link>
      </h2> */}
        {/* <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p> */}
        {/* <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul> */}
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
