import { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

export const LanguageProvider = ({children}) => {
    const [language, setLanguage] = useState('en');

    const changeLanguage = (newLanguage) => {
        const languageAllowed = ['en', 'pt'];

        if (newLanguage !== language && languageAllowed.includes(newLanguage)) {
            setLanguage(newLanguage);
        }
    }

    return (
        <LanguageContext.Provider value={{language, changeLanguage}}>
            {children}
        </LanguageContext.Provider> 
    )
}

export const useLanguage = () => useContext(LanguageContext);