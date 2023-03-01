import React from 'react';

import './footer.css';

const Footer = () => {
    return (
        <footer className="footer basic-padding">
            <div className="themes">
                <button>Red</button>
                <button>Blue</button>
                <button>Green</button>
            </div>
            <div className="save-theme">
                <button>Save Theme</button>
            </div>
        </footer>
    )
}

export default Footer;