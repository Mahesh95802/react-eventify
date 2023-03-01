import React from 'react';
import Events from '../../components/events';
import Footer from '../../components/footer';
import Header from '../../components/header';

const HomePage: React.FC  = () => {
    return (
        <div>
            <Header />
            <Events />
            <Footer />
        </div>
    )
}

export default HomePage;