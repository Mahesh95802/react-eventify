import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/homePage';

import './App.css';
import NotFoundPage from './pages/notFoundPage';
import EventPage from './pages/eventPage';
import makeRequest from './utils/makeRequest';
import { GET_THEME, PUT_THEME } from './constants/endpoints';
import { Theme, ThemeProp, ThemesResponse } from './interfaces/themes';

const App = () => {
  const [theme, setTheme] = React.useState<Theme | null>(null)
  const [themes, setThemes] = React.useState<Theme[] | null>(null);

  useEffect(() => {
    makeRequest(GET_THEME.path, { method: GET_THEME.method })
      .then((response: ThemesResponse) => {
        setThemes(response.themes)
        const choosentheme: Theme = response.themes.find(theme => theme.id === response.preferredThemeId) || { id: 0, colorHexCode: 'black' }
        document.querySelectorAll('.bg-color').forEach((e) => e.setAttribute("style", `background-color: ${choosentheme.colorHexCode}` ))
        setTheme(choosentheme || {id: 0, colorHexCode: '#00000'})
      })
  }, [])

  const setThemeHandler = (theme: Theme) => {
    console.log(theme)
    makeRequest(PUT_THEME.path, { method: PUT_THEME.method, body: JSON.stringify({ preferredThemeId: theme.id }) } )
    document.querySelectorAll('.bg-color').forEach((e) => e.setAttribute("style", `background-color: ${theme.colorHexCode}` ))
    // document.querySelector('.bg-color')
    setTheme(theme)
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <ThemeContext.Provider value={}> */}
          <Route path="/" element={<HomePage {...{ theme, themes, setThemeHandler } as ThemeProp}/>} />
          <Route path='/:id' element={<EventPage {...{ theme, themes, setThemeHandler } as ThemeProp}/>} />
          <Route path="*" element={<NotFoundPage {...{ theme, themes, setThemeHandler } as ThemeProp}/>} />
          {/* </ThemeContext.Provider> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
