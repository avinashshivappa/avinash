import React from "react";
import Header from "../header";
import "./home.css";
import Footer from "../footer";
import Body from "../body";

function Home() {
  return (
    <div className="home">
        
      <div>
        <Header />
      </div>

      <div>
        <Body />
      </div>

      <div>
        <Footer />
      </div>

    </div>
  );
}

export default Home;
