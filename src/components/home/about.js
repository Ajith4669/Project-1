import Link from "antd/es/typography/Link";
import { Affix, Button } from "antd";

import React from "react";
import {
  FacebookOutlined,
  TwitterOutlined,
  YoutubeOutlined,
  LinkedinOutlined,
  ThunderboltFilled,
} from "@ant-design/icons";

function About() {
  const handleScrollDown = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };
  return (
    <div className="bgBlack" id="about">
      <div
        style={{
          display: "flex",
          left: "80%",
          color: "white",
          fontSize: "20%",
          marginTop: "4%",
        }}
      >
        <a
          className="icon icon__new"
          style={{ color: "#885c3f", fontSize: "2rem" }}
          href="https://twitter.com/i/flow/login?redirect_after_login=%2Flogin"
        >
          <TwitterOutlined />
        </a>

        <br />

        <a
          className="icon icon__new"
          style={{ color: "#885c3f", fontSize: "2rem" }}
          href="https://www.facebook.com/login"
        >
          <FacebookOutlined />
        </a>

        <br />

        <a
          className="icon icon__new"
          style={{ color: "#885c3f", fontSize: "2rem" }}
          href="https://www.youtube.com/"
        >
          <YoutubeOutlined />
        </a>

        <br />

        <a
          className="icon icon__new"
          style={{ color: "#885c3f", fontSize: "2rem" }}
          href="https://www.linkedin.com/company/orb25-digitalworld/"
        >
          <LinkedinOutlined />
        </a>
      </div>
      <div>
        <Affix style={{ position: "fixed", bottom: "8%", right: 20 }}>
          <ThunderboltFilled
            onClick={handleScrollDown}
            style={{ fontSize: "3rem", color: "#885c3f" }}
          />
        </Affix>
      </div>

      <div className="title">
        <h1
          style={{
            position: "relative",
            fontSize: "3rem",
            fontFamily: "Fantasy",
            marginBottom: "130%",
            left: "-30%",
            color: "#885c3f",
          }}
        >
          Group of Companies
        </h1>
      </div>
      <div className="container">
        <p
          style={{
            position: "relative",
            fontSize: "3rem",
            color: "#885c3f",
            marginLeft: "40%",
            marginTop: "5%",
          }}
        >
          About Us
        </p>
        <div className="code">
          <p style={{ fontSize: "5rem", color: "#885c3f" }}>O</p>
          <h1 style={{ marginLeft: "5%", marginTop: "-11%" }}>
            n March 30, 2022, LANRAN One Person Company Limited was registered
            with the Ministry of Corporate Affairs (MCA).
          </h1>
          <br />
          <p>
            Orb25, Oxford Migration, Harvard School of Digital Marketing, and
            the Sooty School of Foreign Languages are all part of the parent
            firm LANRAN.
          </p>
          <p>
            A digital marketing platform called Orb25 in every district supplies
            all kinds of digital services to thousands of businesses at their
            request.
          </p>
          <p>
            With the mission to serve the needs of new businesses and
            entrepreneurs, Orb25 has locations all across Tamil Nadu. We offer
            an extensive selection of on- and off-page services.
          </p>
          <p>
            Orb25, the most effective and prominent digital marketing agency, is
            performing to incredible heights in all digital marketing services
            for businesses based on products, services, and brands.
          </p>
          <p>
            To convert potential leads into customers Orb25—a prominent digital
            marketing agency—promotes its clients through a combination of SEO,
            SMM, PPC, inbound and outbound marketing, affiliate marketing,
            influencer marketing, and content management.
          </p>

          <p>
            Oxford Migration has qualified experts and provides immigration
            services to over 20 countries,people who fantasize about flying off
            to other countries should contact Oxford Migration, and you'll get
            all the help you need to employ our professional immigration
            services right away.
          </p>
          <p>
            From the very beginning until full adaptation in a new country,
            Oxford Migration, the premier immigration consultant in India,
            meticulously facilitates each of its clients.Oxford Migration
            acknowledges its reputation and works hard to give its customers the
            best immigration services.
          </p>
          <p>
            The Sooty School of Foreign Languages is a learning platform where
            students can interact with professionals to improve their
            proficiency in a foreign language.Sooty trainers train through
            captivating online video sessions or offline classes depending on
            the language learners' preferences. They have friendly faculty and
            are multi-talented in handling experience with foreign languages.
            The foreign languages offered by Sooty School of Foreign Languages
            include French, German, Italian, Korean, and Spanish to improve
            foreign language abilities.
          </p>
          <p>
            The most reputable digital marketing school in Coimbatore is the
            Harvard School of Digital Marketing, which offers the most in-demand
            programs today. To drastically boost your financial situation, learn
            digital marketing from the Harvard School of Digital Marketing.
            After completing a course in digital marketing at Harvard, one has a
            variety of career possibilities. One of the top schools for learning
            digital marketing is the Harvard School of Digital Marketing, where
            studious students can get hands-on experience either online or
            offline as they wish.
          </p>
          <p>
            The leading Digital Marketing course institute in Coimbatore is the
            Harvard School of Digital Marketing, which offers specialized
            courses with internships and stipends in the following areas: AI
            integrated UIUX, Advanced Digital Marketing, Digital Marketing + Web
            Designing + Graphic Designing, and Digital Marketing + Web Designing
            + Graphic designing + UIUX.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
