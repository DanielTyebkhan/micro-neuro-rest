import React, {useContext, useState} from "react";
import {darkTheme, Theme} from "../Themes";
import english from "../Language/English";
import { TypeOfExpression } from "typescript";

interface Settings {
  theme: Theme;
  setTheme: () => void;
  lang: typeof english;
  setLang: (lang: string) => void;
}

const SettingsContext = React.createContext<Settings>({} as Settings);

export const useSettings = () => useContext(SettingsContext);


export const SettingsProvider = ({ children }) => {
  const [theme, setTheme] = useState(darkTheme);
  const [lang, setLang] = useState(english);

  const settings = {
    theme,
    setTheme,
    lang,
    setLang
  };

  return (
    <SettingsContext.Provider value={settings}>
      {children}
    </SettingsContext.Provider>
  )
};
