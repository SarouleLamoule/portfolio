import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import karma from "../../Assets/Projects/karma.png";
import animeo from "../../Assets/Projects/animeo.png";
import gtarp from "../../Assets/Projects/default.png";
import { FaBriefcase, FaGraduationCap, FaTools } from "react-icons/fa";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container> 
        {/* Projets Professionnels */}
        <h2 className="project-subheading">
          <FaBriefcase style={{ marginRight: "10px" }} /> Projets professionnels
        </h2>
        <p className="project-description">
          Au cours de mes différentes alternances, j'ai eu l'opportunité de travailler sur des projets complexes et variés dans des contextes professionnels exigeants.
          Bien que ces projets soient soumis à des clauses de confidentialité, ils m'ont permis de développer des compétences concrètes dans des domaines clés :
        </p>

        <div className="project-section-content">
          <div className="project-skills">
            • Développement web d'<span className="purple">applications internes complexes</span><br/>
            • Refonte complète d'applications <span className="purple">Angular</span><br/>
            • <span className="purple">CI/CD</span> avec <span className="purple">GitLab</span> et <span className="purple">GitHub Actions</span><br/>
            • <span className="purple">Sécurité</span> et gestion des accès<br/>
            • Mise en place et gestion d'<span className="purple">infrastructure</span> (<span className="purple">Docker</span>, <span className="purple">VPS</span>, <span className="purple">reverse proxy</span>…)<br/>
            • Outils métiers sur mesure
          </div>

          <div className="project-tech-stack">
            💡 Ces projets ont impliqué l'utilisation de technologies comme <span className="purple">Angular</span>, <span className="purple">Node.js</span>, <span className="purple">.NET</span>, <span className="purple">Docker</span>, et <span className="purple">GitLab CI/CD</span>, dans un environnement orienté production, avec des pratiques de développement rigoureuses.
          </div>

          <p className="project-subtitle">
            Voici quelques exemples significatifs parmi les nombreux projets sur lesquels j'ai travaillé :
          </p>

          <div className="project-example">
            <h3>Application mobile de gestion viticole</h3>
            • Application multiplateforme réalisée sur une durée d'un an en <span className="purple">Xamarin</span><br/>
            • Simplification de la gestion quotidienne des viticulteurs bordelais<br/>
            • Gestion des <span className="purple">stocks</span>, <span className="purple">interventions</span>, <span className="purple">traçabilité</span><br/>
            • <span className="purple">Synchronisation cloud</span> et travail hors-ligne
          </div>

          <div className="project-example">
            <h3>Coffre-fort numérique</h3>
            • Développement d'une solution sécurisée de gestion des <span className="purple">identifiants</span><br/>
            • Système de <span className="purple">chiffrement</span> des données sensibles<br/>
            • Gestion fine des <span className="purple">accès</span> et des <span className="purple">droits</span><br/>
            • Interface d'<span className="purple">administration</span> complète
          </div>

          <div className="project-example">
            <h3>Refonte logiciel interne</h3>
            • Refonte complète d'un logiciel interne d'entreprise<br/>
            • Technologies : <span className="purple">.NET</span>, <span className="purple">SQL Server</span>, <span className="purple">WPF</span><br/>
            • Détails confidentiels
          </div>
        </div>

        {/* Projets Académiques */}
        <h2 className="project-subheading">
          <FaGraduationCap style={{ marginRight: "10px" }} /> Projets académiques
        </h2>
        <p className="project-description">
          Durant ma formation, j'ai participé à de nombreux projets pédagogiques, seul ou en équipe. Voici quelques exemples représentatifs parmi les différents projets réalisés :
        </p>

        <div className="project-section-content">
          <div className="project-example">
            <h3>Projets académiques notables</h3>
            • Application Android de gestion d'entreprise de bus (<span className="purple">Android Studio</span>, <span className="purple">Java</span>)<br/>
            - Gestion des lignes, conducteurs, véhicules et horaires<br/>
            - Base de données locale <span className="purple">SQLite</span><br/>
            - Interface utilisateur <span className="purple">Material Design</span><br/>
            <br/>
            • Blog avec CMS personnalisé (<span className="purple">PHP</span> & <span className="purple">MySQL</span>)<br/>
            • API REST (<span className="purple">Node.js</span> / <span className="purple">Express</span>)<br/>
            • Application de gestion (<span className="purple">C#</span> avec <span className="purple">WPF</span>)<br/>
            • CRM (<span className="purple">Laravel</span>)<br/>
            • Dashboard système (<span className="purple">Python</span> / <span className="purple">Flask</span>)<br/>
            • App météo (<span className="purple">React</span>)
          </div>
        </div>

        {/* Projets Personnels */}
        <h2 className="project-subheading">
          <FaTools style={{ marginRight: "10px" }} /> Projets personnels
        </h2>
        <p className="project-description">
          Je suis également très actif sur des projets perso, notamment dans les domaines communautaires, le divertissement et la passion :
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={animeo}
              isBlog={false}
              title="🎥 Animéo — animeovf.fr"
              description="Membre de l'équipe de développement d'Animéo, une plateforme communautaire autour des animés. Contribution à l'architecture interne et création d'outils complémentaires."
              demoLink="https://animeovf.fr"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={karma}
              isBlog={false}
              title="🤖 Karma – Bot Discord"
              description="Bot Discord exclusif pour la communauté Animéo avec système de Karma/Coins, Clans, événements et fonctions avancées. Stack : Node.js, MongoDB, Discord.js, GitHub Actions."
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gtarp}
              isBlog={false}
              title="🚗 Saroule RP – Serveur GTA RP privé"
              description="Projet personnel de serveur GTA RP développé entièrement from scratch dans un but d'apprentissage autonome (Infrastructure complète FiveM, Scripts personnalisés en Lua)"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gtarp}
              isBlog={false}
              title="🎮 Serveur Cache-Cache GTA RP"
              description="Projet fun développé pour jouer entre amis, proposant des sessions de cache-cache multijoueur dans des environnements personnalisés. ( Projet en cours )"
              demoLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
