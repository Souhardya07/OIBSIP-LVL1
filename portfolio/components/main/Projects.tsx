import React from "react";
import ProjectCard from "./sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] text-white">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/NextWebsite.png"
          title="Modern Next.js Portfolio"
          description="Through this project I learned about the utility of the Next.js to create various mordern Websites"
        />
        <ProjectCard
          src="/CardImage.png"
          title="Interactive Website Cards"
          description="I have made a fully interactive website where I have used NodeJS ExpressJS for my backend and for the frontend I have used TailwindCSS to make it more interesting...."
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Space Themed Website"
          description="This was one of the first websites that I have made using the reactJS .This basically a space themed porfolio website......."
        />
      </div>
    </div>
  );
};

export default Projects;