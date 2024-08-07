import './App.css';
import { Route, Routes } from 'react-router-dom';
import MovieList from './Component/MovieList.jsx';
import LogIn from './Pages/LogIn.jsx';
import MovieDetails from './Component/MovieDetails.jsx';

function App() {
  return (
   <Routes>
      <Route path='/' element={<LogIn/>}/>
      <Route path='/movielist' element={<MovieList/>}/>
      <Route path='/moviedetails/:id' element={<MovieDetails/>}/>
   </Routes>
  );
}

export default App;
