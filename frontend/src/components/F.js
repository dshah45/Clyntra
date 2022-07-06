import emailjs from "emailjs-com";
import React from 'react';

export default function F() {

    function sendEmail(e) {
        e.preventDefault();
    emailjs.sendForm('service_sai086p', 'template_gi8r2gp', e.target, 'user_3xEH1tLZUgcDNmfdN0RYA')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }

    return(
        
            <div className="input-group">
            <form onSubmit={sendEmail}>
                    
                        <div className="form-group mx-auto">
                            <input type="text" className="form-control" placeholder="Name" name="name"/>
                        </div>
                        <div className="form-group pt-2 mx-auto">
                            <input type="email" className="form-control" placeholder="Email Address" name="email"/>
                        </div>
                       
                        <div className="col-12  pt-2 mx-auto">
                            <input type="submit" className="btn btn-default btn-light" value="Subscribe"></input>
                            
                        </div>
                         
                        {/* <button className="btn btn-default btn-light" type="button">
                      Subscribe!

                       <i class="fa fa-paper-plane" aria-hidden="true"></i>

                    </button>
                */}
                   
                </form>
                </div>
        
    )
}