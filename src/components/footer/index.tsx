import React, { useEffect, useState } from 'react';
import { GET_THEME } from '../../constants/endpoints';
import { Theme, ThemeProp } from '../../interfaces/themes';
import makeRequest from '../../utils/makeRequest';

import './footer.css';

const Footer: React.FC<ThemeProp> = (prop) => {

    return (
        <footer className="footer basic-padding bg-color">
            <div className="themes">
                {
                    prop.themes 
                    &&  prop.themes.filter((theme) => theme.id !== prop.theme.id).map((theme: Theme) => (
                            <button className='theme-button' onClick={() => prop.setThemeHandler(theme)} key={theme.id} style={{ backgroundColor: theme.colorHexCode }} data-testid='theme-button'>
                                {/* {theme.colorHexCode} */}
                            </button>
                        ))
                }
            </div>
            <div className="theme-save-button">
                <button>Save Theme</button>
            </div>
        </footer>
    )
}

export default Footer;