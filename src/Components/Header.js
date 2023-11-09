import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = ({ language, changeLanguage, data, toggleDarkMode, bodyClassName }) => {
    const backgroundColor = bodyClassName === 'dark' ? "dark:bg-dark-blue" : "bg-custom-blue"
    const logoBackgroundColor = bodyClassName === 'dark' ? "dark:bg-dark-grey" : "bg-white"
    const logoTextColor = bodyClassName === 'dark' ? "text-white" : "text-custom-blue"
    return (
        <div className={`${backgroundColor} text-custom-green h-96 flex flex-col `}>
            <div className="flex flex-row justify-between p-4 m-auto w-8/12">
                <a className="text-2xl m-0">{data.nav.name}</a>
                <div className="flex items-center space-x-4 m-0">
                    <span onClick={changeLanguage} className="cursor-pointer">
                        {language === "tr" ? "Dil Değiştir" : "Change Language"}
                    </span>
                    <span className=" text-custom-green px-4 py-2 rounded-md" onClick={toggleDarkMode}>
                        Dark Mode: {bodyClassName == "dark" ? 'On' : 'Off'}
                    </span>

                </div>
            </div>
            <div className="flex content h-4/5 items-center mx-auto w-3/4">
                <div className="flex content-text flex-col items-start w-2/4 gap-4">
                    <h1 className="text-4xl font-bold">{data["header-content"]["header-title"]}</h1>
                    <a className="text-white text-2xl mx-0">{data["header-content"]["header-info"]}</a>
                    <div className="flex content-social mx-0">
                        {data["header-content"]["header-social"].map(social => (
                            <a key={social.id} href={social.link} className={`content-links ${logoTextColor} ${logoBackgroundColor} p-2 flex items-center rounded mr-4`}>
                                <FontAwesomeIcon icon={social.img} size="lg" className="mr-2"/>
                                {social["social-name"]}
                            </a>
                        ))}
                    </div>
                </div>
                <div className="header-image w-1/4 h-4/5 rounded-full bg-cover shadow-2xl" style={{ backgroundImage: `url('https://media.licdn.com/dms/image/D4D03AQEOoH86mzdO9A/profile-displayphoto-shrink_800_800/0/1680165324377?e=2147483647&v=beta&t=i-NcUCkhlJ2KcazfbfGVcOLgh5zULPky-66NeRvVu_0')` }}></div>
            </div>
        </div>
    );
};

export default Header;
