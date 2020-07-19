import React from 'react';
import web from './Web.png';
import home from './Home.png';
import Commom from './Commom';
import { NavLink } from 'react-router-dom';


const Home = () => {
    return (
        <>
            <Commom 
                name="Grow Your Business With" 
                imgsrc={home}
                visit='/services'
                btnname='Get Started'
            />
        </>
    );
}

export default Home;