import React from 'react';


const Contact = () => {
    return (
        <> <div className="mt-5">
            <h1 className="text-center"> Welcome to Contact </h1>
        </div>
            <div className="container container_div">
                <div className="row">
                    <div className="col-md-6 col-sm-10 mx-auto">
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">First Name</label>
                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Name" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Phone</label>
                            <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="+923217894561" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Email</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="abc@xyz.com" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlTextarea1" className="form-label">Message</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <div className=" mx-auto align" >
                            <button class="btn-get-started btn-block">Submit</button>
                        </div>
                        </div>
                        
                       
                    </div>
                </div>
            

        </>
    )
}

export default Contact;