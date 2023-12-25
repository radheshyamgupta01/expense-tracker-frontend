import React from "react";
import Carosal from "./Carosal";
import Card from "./Card";
import OffCanvas from "./Offcanvash";
import MyCarousel from "./MyCarosal";
import Header from "./Header";

function Home() {
  return (
    <>
    <Header></Header>
      <OffCanvas></OffCanvas>
      <Carosal></Carosal>
      <Card></Card>
      <MyCarousel></MyCarousel>
    </>
  );
}

export default Home;
