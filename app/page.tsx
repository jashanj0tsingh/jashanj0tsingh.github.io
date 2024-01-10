import { Clock } from "./heure";
import { FaFolder } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
// import { FaGolang } from "react-icons/fa6";

export default function Home() {
  const now = new Date();
  const style = { color: "#2196F3", fontSize: "1em" };

  return (
    <main className="container">
      <div className="terminal-container">
        <div className="terminal-title-bar">
          <div className="window-controls">
            <div className="window-control close"></div>
            <div className="window-control minimize"></div>
            <div className="window-control maximize"></div>
          </div>
          <span className="terminal-title">
            <FaFolder style={style} /> &nbsp; user@localhost ~
          </span>
        </div>
        <div className="terminal-body">
          <div className="row">
            <span className="tilde">~</span>
            <span className="cmd"> date</span>
            <Clock time={now.toLocaleString("en-US")} />
          </div>
          <div className="row">
            <span className="tilde">~</span>
            <span className="cmd"> whoami</span> <br />
            jashanjotsingh
          </div>
          <div className="row">
            <span className="tilde">~</span>
            <span className="cmd"> ./print-resume.sh</span>
          </div>
          <div className="row">
            <ul className="resume">
              <li className="resume-row">
                <span>Full Stack Developer @ CAE | Montréal, QC</span>
              </li>
              <li className="resume-row">
                <span>
                  Programming Languages |=&gt; Go | C# | TypeScript | JavaScript
                  | C++
                </span>
              </li>
              <li className="resume-row">
                <span>Frameworks, Libraries |=&gt; Angular | React | RxJS</span>
              </li>
              <li className="resume-row">
                <span>Tools, Technologies &nbsp; |=&gt; Git | Docker</span>
              </li>
              <li className="resume-row">
                <span>
                  <a
                    href="https://www.linkedin.com/in/jashanj0tsingh/"
                    className="socials"
                  >
                    LinkedIn
                  </a>
                  &nbsp;
                  <FaLinkedin />
                </span>
                &emsp;
                <span>
                  <a
                    href="https://www.github.com/jashanj0tsingh/"
                    className="socials"
                  >
                    GitHub
                  </a>
                  &nbsp;
                  <FaGithub />
                </span>
              </li>
            </ul>
          </div>
          &nbsp;
          <div className="cursor"></div>
        </div>
      </div>
    </main>
  );
}
