import React, { useState, useEffect, useContext } from "react";
import "./App.css";
import Header from "./Components/Header";
import Skills from "./Components/Skills";
import Profile from "./Components/Profile";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import en from "./Data/en";
import tr from "./Data/tr";
import axios from "axios";

import {LanguageContext} from "./Contexts/LanguageContext"

function App() {
  //const [language, setLanguage] = useState(localStorage.getItem("language") || "tr");
  const { language, setLanguage } = useContext(LanguageContext);

  
  const data = language === "tr" ? tr : en;

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  const changeLanguage = () => {
    setLanguage(language === "tr" ? "en" : "tr");
    localStorage.setItem("language", language === "tr" ? "en" : "tr");
  };
  
  //axios ama çalışmıyor
  const [data1, setData] = useState(null);

  useEffect(() => {
    axios
      .get(language === "tr" 
          ? "https://run.mocky.io/v3/3b19ae2f-fc03-4912-932c-5c5dd959eba4" 
          : "https://run.mocky.io/v3/3b19ae2f-fc03-4912-932c-5c5dd959eba4")
      .then((response) => {
        //console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.error("Veri alınamadı: ", error);
      });
  }, [language]);

    /////

    const initialDarkMode = localStorage.getItem('isDarkMode') === 'true' || false;
    const [isDarkMode, setIsDarkMode] = useState(initialDarkMode);

    useEffect(() => {
      localStorage.setItem('isDarkMode', isDarkMode.toString());
    }, [isDarkMode]);

    const toggleDarkMode = () => {
      setIsDarkMode(!isDarkMode);
    };

    const bodyClassName = isDarkMode ? 'dark' : '';

    if (data === null) {
      return <div>Loading...</div>; 
    }
    return (
      <>
        <Header
          changeLanguage={changeLanguage}
          data={data.header}
          toggleDarkMode={toggleDarkMode}
          bodyClassName={bodyClassName}
        />
        <Skills skillsData={data} bodyClassName={bodyClassName} />
        <Profile profileData={data} bodyClassName={bodyClassName} />
        <Projects projectData={data} bodyClassName={bodyClassName} />
        <Contact contactMessage={data} bodyClassName={bodyClassName} />
      </>
    );    
}

export default App;
