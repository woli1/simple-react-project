import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom';
import Home from './components/pages/home';
import Navbar from './components/navbar';
import Favorites from './components/pages/favorites';
import Details from './components/pages/details';
function App() {
  return (
   <div>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/favorites" element={<Favorites/>}/>
          <Route path="/recipe-item/:id" element={<Details/>}/>
        </Routes>


   </div>
  );
}

export default App;
