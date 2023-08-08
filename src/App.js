import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from './Components/Navbar';
import ArticlePage from './Components/ArticlePage/ArticlePage';
import Home from './Components/HomePage/Home';
import Form1 from './Components/FormPage/Form1';
import Form2 from './Components/FormPage/Form2';
import Form3 from './Components/FormPage/Form3';



function App() {
  return (
    <>
    <Navbar />

      <BrowserRouter>

        <Routes>
          <Route element={<Home/>} path="/" />
          <Route element={<ArticlePage />} path="/article" />
          <Route element={<Form1/>} path="/form1"/>
          <Route element={<Form2/>} path="/form2"/>
          <Route element= {<Form3/>} path="/form3"/>
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
