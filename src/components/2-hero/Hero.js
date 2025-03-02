import Lottie from "lottie-react";
import developerAnimation from "../../animations/developer.json";
import "./hero.css";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="hero" id="about">
      <div className="left-section">
        <div className="avatar">
          <div className="img-avatar">
            <motion.img
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1 }}
              src="./images/profile.jpg"
              alt=""
            />
          </div>
        </div>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          Developer Full stack , <br></br>
          El Mahdi Jaouali
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
         I’m a web developer currently studying at OFPPT.
          I have a strong foundation in web technologies, including HTML, CSS
          and tailwind css for front-end , and JavaScript for interactive
          features. I’m also experienced with React.js for building modern user
          interfaces and I am woreked by redux js for managment state . On the
          back end, I’m proficient in PHP, SQL, MySQL and Mongodb, and I’ve used
          Laravel for create full stack application or for create API.
          Additionally, I’ve learned the basics of Python and am eager to
          further explore it.
        </motion.p>
        <div className="hero-media">
          <ul>
           
            <li>
              <a href="https://www.linkedin.com/in/elmahdi-jaouali-645552321?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BBiWdIuKiS%2FirX75CYe%2FQ8Q%3D%3D">
                {" "}
                <i class="fa-brands fa-linkedin-in icon"></i>
              </a>
            </li>
            <li>
              <a href="https://github.com/Elmahdijaouali">
                {" "}
                <i class="fa-brands fa-github icon"></i>
              </a>{" "}
            </li>
          </ul>
        </div>
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
