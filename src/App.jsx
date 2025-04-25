import { createRoot } from "react-dom/client";
import Project from "./Project.jsx";
import {useEffect, useState} from "react";

const App = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getProjects() {
    const r = await fetch("/projects");
    const projectsJson = await r.json();
    setProjects(projectsJson);
    console.log(projectsJson);
    setLoading(false);
  }

  useEffect(() => {
    getProjects();
  }, [])
  
  return (
    <div className="main">
      <main className="container content">
        <div className="content__wrapper" >
          <div className="content container">
            {loading ? 
              <span>Getting your data</span> :
              projects.map((p) => <Project key={p.id} project={p}></Project>)} 
          </div>
        </div>
      </main>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
