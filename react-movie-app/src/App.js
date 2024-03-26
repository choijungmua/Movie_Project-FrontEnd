import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Details";
import Header from "./components/Header.js";
import Genre from "./routes/Genre.js";
import "./App.css";
import { useState } from "react";
function App() {
  const [genres, setGenres] = useState(["Action", "Sci-Fi", "Drama"]);
  return (
    <div className="container">
      <Header />
      <Routes>
        {genres.map((genres, index) => {
          return (
            <Route
              path={`/movie/${genres}`}
              element={
                <section>
                  <div class="inner">
                    <Genre key={index} genres={genres} />
                  </div>
                </section>
              }
            />
          );
        })}
        <Route
          path="/"
          element={
            <section>
              <Home />
            </section>
          }
        />
        <Route path="/movie/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}
export default App;
