import { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  return useContext(LanguageContext);
};

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState(
      localStorage.getItem('language') || 'tr'
    );
  
    const changeLanguage = () => {
      const newLanguage = language === 'tr' ? 'en' : 'tr';
      setLanguage(newLanguage);
      localStorage.setItem('language', newLanguage);
    };
  
    const value = {
      language,
      changeLanguage,
    };
  
    return (
      <LanguageContext.Provider value={value}>
        {children}
      </LanguageContext.Provider>
    );
  };
  