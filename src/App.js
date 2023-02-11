import './App.css';
import {BrowserRouter as Router , Routes , Route} from "react-router-dom"
import Header from './component/header/Header';
import Home from './pages/home/Home';
import MovieListt from './component/movielist/MovieListt';
import Movie from './pages/moviedetail/Movie';

function App() {
  return (
    <div className='App '>
      
      <Router>
        <Header/>
        <Routes>
          <Route index element={<Home />}></Route>
          <Route  path ="movie/:id"element={<Movie/>}></Route>
          <Route  path="movies/:type" element={<MovieListt/>}></Route>
          <Route  path='/*' element={<h1>error page</h1>}></Route>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
