import React from "react";

const Projects = ({ projectData, bodyClassName }) => {
  const backgroundColor = bodyClassName === 'dark' ? "dark:bg-dark-green" : "bg-custom-green"
  const projectBackgroundColor = bodyClassName === 'dark' ? "dark:bg-dark-brown" : "bg-white"
  const headerTextColor = bodyClassName === 'dark' ? "dark:text-custom-green" : "text-custom-blue"
  const projectHeaderTextColor = bodyClassName === 'dark' ? "dark:text-custom-purple" : "text-custom-blue"
  const projectTextColor = bodyClassName === 'dark' ? "dark:text-white" : ""
  const projectTagBackgroundColor = bodyClassName === 'dark' ? "dark:bg-custom-purple" : "bg-custom-blue"
  const projectTagTextColor = bodyClassName === 'dark' ? "dark:text-custom-green" : "text-custom-dark-blue"

  return (
    <div className={`${backgroundColor} flex flex-col items-center justify-around p-8`}>
      <h2 className={`text-3xl sm:text-left text-center w-8/12 mb-8 ${headerTextColor} font-bold`}>{projectData.titles[3]}</h2>
      <div className="flex projects-content w-3/4 flex-col items-center space-y-4">
        {projectData.projects.map((project, index) => (
          <div className={`flex project w-11/12 mb-8 ${projectBackgroundColor} rounded-lg shadow-2xl`} key={index}>
            <div className="project-img w-1/4 rounded-l-md bg-contain bg-center	bg-no-repeat m-4 hidden sm:block" style={{ backgroundImage: `url(${project["project-img"]})` }}></div>
            <div className="project-details flex-1 py-8 px-8">
              <h3 className={`text-2xl ${projectHeaderTextColor} font-bold mb-4`}>{project["project-header"]}</h3>
              <span className={`${projectTextColor}`}>{project["project-content"]}</span>
              <div className="flex project-tags space-x-4 mt-4">
                {project["project-tags"].map((tag, tagIndex) => (
                  <a
                    key={tagIndex}
                    className={`px-4 py-2 ${projectTagBackgroundColor} text-white rounded-full m-0`}
                  >
                    {tag}
                  </a>
                ))}
              </div>
              <div className="flex project-links">
                {project["project-links"].map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    href={link.link}
                    className={`pr-4 mt-4 ml-0 mr-4 underline ${projectTagTextColor}`}
                  >
                    {link["link-details"]}
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
