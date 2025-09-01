import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Laissez-moi <span className="purple">me présenter </span>
            </h1>
            <p className="home-about-body">
              Développeur Full Stack passionné par les nouvelles technologies, je conçois des applications web modernes, performantes et maintenables. Mon parcours en alternance et mes études en architecture des systèmes d'information m'ont permis de développer une solide expertise en
              <i>
                <b className="purple"> JavaScript, React.js, Node.js</b>
              </i>
              , et bien plus.
              <br />
              <br />
              Mais je ne me limite pas au développement web !
              <br />
              Je m'intéresse aussi au développement d'applications de tout type, qu'il s'agisse de
              <i>
                <b className="purple"> projets logiciels, de scripts automatisés </b>
              </i>
              ou d'
              <i>
                <b className="purple">expériences interactives</b>
              </i>
              .
              <br />
              <br />
              Je développe également des jeux vidéo, notamment avec
              <i>
                <b className="purple"> Unreal Engine </b>
              </i>
              et sur des plateformes comme
              <i>
                <b className="purple"> FiveM ou Roblox</b>
              </i>
              , où je crée des mécaniques personnalisées et des systèmes complets.
              <br />
              <br />
              Toujours curieux et motivé, je suis en recherche constante de nouveaux défis pour repousser mes limites et créer des projets utiles, immersifs ou simplement fun, en m'appuyant sur
              <i>
                <b className="purple">
                  {" "}
                  les technologies les plus actuelles
                </b>
              </i>
              .
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <div className="tilt-effect">
              <img src={myImg} className="img-fluid" alt="avatar" />
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Me trouver sur</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/SarouleLamoule"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/tim-p-6824831a1/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
