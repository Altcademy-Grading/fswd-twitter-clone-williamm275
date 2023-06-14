import React from "react";
import Login from "./login/loginPage";
import Signup from "./login/signupWidget";
import Navbar from "./navbar";

const Layout = props => {
    return(
        <>
            <div className="container-fluid">
              <div className="row">
              <Navbar />
              <div className=" col-sm-6 mt-5 p-5">
              <h1 className="mt-2 ps-5"><strong>Welcome to Twitter.</strong></h1>
              <p className="px-5">Connect with your friends and other fascinating people. Get in-the-moment updates on the things that interest you.</p>
                </div>
              <div class="col-sm-6 mt-5 p-5">
                    <Login />
                    <Signup /> 
                   </div>
                 </div>
                </div>
        </>
    )
}


export default Layout;