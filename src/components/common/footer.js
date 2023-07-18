import React from "react";
import {
  SendOutlined,
  EnvironmentOutlined,
  MailOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import { Button, Form, Input, Row, Col, Space } from "antd";

const { TextArea } = Input;

function Footer() {
  return (
    <div className="container" id="contact">
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} md={8} lg={8}>
          <div className="footer-section">
            <div className="footer-row">
              <span>
                <img src="../titleimg.png"></img>
                <br />
                <p style={{ color: "#936B09" }}>Change The Impossible</p>
                <p style={{ color: "grey" }}>
                  <EnvironmentOutlined
                    style={{ fontSize: "1.8rem", color: "grey" }}
                  />
                  May flower, 23, Avinashi,Peelamedu,Coimbatore
                </p>

                <p style={{ marginLeft: "6%", color: "grey" }}> 641006</p>
                <p style={{ color: "grey" }}>
                  <MailOutlined style={{ fontSize: "1.8rem", color: "grey" }} />
                  dummy@gmail.com
                </p>
                <p style={{ color: "grey" }}>
                  <PhoneOutlined
                    style={{ fontSize: "1.8rem", color: "grey" }}
                  />
                  +91-9999999999
                </p>
              </span>
            </div>
          </div>
        </Col>

        <Col xs={24} sm={12} md={8} lg={8}>
          <div className="footer-section">
            <div className="footer-row">
              <span></span>
            </div>
          </div>
        </Col>
        <Col xs={24} sm={24} md={8} lg={8}>
          <div className="footer-row">
            <div style={{ marginLeft: "10%", color: "grey" }}>
              <h2>Get in Touch</h2>
              <p>Lorem ipsum dolor sit amet</p>
              <Form
                style={{
                  width: "75%",
                }}
              >
                <Form.Item
                  name="email"
                  rules={[
                    {
                      type: "email",
                      message: "The input is not valid E-mail!",
                    },
                    {
                      required: true,
                      message: "Please give your E-mail!",
                    },
                  ]}
                >
                  <Space.Compact
                    style={{
                      width: "100%",
                    }}
                  >
                    <Input placeholder="Email" />
                    <Button className="button1" htmlType="submit">
                      <SendOutlined
                        style={{ color: "#5A5A5A", fontSize: "1.5rem" }}
                      />
                    </Button>
                  </Space.Compact>
                </Form.Item>
              </Form>
            </div>
          </div>
        </Col>
      </Row>
      <hr class="container px-4 mt-24 mb-10"></hr>
      <span className="copyright">Copyright &copy; 2023 LAN&RAN Tech</span>
    </div>
  );
}

export default Footer;
