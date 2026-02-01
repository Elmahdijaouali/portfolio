import "./footer.css";

export default function Footer() {
  return (
    <footer>
      <nav className="left-footer" aria-label="Footer navigation">
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#project">Project</a>
          </li>
          <li>
            <a href="#article">Article</a>
          </li>
          <li>
            <a href="#contact">Contact us</a>
          </li>
        </ul>
      </nav>
      <div className="right-footer">
        <small>&copy; {new Date().getFullYear()} Elmahadi Jaouali, All rights reserved</small>
      </div>
    </footer>
  );
}