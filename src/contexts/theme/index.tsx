import React, { useEffect } from "react";
import { createContext } from "react";
import { GET_THEME } from "../../constants/endpoints";
import { ThemeProviderProp } from "../../interfaces/themeProp";
import makeRequest from "../../utils/makeRequest";
// import PostsProviderProps from "../interfaces/postProviderProp";

export const ThemeContext = createContext({});

export const ThemeProvider: React.FC<ThemeProviderProp> = ({ children }) => {
    const [theme, setTheme] = React.useState<string | null>(null);

    useEffect(() => {
        makeRequest(GET_THEME.path, { method: GET_THEME.method } )
        .then((response) => {
            setTheme(response);
        })
    })
    
    return (
        <ThemeContext.Provider value={{ theme, setTheme }}> {children} </ThemeContext.Provider>
    )
}
