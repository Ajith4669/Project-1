import { Tooltip } from "antd";
import React, { useState, useEffect } from "react";
import { Layout, Drawer, Button, Col, Row, Space } from "antd";
import {
  DatabaseFilled,
  GlobalOutlined,
  MailOutlined,
} from "@ant-design/icons";

function Header() {
  const [headerColor, setHeaderColor] = useState("transparent");
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.pageYOffset;
      if (currentScroll > 500) {
        setHeaderColor("black");
      } else {
        setHeaderColor("transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [isHovered, setIsHovered] = useState(false);
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const headerStyle = {
    color: isHovered ? "white" : "#885c3f",
    textDecoration: "none",
  };

  const handleMouseEnter1 = () => {
    setIsHovered1(true);
  };

  const handleMouseLeave1 = () => {
    setIsHovered1(false);
  };

  const headerStyle1 = {
    color: isHovered1 ? "white" : "#885c3f",
    textDecoration: "none",
  };

  const handleMouseEnter2 = () => {
    setIsHovered2(true);
  };

  const handleMouseLeave2 = () => {
    setIsHovered2(false);
  };

  const headerStyle2 = {
    color: isHovered2 ? "white" : "#885c3f",
    textDecoration: "none",
  };

  const handleMouseEnter3 = () => {
    setIsHovered3(true);
  };

  const handleMouseLeave3 = () => {
    setIsHovered3(false);
  };

  const headerStyle3 = {
    color: isHovered3 ? "white" : "#885c3f",
    textDecoration: "none",
  };
  const { Header } = Layout;

  return (
    <div className="container-fluid">
      <div className="header">
        <Header
          style={{ background: "transparent", backgroundColor: headerColor }}
        >
          <Row>
            <Col>
              <div className="logo">
                <img style={{ marginTop: "0.2%" }} src="../titleimg.png"></img>
              </div>
            </Col>
            <div className="mobileHidden">
              <Col className="headerstyle">
                <Space
                  style={{
                    margin: "10%",
                    fontSize: "1.4rem",
                    marginLeft: "130%",
                    justifyContent: "space-between",
                  }}
                >
                  <a
                    href="https://harvarddigitalmarketing.com/"
                    style={headerStyle}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    Business
                  </a>
                  <a
                    style={headerStyle1}
                    onMouseEnter={handleMouseEnter1}
                    onMouseLeave={handleMouseLeave1}
                  >
                    Community
                  </a>
                  <a
                    style={headerStyle2}
                    onMouseEnter={handleMouseEnter2}
                    onMouseLeave={handleMouseLeave2}
                    href="#contact"
                  >
                    ContactUs
                  </a>
                  <a
                    style={headerStyle3}
                    onMouseEnter={handleMouseEnter3}
                    onMouseLeave={handleMouseLeave3}
                    href="#about"
                  >
                    About
                  </a>
                </Space>
                <br />
              </Col>
            </div>
            <Col xs={4} sm={10} md={15} lg={17}>
              <div className="mobileVisible">
                <Button
                  style={{ backgroundColor: "#5b5b5b", border: 0 }}
                  onClick={showDrawer}
                  icon={<DatabaseFilled style={{ fontSize: "25px" }} />}
                ></Button>

                <Drawer
                  placement="right"
                  closable={false}
                  onClose={onClose}
                  visible={visible}
                >
                  <span>Business</span>
                  <span>Community</span>
                  <span>AboutUs</span>
                  <span>Carrers</span>
                </Drawer>
              </div>
            </Col>
          </Row>
        </Header>
      </div>
    </div>
  );
}
export default Header;
