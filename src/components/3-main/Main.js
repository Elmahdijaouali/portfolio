
import "./main.css";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import dataProjects from "../../dataProjects";

export default function Main() {
  const [btnActive, setBtnActive] = useState("all project");
  const [arProject, setArrProject] = useState(dataProjects);

  const Card = ({
    id,
    title,
    description,
    img,
    link_project,
    link_github,
    category,
  }) => {
    return (
      <motion.article
        layout
        initial={{ transform: "scale(0)" }}
        animate={{ transform: "scale(1)" }}
        transition={{ type: "spring", damping: 8, stiffness: 50 }}
        className="card"
        key={id}
        category={category}
      >
        <figure>
          <img src={img} alt={`Screenshot of the ${title} project`} />
          <figcaption className="body-card">
            <div>
              <h2>{title}</h2>
              <p>{description}</p>
            </div>
            <div className="media-card">
              <nav>
                <a
                  className="icon"
                  href={link_project}
                  aria-label={`Live demo of ${title}`}
                >
                  <i className="fa-solid fa-link"></i>
                </a>
                <a
                  className="icon"
                  href={link_github}
                  aria-label={`GitHub repository for ${title}`}
                >
                  <i className="fa-brands fa-github icon"></i>
                </a>
              </nav>
            </div>
          </figcaption>
        </figure>
      </motion.article>
    );
  };

  const listProjects = arProject.map((project) => (
    <Card
      key={project.id}
      id={project.id}
      title={project.title}
      description={project.description}
      img={project.img}
      link_project={project.link_project}
      link_github={project.link_github}
      category={project.category}
    />
  ));

  function handlefilterProject(category) {
    const projects = dataProjects.filter((project) => {
      return project.category === category;
    });
    setArrProject(projects);
  }

  return (
    <main id="project">
      <nav className="left-section" aria-label="Project filters">
        <button
          onClick={() => {
            setBtnActive("all project");
            setArrProject(dataProjects);
          }}
          className={btnActive === "all project" ? "active" : null}
          aria-label="Show all projects"
        >
          all project
        </button>
        <button
          onClick={() => {
            setBtnActive("html");
            handlefilterProject("html");
          }}
          className={btnActive === "html" ? "active" : null}
          aria-label="Show only HTML and CSS projects"
        >
          Html & css
        </button>
        <button
          onClick={() => {
            setBtnActive("react js");
            handlefilterProject("react");
          }}
          className={btnActive === "react js" ? "active" : null}
          aria-label="Show only React.js projects"
        >
          react js
        </button>
        <button
          onClick={() => {
            setBtnActive("PHP");
            handlefilterProject("php");
          }}
          className={btnActive === "PHP" ? "active" : null}
          aria-label="Show only PHP projects"
        >
          PHP
        </button>
        <button
          onClick={() => {
            setBtnActive("laravel");
            handlefilterProject("laravel");
          }}
          className={btnActive === "laravel" ? "active" : null}
          aria-label="Show only Laravel projects"
        >
          laravel
        </button>
      </nav>
      <div className="right-section">
        <AnimatePresence>{listProjects}</AnimatePresence>
      </div>
    </main>
  );
}