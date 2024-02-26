import "./App.css";

import { Routes, Route } from 'react-router-dom';

import Header from "./components/Header";

import Home from "./pages/Home";

import About from "./pages/About";

import Contact from "./pages/Contact";

import Projects from "./pages/Projects";

import Skills from "./pages/Skills";

function App() {

  return (
    <>
      <Header />

      <Routes>

          <Route exact path='/'element = {<Home/>}> </Route>

          <Route path='/about' element={<About/>}> </Route>

          <Route path='/projects' element = {<Projects/>}> </Route>

          <Route path='/skills' element = {<Skills/>}> </Route>

          <Route path='/contact' element = {<Contact/>}> </Route>

      </Routes>
    </>
  );

}

export default App;
