import React from "react";
import { createContext } from "react";
import { ThemeProviderProp } from "../../interfaces/themeProp";
// import PostsProviderProps from "../interfaces/postProviderProp";

export const ThemeContext = createContext({});

export const ThemeProvider: React.FC<ThemeProviderProp> = ({ children }) => {
    const [theme, setTheme] = React.useState<string>('');
    return (
        <ThemeContext.Provider value={{ theme, setTheme }}> {children} </ThemeContext.Provider>
    )
}
