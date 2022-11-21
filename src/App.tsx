import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./pages/Layout";
import LoginForm from "./components/LoginForm";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
            <Route path={"/login"} element={<LoginForm />} />
            <Route path={"/home"} element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
