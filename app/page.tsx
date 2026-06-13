import { FaFolder } from "react-icons/fa";
import { TerminalBody } from "./terminal-body";

export default function Home() {
  const style = { color: "#2196F3", fontSize: "1em", paddingRight: "0.5em" };

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
            <FaFolder style={style} /> localhost
          </span>
        </div>
        <div className="terminal-body">
          <TerminalBody />
        </div>
      </div>
    </main>
  );
}
