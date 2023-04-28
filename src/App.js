import { BrowserRouter, Route , Routes } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header/Header';
import { Home } from './Pages/Home/Home'
import { MovieList } from './components/MovieList/MovieList';
import Movie from './Pages/MovieDetails/Movie'
import { AnimeCard } from './components/AnimeCard/AnimeCard';
import { AnimeList } from './components/AnimeList/AnimeList';
import {Anime} from './Pages/AnimeDetails/Anime'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
      <Route index element={<Home />}></Route>
                <Route path="movie/:id" element={<Movie />}></Route>
                <Route path="movies/:type" element={<MovieList />}></Route>
                <Route path="animes/:type"element={<AnimeList />}></Route>
                <Route path="/*" element={<h1>Error Page</h1>}></Route>
                <Route path='anime/:id' element={<Anime/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
