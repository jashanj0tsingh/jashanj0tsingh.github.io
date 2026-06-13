"use client";

import { useEffect, useRef, useState } from "react";
import {
  FaAngular,
  FaDocker,
  FaGit,
  FaGithub,
  FaLinkedin,
  FaReact,
} from "react-icons/fa";
import { SiReactivex } from "react-icons/si";
import Clock from "./heure";

const BOOT_SEQUENCE = [
  "BIOS v2.26.1",
  "Checking memory... 8192MB OK",
  "Loading kernel modules... OK",
  "Starting network services... OK",
  "Mounting filesystems... OK",
  "jashanjotsingh@localhost:~$",
];

function Typewriter({
  text,
  speed = 45,
  onDone,
}: {
  text: string;
  speed?: number;
  onDone?: () => void;
}) {
  const [displayed, setDisplayed] = useState("");
  const onDoneRef = useRef(onDone);
  onDoneRef.current = onDone;

  useEffect(() => {
    setDisplayed("");
    let i = 0;
    const id = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) {
        clearInterval(id);
        setTimeout(() => onDoneRef.current?.(), 300);
      }
    }, speed);
    return () => clearInterval(id);
  }, [text, speed]);

  return <>{displayed}</>;
}

type Phase =
  | "boot"
  | "typing-date"
  | "typing-whoami"
  | "typing-resume"
  | "done";

export function TerminalBody() {
  const [bootLines, setBootLines] = useState<string[]>([]);
  const [phase, setPhase] = useState<Phase>("boot");

  useEffect(() => {
    let i = 0;
    let cancelled = false;
    const tick = () => {
      if (cancelled) return;
      if (i < BOOT_SEQUENCE.length) {
        const line = BOOT_SEQUENCE[i];
        i++;
        setBootLines((p) => [...p, line]);
        setTimeout(tick, 300);
      } else {
        setTimeout(() => setPhase("typing-date"), 600);
      }
    };
    setTimeout(tick, 400);
    return () => {
      cancelled = true;
    };
  }, []);

  const showDate = phase !== "boot";
  const showWhoami = ["typing-whoami", "typing-resume", "done"].includes(phase);
  const showResume = ["typing-resume", "done"].includes(phase);
  const showResumeContent = phase === "done";
  const showPrompt = phase === "done";

  return (
    <>
      {phase === "boot" && bootLines.length > 0 && (
        <div className="row boot-sequence">
          {bootLines.map((line, idx) => (
            <div
              key={idx}
              className={`boot-line${line.includes("OK") ? " boot-ok" : ""}`}
            >
              {line}
            </div>
          ))}
        </div>
      )}

      {showDate && (
        <div className="row">
          <span className="tilde">~</span>
          <span className="cmd">
            {phase === "typing-date" ? (
              <Typewriter
                text=" date"
                onDone={() => setPhase("typing-whoami")}
              />
            ) : (
              " date"
            )}
          </span>
          {phase !== "typing-date" && <Clock />}
        </div>
      )}

      {showWhoami && (
        <div className="row">
          <span className="tilde">~</span>
          <span className="cmd">
            {phase === "typing-whoami" ? (
              <Typewriter
                text=" whoami"
                onDone={() => setPhase("typing-resume")}
              />
            ) : (
              " whoami"
            )}
          </span>
          {phase !== "typing-whoami" && (
            <>
              <br />
              jashanjotsingh
            </>
          )}
        </div>
      )}

      {showResume && (
        <div className="row">
          <span className="tilde">~</span>
          <span className="cmd">
            {phase === "typing-resume" ? (
              <Typewriter
                text=" ./print-resume.sh"
                onDone={() => setPhase("done")}
              />
            ) : (
              " ./print-resume.sh"
            )}
          </span>
        </div>
      )}

      {showResumeContent && (
        <div className="row">
          <ul className="resume">
            <li className="resume-row">
              <span>Full Stack Developer @ CAE</span>
            </li>
            <li className="resume-row">
              <span>
                Programming Languages <br />
                <ul className="languages">
                  <li>Go</li>
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
      )}

      {showPrompt && (
        <div className="row">
          <div className="cursor"></div>
        </div>
      )}
    </>
  );
}
