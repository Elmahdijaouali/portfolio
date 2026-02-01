import Lottie from "lottie-react";
import developerAnimation from "../../animations/developer.json";
import "./hero.css";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="hero" id="about">
      <div className="left-section">
        <figure className="avatar">
          <div className="img-avatar">
            <motion.img
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1 }}
              src="./images/profile.jpg"
              alt="El Mahdi Jaouali's profile picture"
            />
          </div>
        </figure>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          Developer Full stack , <br></br>
          El Mahdi Jaouali
        </motion.h1>
        <motion.article
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <p>
            I’m a passionate Full-Stack Developer specializing in Laravel,
            React.js, and Express.js, with strong experience using PHP,
            JavaScript, Python, Java, MySQL, MongoDB, and Tailwind CSS. I enjoy
            designing and building scalable, high-quality web applications that
            solve real-world problems.
          </p>
          <p>
            I am currently pursuing a Bachelor’s degree in Génie Informatique et
            Gouvernance Digitale at EST Kénitra, where I continue to expand my
            skills in software engineering, project management, and digital
            governance.
          </p>
          <p>
            I thrive in Agile environments, enjoy teamwork, and love learning new
            technologies. I’m also actively improving my knowledge in Java,
            Spring Boot, UML, and Software Testing.
          </p>
          <p>
            I’m open to opportunities as a Full Stack Engineer, Frontend
            Developer, or Backend Developer, where I can contribute to
            impactful projects and grow as a developer.
          </p>
        </motion.article>
        <nav className="hero-media" aria-label="Social media links">
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/elmahdi-jaouali-645552321?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BBiWdIuKiS%2FirX75CYe%2FQ8Q%3D%3D"
                aria-label="LinkedIn profile of El Mahdi Jaouali"
              >
                <i className="fa-brands fa-linkedin-in icon"></i>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Elmahdijaouali"
                aria-label="GitHub profile of El Mahdi Jaouali"
              >
                <i className="fa-brands fa-github icon"></i>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="right-section">
        <Lottie
          className="animationDeveloper"
          animationData={developerAnimation}
        />
      </div>
    </section>
  );
}
