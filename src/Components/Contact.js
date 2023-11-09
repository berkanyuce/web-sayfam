import React from "react";
import { faHackerrank, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Contact = ({ contactMessage, bodyClassName }) => {
  const backgroundColor = bodyClassName == 'dark' ? "dark:bg-dark-grey" : "bg-white"
  const contactMessageColor = bodyClassName == 'dark' ? "dark:text-white" : "text-custom-dark-blue"
  const headerTextColor = bodyClassName == 'dark' ? "dark:text-custom-light-blue" : "text-custom-blue"

  return (
    <div className={`${backgroundColor}  flex flex-col items-center p-10`}>
      <h2 className={`text-4xl ${headerTextColor} p-2 font-bold`}>{contactMessage.titles[4]}</h2>
      <span className={`text-center text-xl p-2 ${contactMessageColor}`}>{contactMessage["contact-message"]}</span>
      <a className={`text-xl ${headerTextColor} underline p-2`}>contact@berkanyuce.com</a>
      <div className="flex footer-social-media items-center space-x-4 p-2">
        <FontAwesomeIcon icon={faHackerrank} size="2xl" style={{color: "#4432cb",}}/>
        <FontAwesomeIcon icon={faLinkedin} size="2xl" style={{color: "#4432cb",}} />
      </div>
    </div>
  );
};

export default Contact;
