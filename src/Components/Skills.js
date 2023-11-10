import React from "react";

const Skills = ({ skillsData, bodyClassName }) => {
    const backgroundColor = bodyClassName === 'dark' ? "dark:bg-dark-grey" : "bg-white"
    const headerTextColor = bodyClassName === 'dark' ? "text-custom-green" : "text-custom-blue"
    const skillsTextColor = bodyClassName === 'dark' ? "text-white" : "text-gray-500"
    return (
      <div className={`skills ${backgroundColor} text-2xl p-8 flex flex-row items-center justify-center`}>
      <h2 className={`text-3xl ${headerTextColor} font-bold w-4/12`}>{skillsData.titles[0]}</h2>
      <div className="grid grid-cols-2 gap-4 m-0 mt-4">
        {skillsData.skills.map((skill) => (
          <div key={skill.id} className={`flex items-center p-4 ${skillsTextColor} text-lg m-0`}>
            <img src={skill["img-link"]} alt={skill.alt} className="mr-2 w-50 h-auto ml-0 shadow-2xl" />
            <span>{skill.alt}</span>
          </div>
        ))}
      </div>
      </div>
    );
};

export default Skills;
