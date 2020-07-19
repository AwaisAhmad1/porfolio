import React from 'react';
import web from './Web.png';
import { NavLink } from 'react-router-dom';

const Commom = (props) => {
    return (
        <>
            <section id="header" className="d-flex align-items-center">

                <div className="container-fluid nav_bg">
                    <div className="row">
                        
                            <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                    <h1> {props.name} <strong className="nav-style"> <br/>        Awais Ahmad</strong> </h1>
                                    <h2> I'm Talented Software Engineer, Making Perfect Software & Websites For Your Business</h2>
                                    <div className="mt-3">

                                   
                                    <NavLink to={props.visit} className="btn-get-started" >{props.btnname}</NavLink>

                                    </div>
                                </div>
                                <div className="col-md-6 order-1 orderlg-2 animated">
                                    <img src={props.imgsrc} alt="Logo" />
                                </div>
                            </div>



                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Commom;