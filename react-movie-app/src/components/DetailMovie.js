import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";

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
    width: 100vw;
    height: calc(100vh - 110px); /* 헤더의 높이를 제외한 높이 설정 */
    background-image: ${(props) => `url(${props.background})`};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    overflow: hidden;
    position: relative;
    .smContainer {
      position: absolute;
      top: 0px;
      left: 0;
      width: 100%;
      height: calc(100vh - 100px);
      background-color: rgba(0, 0, 0, 0.3);
      .contents {
        display: flex;
        color: white;

        img {
          width: 25%;
          top: 50%;
          margin: 60px auto;
        }
        .text {
          width: 55%;
          margin-top: 80px;
          font-weight: 500;
          h1 {
            font-size: 40px;
            font-weight: 900;
          }
          p {
            line-height: 1.8em;
            margin-top: 3em;
            font-size: 20px;
            width: 70%;
          }
          ul {
            display: flex;
          }
          li {
            margin-right: 20px;
          }
        }
      }
    }
  `;
  return (
    <Wrap background={background}>
      <div className="bg"></div>
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
