import React from 'react';
import Events from '../../components/events';
import Footer from '../../components/footer';
import Header from '../../components/header';
import { ThemeProp } from '../../interfaces/themes';

const HomePage: React.FC<ThemeProp> = (prop) => {
    return (
        <div>
            <Header />
            <Events />
            <Footer {...prop as ThemeProp}/>
        </div>
    )
}

export default HomePage;