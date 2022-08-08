import React, { useEffect } from "react";
import Accordion from "../Accordion/Accordion";
import Carousels from "../Carousels/Carousels";
import Contact from "../Contact/Contact";
import LineBlack from "../LineBlack/LineBlack";
import LiteNumber from "../LiteNumber/LiteNumber";
import Procedure from "../Procedure/Procedure";
import Footer from '../Footer/Footer'

const Home = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <>
      <div><Carousels /></div>
      <div><LiteNumber /></div>
      {/* <div><LineBlack title="Giới Thiệu" /></div> */}
      <div><LineBlack title="Quy Trình" /></div>
      <div><Procedure /></div>
      <div><LineBlack title="Giải Đáp" /></div>
      <div><Accordion /></div>
      <div><LineBlack title="Thông Tin Liên Hệ" /></div>
      <div><Contact /></div>
      <div><Footer /></div>
    </>
  );
};

export default Home;
