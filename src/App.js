import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from './Components/Navbar';
import ArticlePage from './Components/ArticlePage/ArticlePage';
import Home from './Components/HomePage/Home';



function App() {
  return (
    <>
    <Navbar />

      <BrowserRouter>

        <Routes>
          <Route element={<Home/>} path="/" />
          <Route element={<ArticlePage />} path="/article" />
          
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
