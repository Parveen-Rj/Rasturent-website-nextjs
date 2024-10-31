import React from "react";

import Navbar from "../app/components/Navbar";
import Banner from "./components/Banner";
import CardList from "./components/CardList";
import ProductList from "./components/ProductList";
import MenuItems from "./components/MenuItems";
import Footer from "../app/components/Footer";
import Offer from "./components/Offer";
import Card from "./components/Card";
import Reservation from "./components/Reservation";
import Progres from "../app/components/Progres";
import Food from "../app/components/Food";
import TestImonals from "./components/TestImonals";


export default function App() {
  return (
    <div className="bg-gradient-to-r from-black to-slate-700 min-h-screen"> 
    <Navbar/>
    <CardList/>
    <Progres/>
    <Food/>
    <Banner/>
    <ProductList/>
    <MenuItems/>
    <Offer/>
    <Card/>
    <Reservation/>
    <Footer/>
    
    <TestImonals/>
    </div>
  )
}