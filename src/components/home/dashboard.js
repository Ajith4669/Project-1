import React from "react";
import { Carousel } from "antd";
import "bootstrap/dist/css/bootstrap.min.css";

const settings = {
  dots: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 800,
};

function Dashboard() {
  return (
    <div className="dashboardBlock">
      <Carousel
        className="testing"
        style={{ backgroundColor: "black", height: "120%", width: "100%" }}
        {...settings}
      >
        <div>
          <img
            src="../mercury.jpg"
            style={{ width: "25%", marginLeft: "70%", marginTop: "4%" }}
          ></img>
          <p
            style={{
              color: "#a673ab",
              width: "20%",
              fontSize: "1.3rem",
              marginRight: "90%",
              marginTop: "-10%",
            }}
          >
            The largest pond is as sensitive to atmospheric changes as the
            globule of mercury in its tube ~ Henry David Thoreau
          </p>
        </div>
        <div>
          <h1 style={{ color: "white", margin: "5%", fontSize: "4rem" }}></h1>
          <img
            src="../venus.jpg"
            style={{ width: "25%", marginLeft: "70%" }}
          ></img>
          <p
            style={{
              color: "#debd6d",
              width: "20%",
              fontSize: "1.3rem",
              marginRight: "90%",
              marginTop: "-10%",
            }}
          >
            I will imagine you Venus tonight and pray, pray, pray to your star
            like a Heathen ~ John Keats
          </p>
        </div>
        <div>
          <h1 style={{ color: "white", margin: "5%", fontSize: "4rem" }}></h1>
          <img
            src="../earth.jpg"
            style={{ width: "25%", marginLeft: "70%" }}
          ></img>
          <p
            style={{
              color: "#8daf5d",
              width: "20%",
              fontSize: "1.3rem",
              marginRight: "90%",
              marginTop: "-10%",
            }}
          >
            Let every breath, every word, and every step make the mother earth
            proud of us ~ Amit Ray
          </p>
        </div>
        <div>
          <h1 style={{ color: "white", margin: "5%", fontSize: "4rem" }}></h1>
          <img
            src="../mars.jpg"
            style={{ width: "25%", marginLeft: "70%" }}
          ></img>
          <p
            style={{
              color: "#db8448",
              width: "20%",
              fontSize: "1.3rem",
              marginRight: "90%",
              marginTop: "-10%",
            }}
          >
            I think humans will reach Mars, and I would like to see it happen in
            my lifetime ~ Buzz Aldrin
          </p>
        </div>
        <div>
          <h1 style={{ color: "white", margin: "5%", fontSize: "4rem" }}></h1>
          <img
            src="../jupiter.jpg"
            style={{ width: "25%", marginLeft: "70%" }}
          ></img>
          <p
            style={{
              color: "#885c3f",
              width: "20%",
              fontSize: "1.3rem",
              marginRight: "90%",
              marginTop: "-10%",
            }}
          >
            I wanted to go to Jupiter. That was my plan from day one, and David
            Lynch gave me the ticket ~ Laura Dern
          </p>
        </div>
        <div>
          <h1 style={{ color: "white", margin: "5%", fontSize: "4rem" }}></h1>
          <img
            src="../saturn.jpg"
            style={{ width: "25%", marginLeft: "70%" }}
          ></img>
          <p
            style={{
              color: "#d1ca7c",
              width: "20%",
              fontSize: "1.3rem",
              marginRight: "90%",
              marginTop: "-10%",
            }}
          >
            Saturn is the most photogenic planet in the solar system ~ Carolyn
            Porco
          </p>
        </div>
        <div>
          <h1 style={{ color: "white", margin: "5%", fontSize: "4rem" }}></h1>
          <img
            src="../uranus.jpg"
            style={{ width: "25%", marginLeft: "70%" }}
          ></img>
          <p
            style={{
              color: "#4a7776",
              width: "20%",
              fontSize: "1.3rem",
              marginRight: "90%",
              marginTop: "-10%",
            }}
          >
            I feel like all my stars have aligned and Uranus wants to knock me
            out of orbit ~ Robin Alexander
          </p>
        </div>
        <div>
          <img
            src="lanran1.gif"
            typeof="gif"
            style={{
              marginLeft: "65%",
              marginTop: "10%",
              blockSize: "70%",
            }}
          ></img>

          <p
            style={{
              color: "#936B09",
              fontSize: "3rem",
              marginRight: "50%",
              marginTop: "-25%",
            }}
          >
            Change The Impossible
          </p>
        </div>
      </Carousel>
    </div>
  );
}

export default Dashboard;
