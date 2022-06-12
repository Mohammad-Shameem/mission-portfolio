import React, { useEffect, useState } from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Button from "./Button/Button";

const ProjectDetails = () => {
  const { id } = useParams();
  const [detailsProject, setDetailsProject] = useState([]);
  console.log(detailsProject.live);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/Mohammad-Shameem/blankRep/main/projects.json"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const project = data.find((data) => data.id == id);
        return setDetailsProject(project);
      });
  }, [id]);

  return (
    <div className="min-h-screen grid lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-2 items-center justify-items-center w-[95%] mx-auto ">
      <figure>
        {" "}
        <Carousel
          axis="vertical"
          autoPlay="true"
          interval="1500"
          infiniteLoop="true"
          centerMode="true"
          delaySpeed="0"
        >
          <div>
            <img src={detailsProject.img} />
          </div>
          <div>
            <img src={detailsProject.img1} />
          </div>
          <div>
            <img src={detailsProject.img2} />
          </div>
        </Carousel>
      </figure>
      <div>
        <div className="card w-[400px] bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">{detailsProject.name}</h2>
            <p>{detailsProject.title}</p>
            <h2 className="card-title">Technologies : </h2>
            <div className="grid grid-cols-4 gap-3">
              {detailsProject.tecnology?.map((tech) => (
                <div className="badge badge-secondary ">
                  <h2>{tech}</h2>
                </div>
              ))}
            </div>

            {/* <a href=></a>
              <a href=></a> */}
          </div>
        </div>
        <div className="card-body w-1/2 mx-auto">
          {" "}
          <a href={detailsProject.live} target="_blank">
            <Button>Live Site</Button>
          </a>
          <a href={detailsProject.githubClient} target="_blank">
            <Button>Client</Button>
          </a>
          <a href={detailsProject.githubServer} target="_blank">
            <Button>Server</Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
