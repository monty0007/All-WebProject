import React from "react";
import "./mystyle.css";

export default function Header() {
  return (
    <div className="main">
      <div className="container">
        <div>
          <img src="xr.png" alt="" />
        </div>
        <div className="head">
          <ul className="box">
            <li>PLATFORM</li>
            <li>ENTERPRISE</li>
            <li>PRICING</li>
            <li>CREATOR'S HUB</li>
            <li>CONTACT</li>
            <li>LEARN</li>
            <li>DASHBOARD</li>
          </ul>
        </div>
      </div>
      <div className="title">
        
        <video style={{position:"absolute",height:"50vh",width:"100%",objectFit:"cover"}} autoPlay loop muted id='video'>
            <source src="MQ.mp4" type="video/mp4"/>
        </video>
        <div className="tit">
          <p>
            Build Your Metaverse <br /> Within Minues With <br /> MetaQube
          </p>
          <button className="btn">Get Started</button>
        </div>
        {/* <img src="qube.png" alt="" /> */}
      </div>
      <div style={{
            padding: "1em"
      }}>
        <div>
          <h2 style={{fontWeight:"normal", fontSize:"50px"}}>Trending Experience</h2>
        </div>
        <div className="place">
          <div className="vr">
            <img className="img3" src="vr1.webp" alt="" />
            <p>Iscon Arena</p>
          </div>
          <div className="vr">
            <img className="img3" src="vr2.webp" alt="" />
            <p>Japan Arena</p>
          </div>
          <div className="vr">
            <img className="img3" src="vr3.webp" alt="" />
            <p>Trip to Tekken</p>
          </div>
          {/* <div className="vr">
            <img className="img3" src="vr4.webp" alt="" />
            <p>Trip to MetaQuest</p>
          </div> */}
        </div>
      </div>
    </div>
  );
}
