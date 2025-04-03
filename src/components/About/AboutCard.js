import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Salut, moi c'est <span className="purple">Tim</span>, développeur Full Stack passionné.
            <br />
            <br />
            Formé dans des cursus spécialisés en <span className="purple">développement logiciel</span> et en <span className="purple">architecture des systèmes d'information</span>, j'ai pu évoluer en <span className="purple">alternance</span> sur des projets concrets, ce qui m'a permis de développer de solides compétences techniques et humaines dès mes débuts.
            <br />
            <br />
            <strong>🧠 Mon profil</strong>
            <br />
            Curieux et polyvalent, je maîtrise principalement <span className="purple">JavaScript</span>, <span className="purple">React</span>, <span className="purple">Node.js</span>, ainsi que des bases de données comme <span className="purple">MongoDB</span> et <span className="purple">PostgreSQL</span>.
            <br />
            J'ai aussi des bases solides dans plusieurs autres langages et outils comme <span className="purple">Python</span>, <span className="purple">Lua</span>, <span className="purple">C#</span>, <span className="purple">Docker</span>, <span className="purple">Unreal Engine</span>, <span className="purple">PHP</span>, et bien d'autres.
            <br />
            <br />
            <strong>🔧 Ce que je développe</strong>
            <br />
            J'ai été formé au <span className="purple">développement web</span>, mais mon terrain de jeu se trouve surtout dans la création d'<span className="purple">applications interactives</span>, comme :
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Des <span className="purple">bots Discord</span> pour gérer ou animer des communautés
            </li>
            <li className="about-activity">
              <ImPointRight /> Des <span className="purple">jeux vidéo</span>, notamment via <span className="purple">Unreal Engine</span> et <span className="purple">FiveM</span>
            </li>
            <li className="about-activity">
              <ImPointRight /> Des <span className="purple">outils sur-mesure</span> pour résoudre des besoins précis ou automatiser des tâches
            </li>
          </ul>
          <p style={{ textAlign: "justify" }}>
            Toujours en <span className="purple">veille</span>, j'aime <span className="purple">apprendre</span>, <span className="purple">expérimenter</span>, et relever de nouveaux <span className="purple">défis techniques</span> ou <span className="purple">créatifs</span>.
          </p>

          <p style={{ color: "rgb(155 126 172)" }}>
            "J'code pas pour montrer ce que je sais faire, mais pour découvrir ce que je peux encore apprendre."{" "}
          </p>
          <footer className="blockquote-footer">Tim</footer>

          <p style={{ color: "rgb(155 126 172)", marginTop: "20px" }}>
            "Je ne cherche pas juste à coder, je cherche à créer des choses qui comptent."{" "}
          </p>
          <footer className="blockquote-footer">Tim</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

