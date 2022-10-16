import { Route, Routes } from "react-router-dom";
import NavBar from "../componentes/NavBar/NavBar"
import Games from '../componentes/home/Games'
import Favorites from '../componentes/Favorites/Favorites'
import NotFound from '../componentes/NotFound/NotFound'
import GameDetail from '../componentes/GameCard/GameDetail.jsx'
import About from "../componentes/About/About";
import Home from "../componentes/home/Home";

function App() {
  return (
    <div className="App">
      {/* <NavBar /> */}
      <Routes>
        <Route path="" element={<NavBar />}>
          <Route path="/" element={<Home/>}/>
          <Route path="/games" element={<Games />} />
          <Route path="/games/:id" element={<GameDetail />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/about" element={<About />} />
          
        </Route>
        <Route path="*" element={<NotFound/>} />
      </Routes>

    </div>
  );
}

export default App;
