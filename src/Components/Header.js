import React, { useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { LanguageContext } from "../Contexts/LanguageContext";

const Header = ({ changeLanguage, data, toggleDarkMode, bodyClassName }) => {
    const language = useContext(LanguageContext)
    const backgroundColor = bodyClassName === 'dark' ? "dark:bg-dark-blue" : "bg-custom-blue"
    const logoBackgroundColor = bodyClassName === 'dark' ? "dark:bg-dark-grey" : "bg-white"
    const logoTextColor = bodyClassName === 'dark' ? "text-white" : "text-custom-blue"
    return (
        <div className={`${backgroundColor} text-custom-green sm:h-96 h-full  flex flex-col `}>
            <div className="flex sm:flex-row flex-col justify-between p-4 m-auto w-8/12">
                <a className="text-2xl m-0 text-center sm:text-left">{data.nav.name}</a>
                <div className="flex items-center space-x-4 m-0">
                    <span onClick={changeLanguage} className="cursor-pointer max-sm:text-center">
                        {language === "tr" ? "Dil Değiştir" : "Change Language"}
                    </span>
                    <span className=" text-custom-green px-4 py-2 rounded-md max-sm:text-center" onClick={toggleDarkMode}>
                        Dark Mode: {bodyClassName == "dark" ? 'On' : 'Off'}
                    </span>

                </div>
            </div>
            <div className="flex content h-4/5 items-center mx-auto w-3/4 sm:mb-0 mb-8">
                <div className="flex content-text flex-col items-start w-2/4 gap-4 max-sm:items-center max-sm:text-center">
                    <h1 className="text-4xl font-bold">{data["header-content"]["header-title"]}</h1>
                    <a className="text-white text-2xl mx-0">{data["header-content"]["header-info"]}</a>
                    <div className="flex content-social mx-0 flex-col sm:flex-row">
                        {data["header-content"]["header-social"].map(social => (
                            <a key={social.id} href={social.link} className={`content-links ${logoTextColor} ${logoBackgroundColor} p-2 flex items-center rounded mr-4 max-sm:mx-0 max-sm:mt-2`}>
                                <FontAwesomeIcon icon={social.img} size="lg" className="mr-2 max-sm:ml-0"/>
                                {social["social-name"]}
                            </a>
                        ))}
                    </div>
                </div>
                <div className="header-image w-1/4 h-4/5 rounded-xl bg-cover bg-center bg-no-repeat shadow-2xl hidden sm:block" style={{ backgroundImage: `url('https://media.licdn.com/dms/image/D4D03AQEOoH86mzdO9A/profile-displayphoto-shrink_800_800/0/1680165324377?e=2147483647&v=beta&t=i-NcUCkhlJ2KcazfbfGVcOLgh5zULPky-66NeRvVu_0')` }}></div>
            </div>
        </div>
    );
};

export default Header;
