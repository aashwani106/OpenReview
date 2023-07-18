import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from './Components/Navbar';
import ArticlePage from './Components/ArticlePage/ArticlePage';

function App() {
  return (
    <>
    <Navbar />

      <BrowserRouter>

        <Routes>
          {/* <Route element={<Login />} path="login" /> */}
          <Route element={<ArticlePage />} path="/article" />

        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
