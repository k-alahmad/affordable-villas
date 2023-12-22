import React, { useEffect } from "react";
import Header from "./components/Header";
import { useState } from "react";
import Info from "./components/Info";
import Nearby from "./components/Nearby";
import Video from "./components/Video";
import RegisterForm from "./components/RegisterForm";
import { useLocation } from "react-router-dom";
import { projectsData } from "../../data/projectsData";
const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const location = useLocation();
  const [selectedProject, setSelectedProject] = useState(0);
  useEffect(() => {
    let currentP = projectsData.find(
      (x) => x.slug == location.pathname.substring(1)
    );
    setSelectedProject(currentP?.id ?? 0);
  }, [location.pathname]);
  return (
    <div>
      <Header
        selectedProject={selectedProject}
        setSelectedProject={setSelectedProject}
      />
      <Info selectedProject={selectedProject} />
      <Nearby selectedProject={selectedProject} />
      <div className="bg-primary mt-6 flex flex-col justify-center items-center">
        <Video selectedProject={selectedProject} />
        <RegisterForm selectedProject={selectedProject} />
      </div>
    </div>
  );
};

export default HomePage;
