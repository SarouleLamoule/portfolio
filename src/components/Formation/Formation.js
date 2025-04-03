import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import { FaGraduationCap } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import { BsAward } from "react-icons/bs";
import Card from "react-bootstrap/Card";
import { BsCalendarDate } from "react-icons/bs";

function Formation() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mon <strong className="purple">Parcours </strong> Académique
        </h1>
        <p className="project-subtitle">
        Mes principales formations et qualifications
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={12} className="formation-card">
            <Card className="quote-card-view">
              <Card.Body>
                <blockquote className="blockquote mb-0">
                  <div className="formation-item">
                    <div className="d-flex align-items-center mb-3">
                      <FaGraduationCap className="formation-icon" />
                      <h3>CESI</h3>
                    </div>
                    <p className="formation-title">
                      Manager architecture d'application et système d'information, Informatique
                    </p>
                    <p className="formation-date">
                      <BsCalendarDate /> sept. 2022 - sept. 2024
                    </p>
                    <p className="formation-details">
                      <strong>Compétences :</strong> Langages de programmation
                    </p>
                  </div>

                  <div className="formation-item mt-5">
                    <div className="d-flex align-items-center mb-3">
                      <FaGraduationCap className="formation-icon" />
                      <h3>Université de Bordeaux</h3>
                    </div>
                    <p className="formation-title">
                      Licence professionnelle, Informatique
                    </p>
                    <p className="formation-date">
                      <BsCalendarDate /> sept. 2021 - sept. 2022
                    </p>
                  </div>

                  <div className="formation-item mt-5">
                    <div className="d-flex align-items-center mb-3">
                      <FaGraduationCap className="formation-icon" />
                      <h3>Cité scolaire Bertran de Born</h3>
                    </div>
                    <p className="formation-title">
                      BTS SIO, Programmation informatique, applications spécifiques
                    </p>
                    <p className="formation-date">
                      <BsCalendarDate /> 2019 - 2021
                    </p>

                    <div className="mt-4">
                      <p className="formation-title">
                        Baccalauréat Scientifique, spécialité Sciences de la Vie et de la Terre
                      </p>
                      <p className="formation-date">
                        <BsCalendarDate /> 2019
                      </p>
                    </div>
                  </div>

                  <div className="formation-section mt-5">
                    <h2 className="formation-section-title">
                      <BsAward className="formation-icon" />
                      Certifications
                    </h2>
                    
                    <div className="certification-group mt-4">
                      <h4 className="certification-category">Certifications de Maîtrise de Compétences</h4>
                      <ul className="certification-list">
                        <li className="certification-item">
                          <MdVerified className="certification-icon" />
                          Concevoir l'architecture logicielle du SI
                        </li>
                        <li className="certification-item">
                          <MdVerified className="certification-icon" />
                          Superviser et assurer le développement des applications logicielles
                        </li>
                        <li className="certification-item">
                          <MdVerified className="certification-icon" />
                          Manager les équipes et la transformation du SI
                        </li>
                        <li className="certification-item">
                          <MdVerified className="certification-icon" />
                          Superviser le portefeuille projets de la DSI et sa mise en œuvre
                        </li>
                      </ul>
                    </div>

                    <div className="certification-group mt-4">
                      <h4 className="certification-category">Certifications MOOC Sécurité</h4>
                      <ul className="certification-list">
                        <li className="certification-item">
                          <MdVerified className="certification-icon" />
                          Panorama de la SSI
                        </li>
                        <li className="certification-item">
                          <MdVerified className="certification-icon" />
                          Sécurité de l'authentification
                        </li>
                        <li className="certification-item">
                          <MdVerified className="certification-icon" />
                          Sécurité sur Internet
                        </li>
                        <li className="certification-item">
                          <MdVerified className="certification-icon" />
                          Sécurité du poste de travail et nomadisme
                        </li>
                      </ul>
                    </div>

                    <div className="certification-group mt-4">
                      <h4 className="certification-category">Certification Linguistique</h4>
                      <ul className="certification-list">
                        <li className="certification-item">
                          <MdVerified className="certification-icon" />
                          TOEIC (Test of English for International Communication)
                        </li>
                      </ul>
                    </div>
                  </div>
                </blockquote>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Formation; 