import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Components/Header";
import Skills from "./Components/Skills";
import Profile from "./Components/Profile";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import en from "./Data/en";
import tr from "./Data/tr";
import axios from "axios";

function App() {
  const [language, setLanguage] = useState(localStorage.getItem("language") || "tr");
  const data = language === "tr" ? tr : en;

  useEffect(() => {
    // Sayfa yüklendiğinde, localStorage'daki dil tercihini kontrol et
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  const changeLanguage = () => {
    // Dil değiştikçe burada uygun dil kodunu (örneğin "tr" veya "en") ayarlayabilirsiniz.
    setLanguage(language === "tr" ? "en" : "tr");
    // Dil değiştikçe localStorage'da da güncelle
    localStorage.setItem("language", language === "tr" ? "en" : "tr");
  };
  
  //axios ama çalışmıyor
  const [data1, setData] = useState(null);

    useEffect(() => {
      axios
        .get(language === "tr" 
            ? "https://run.mocky.io/v3/d724151f-f62e-4a0a-a608-e8e5a02c431a" 
            : "https://run.mocky.io/v3/89cd7d2a-794a-4af3-af0d-0bddaf92b500")
        .then((response) => {
          setData(response.data);
        })
        .catch((error) => {
          console.error("Veri alınamadı: ", error);
        });
    }, [language]);

    
    
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Dark modu etkinleştirme / devre dışı bırakma işlevi
    const toggleDarkMode = () => {
      setIsDarkMode(!isDarkMode);
    };

    const bodyClassName = isDarkMode ? 'dark' : '';

    return (
      <>
        <Header
          language={language}
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
