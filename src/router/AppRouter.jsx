import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./../components/nav/Navbar";
import { GlobalStyles } from "../components/globalStyles/GlobalStyles";
import Home from "../pages/home/Home";
import Detail from "./../pages/detail/Detail";
const AppRouter = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="detail" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
