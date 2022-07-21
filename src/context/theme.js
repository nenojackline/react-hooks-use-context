import React, { useState } from "react";

const ThemeContext = React.createContext();

const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState("dark");

    return <ThemeContext.Provider value={{theme, setTheme}}>{children}</ThemeContext.Provider>
};

export {ThemeProvider, ThemeContext}