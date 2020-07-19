import React from 'react';
import web from './Web.png';
import Cards from './Cards';
import Sdata from './Sdata';


const Services = () => {
    return (
        <>
            <h1 className="text-center"> Our Services</h1>
            <div className="container-fluid mb-5">
                <div className="row ">
                    <div className="col-10 mx-auto">
                        <div className="row gy-5">
                            
                               {
                                   Sdata.map((val,ind) =>
                                   {
                                       return <Cards className="card h-200" key={ind} imgsrc={val.imgsrc} title={val.title} />
                                   })
                               }

                             
                            
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Services;