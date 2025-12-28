import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Movies from './pages/Movies';
import MovieDetail from './pages/MovieDetail';
import Actors from './pages/Actors';
import ActorDetail from './pages/ActorDetail';
import Publishers from './pages/Publishers';
import PublisherDetail from './pages/PublisherDetail';
import SeriesDetail from './pages/SeriesDetail';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id" element={<MovieDetail />} />
          <Route path="/actors" element={<Actors />} />
          <Route path="/actors/:id" element={<ActorDetail />} />
          <Route path="/publishers" element={<Publishers />} />
          <Route path="/publishers/:id" element={<PublisherDetail />} />
          <Route path="/series/:id" element={<SeriesDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
