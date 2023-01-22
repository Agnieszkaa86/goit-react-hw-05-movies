import { Routes, Route} from "react-router-dom";
import React from 'react';
import Home from "./components/Home";

const HomePage = React.lazy(() => import("./pages/HomePage"));
const Movies = React.lazy(() => import("./pages/Movies"));
const MovieDetailsPage = React.lazy(() => import("./pages/MovieDetailsPage"));
const Cast= React.lazy(() => import("./components/Cast"));
const Reviews = React.lazy(() => import("./components/Reviews"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

const  App = ()=> {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<Movies />}>
            <Route path=":movieId" element={<MovieDetailsPage />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
export default App;
