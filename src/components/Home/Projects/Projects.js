import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import Button from "../../Button/Button";
import "./Projects.css";
const Projects = () => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/Mohammad-Shameem/blankRep/main/projects.json"
    )
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);
  const handleNaviagation = (id) => {
    navigate(`/project/${id}`);
  };
  return (
    <>
      <div id="projects" className="">
        <h1 className="text-4xl font-bold text-center">My Projects</h1>
        <div className="w-56 h-1 bg-orange-500 mt-3  mx-auto rounded-2xl"></div>
      </div>
      <div className=" w-[98%] mx-auto  grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 mt-10">
        {projects.map((project) => (
          <div
            key={project.id}
            className="card  lg:card-side bg-base-100 shadow-xl"
          >
            <div className="container">
              <figure>
                <img className=" image" src={project.img} alt="" />
              </figure>
              <div
                onClick={() => handleNaviagation(project.id)}
                className="middle"
              >
                <p className="mb-3 font-bold">{project.name}</p>
                <Button className="all-button">Details</Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Projects;
