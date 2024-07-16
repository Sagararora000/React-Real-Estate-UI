import React, { useState } from "react";
import "./NavBar.scss";
const NavBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="NavBar">
        <div className="left">
          <div className="logo">
            <img src="/logo.png" alt="" srcset="" />
            <span>LamaEstate</span>
          </div>
          <div className="navlinks">
            <a href="" className="home">
              Home
            </a>
            <a href="" className="about">
              About
            </a>
            <a href="" className="contacts">
              Contacts
            </a>
            <a href="" className="agents">
              Agents
            </a>
          </div>
        </div>
        <div className="right">
          <div className="profImage">
            <img src="/favicon.png" alt="" srcset="" onclick />
            <span className="profText">John&nbsp;Doe</span>
          </div>
          <div className="profButton">
            <a href="">Profile</a>
          </div>
          <div className="menuIcon">
            <img
              src="/menu.png"
              alt=""
              srcset=""
              onClick={() => {
                setOpen(prev => !prev);
                console.log(open);
              }}
            />
          </div>
          <div className={open ? "active drawer" : "drawer"}>
            <a href="" className="home">
              Home
            </a>
            <a href="" className="about">
              About
            </a>
            <a href="" className="contacts">
              Contacts
            </a>
            <a href="" className="agents">
              Agents
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
