import './App.css';
import { Route, Routes } from 'react-router-dom';
import LogIn from './Pages/LogIn.jsx';
import MovieDetails from './Pages/MovieDetails.jsx';
import HomePage from './Pages/HomePage.jsx';

function App() {
  return (
   <Routes>
      <Route path='/' element={<LogIn/>}/>
      <Route path='/homepage' element={<HomePage/>}/>
      <Route path='/moviedetails/:id' element={<MovieDetails/>}/>
   </Routes>
  );
}

export default App;
