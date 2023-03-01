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
                    &&  prop.themes.map((theme: Theme) => (
                            <button onClick={() => prop.setThemeHandler(theme)} key={theme.id} style={{ backgroundColor: theme.colorHexCode }}>
                                {theme.colorHexCode}
                            </button>
                        ))
                }
            </div>
            <div className="save-theme">
                <button>Save Theme</button>
            </div>
        </footer>
    )
}

export default Footer;