import React from "react";
import "./projectComponent.css";

const ProjectComponent = ({data}) => {
  let imageAlignment =
    data.alignment === "right"
      ? "project-container right"
      : "project-container left";
  let projectImage = data.image;
  return (
    <div className={imageAlignment}>
      <div className="project-img-container">
        <img src={projectImage} alt="project" />
        <ul>
          {data.tools.map((tool, index) => (
            <li key={index}>{tool}</li>
          ))}
        </ul>
      </div>
      <div className="text-container">
        <h3>{data.title}</h3>
        <p>{data.description}</p>
      </div>
    </div>
  );
};

export default ProjectComponent;
