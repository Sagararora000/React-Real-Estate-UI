import React from "react";
import "./HomePage.scss";
import SearchBox from "../../components/SearchBar/SearchBox";

const HomePage = () => {
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapperClass">
          <h1 className="Heading">Find Real Estate & Get Your Dream Place</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
            nostrum, atque tempora reiciendis doloribus sed dolorum autem sint
            aperiam temporibus soluta? Veniam dolorum ipsum a nemo perspiciatis
            ducimus cupiditate inventore?
          </p>
          <SearchBox />
          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className="box">
              <h1>200</h1>
              <h2>Award Gained</h2>
            </div>
            <div className="box">
              <h1>2000+</h1>
              <h2>Property Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" srcset="" />
      </div>
    </div>
  );
};

export default HomePage;