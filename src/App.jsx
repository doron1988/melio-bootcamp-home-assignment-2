import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Navbar} from "./components/Navbar/Navbar.jsx";
import {Home, routes} from "./pages";
import "./App.css";
import {Favorite} from "./pages/Favorite/Favorite";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path={routes.home}
               element={<Home/>}/>
          <Route path={routes.favorite}
                 element={<Favorite/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
