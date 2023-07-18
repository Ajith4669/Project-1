import React from "react";
import { Row, Col, Button, Card } from "antd";
import { Figure } from "react-bootstrap";
import { RightOutlined } from "@ant-design/icons";
import "bootstrap/dist/css/bootstrap.min.css";

const { Meta } = Card;
function Feature() {
  return (
    <div className="bgBlack">
      <div className="container-fluid">
        <Row gutter={[42, 32]}>
          <Col span={7}>
            <Figure>
              <img
                style={{ width: "100%" }}
                src="../building.jpg"
                className="img"
              />
              <div>
                <p className="pictureimg">
                  <div className="sample">
                    <img
                      style={{ width: "25%", marginBottom: "12%" }}
                      src="../orb25.jpg"
                    />
                  </div>
                  ORB25
                </p>
              </div>

              <div>
                <a href="https://oxfordmigration.com/">
                  <Button className="button">
                    <div className="site">
                      View Site
                      <RightOutlined style={{ fontSize: "2rem" }} />
                    </div>
                  </Button>
                </a>
              </div>
            </Figure>
          </Col>

          <Col span={7}>
            <Figure>
              <img
                style={{ width: "100%", height: "100%" }}
                src="../building1.jpg"
                className="img"
              />
              <div>
                <p className="pictureimg">
                  <div className="bg-image hover-zoom">
                    <img
                      style={{ width: "72%", marginBottom: "9%" }}
                      src="../om.jpg"
                    />
                  </div>
                  OXFORD MIGRATION
                </p>
              </div>

              <div>
                <a href="https://oxfordmigration.com/">
                  <Button className="button">
                    <div className="site">
                      View Site
                      <RightOutlined style={{ fontSize: "2rem" }} />
                    </div>
                  </Button>
                </a>
              </div>
            </Figure>
          </Col>

          <Col span={7}>
            <Figure>
              <img
                style={{ width: "100%" }}
                src="../building2.jpg"
                className="img"
              />
              <div>
                <p className="pictureimg">
                  <div className="sample">
                    <img
                      style={{ width: "70%", marginBottom: "7%" }}
                      src="../HARVARD.PNG"
                    />
                  </div>
                  HARDVARD SCHOOL OF DIGITAL MARKETING
                </p>
              </div>

              <div>
                <a href="https://harvarddigitalmarketing.com/">
                  <Button className="button">
                    <div className="site">
                      View Site
                      <RightOutlined style={{ fontSize: "2rem" }} />
                    </div>
                  </Button>
                </a>
              </div>
            </Figure>
          </Col>
          <Col span={7}>
            <Figure>
              <img
                style={{ width: "100%" }}
                src="../buildingdu.jpg"
                className="img"
              />
              <div>
                <p className="pictureimg">
                  <div className="sample">
                    <img
                      style={{ width: "80%", marginBottom: "14%" }}
                      src="../sooty.JPG"
                    />
                  </div>
                  SOOTY SCHOOL OF LANGUAGE
                </p>
              </div>

              <div>
                <a href=" https://sootylanguages.com/">
                  <Button className="button">
                    <div className="site">
                      View Site
                      <RightOutlined style={{ fontSize: "2rem" }} />
                    </div>
                  </Button>
                </a>
              </div>
            </Figure>
          </Col>
          <Col span={7}>
            <Figure>
              <img
                style={{ width: "100%" }}
                src="../building4.jpg"
                className="img"
              />
              <div>
                <p className="pictureimg">
                  <div className="sample">
                    <img
                      style={{ width: "60%", marginBottom: "14%" }}
                      src="../ninthplanet.png"
                    />
                  </div>
                  NINTH PLANET REALITY
                </p>
              </div>

              <div>
                <a href=" ">
                  <Button className="button">
                    <div className="site">
                      View Site
                      <RightOutlined style={{ fontSize: "2rem" }} />
                    </div>
                  </Button>
                </a>
              </div>
            </Figure>
          </Col>
          <Col span={7}>
            <Figure>
              <img
                style={{ width: "100%" }}
                src="../building5.jpg"
                className="img"
              />
              <div>
                <p className="pictureimg">
                  <div className="sample">
                    <img
                      style={{ width: "30%", marginBottom: "10%" }}
                      src="../violasilks.png"
                    />
                  </div>
                  VIOLA SILKS
                </p>
              </div>

              <div>
                <a href=" https://violasilks.com/">
                  <Button className="button">
                    <div className="site">
                      View Site
                      <RightOutlined style={{ fontSize: "2rem" }} />
                    </div>
                  </Button>
                </a>
              </div>
            </Figure>
          </Col>
          <Col span={7}>
            <Figure>
              <img
                style={{ width: "100%" }}
                src="../finance1.jpg"
                className="img"
              />
              <div>
                <p className="pictureimg">SWISS CREDIT</p>
              </div>

              <div>
                <a href="https://swisscredit.in/">
                  <Button className="button">
                    <div className="site">
                      View Site
                      <RightOutlined style={{ fontSize: "2rem" }} />
                    </div>
                  </Button>
                </a>
              </div>
            </Figure>
          </Col>
          <Col span={7}>
            <Figure>
              <img
                style={{ width: "100%" }}
                src="../building7.jpg"
                className="img"
              />
              <div>
                <p className="pictureimg">
                  <div className="sample">
                    <img
                      style={{ width: "28%", marginBottom: "12%" }}
                      src="../cafeche.png"
                    />
                  </div>
                  CAFE CHE
                </p>
              </div>

              <div>
                <a href=" https://cafeche.shop/">
                  <Button className="button">
                    <div className="site">
                      View Site
                      <RightOutlined style={{ fontSize: "2rem" }} />
                    </div>
                  </Button>
                </a>
              </div>
            </Figure>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Feature;
