import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './loginpage';
import MovieList from './MovieList';
import SingleCard from './SingleCard';

function App() {
  return (
   <Routes>
      <Route path='/' element={<LoginPage/>}/>
      <Route path='/movielist' element={<MovieList/>}/>
      <Route path='/singleCard' element={<SingleCard/>}/>
   </Routes>
  );
}

export default App;
