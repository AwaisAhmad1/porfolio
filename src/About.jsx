import React from 'react';
import web from './Web.png';
import Commom from './Commom';
import { NavLink } from 'react-router-dom';

const About = () => {
    return (
        <>
            <Commom 
                name="Who Am I.?" 
                imgsrc={web}
                visit='/contact'
                btnname='Contact Us'
            />

        </>
    );
}

export default About;