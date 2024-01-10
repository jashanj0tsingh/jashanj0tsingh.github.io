import { Clock } from "./heure";
import { FaAngular } from "react-icons/fa";
// import { FaRegCopyright } from "react-icons/fa6";
import { FaDocker } from "react-icons/fa";
import { FaFolder } from "react-icons/fa";
import { FaGit } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiReactivex } from "react-icons/si";

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
                <span>Full Stack Developer @ CAE</span>
              </li>
              <li className="resume-row">
                <span>
                  Programming Languages <br />
                  <ul className="languages">
                    <li>Go </li>
                    <li>C | C++ | C#</li>
                    <li>JS | TS</li>
                  </ul>
                </span>
              </li>
              <li className="resume-row">
                <span>
                  Frameworks, Libraries <br />
                  <ul className="languages">
                    <li>
                      Angular <FaAngular />
                    </li>
                    <li>
                      React <FaReact />
                    </li>
                    <li>
                      RxJS <SiReactivex />
                    </li>
                  </ul>
                </span>
              </li>
              <li className="resume-row">
                <span>
                  Tools, Technologies <br />
                  <ul className="languages">
                    <li>
                      Git <FaGit />
                    </li>
                    <li>
                      Docker <FaDocker />
                    </li>
                  </ul>
                </span>
              </li>
              <li className="resume-row">
                Socials <br />
                <ul className="links">
                  <li>
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
                  </li>
                  <li>
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
              </li>
            </ul>
          </div>
          {/* <div className="row">
            <span className="tilde">~</span>
            <span className="cmd"> ./copyright.sh</span> <br />
            <FaRegCopyright /> Jashanjot Singh, 2024
          </div> */}
          &nbsp;
          <div className="cursor"></div>
        </div>
      </div>
    </main>
  );
}
