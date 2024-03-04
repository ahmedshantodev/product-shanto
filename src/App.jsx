import React from "react";
import Product from "./pages/Product";
import Navbar from '../src/components/section/NavBar'
import TopBar from "./components/section/TopBar";

const App = () => {
  return (
    <>
      <TopBar />
      <Navbar />
      <Product />
    </>
  );
};

export default App;
