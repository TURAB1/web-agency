import React from "react";
import { Link } from "react-router-dom";
import "../styles/not-found.css";

const NotFound = () => {
  return <div className="not-found">
    <h1 >Sorry, Page Not Found</h1>
    <p >sorry ,we can not find the page you are looking for.<br /> Perherps you've mistyped the URL? Be sure to check
     <br/>your spelling.
     </p>
   
     <div className="go-to-home" >
      <Link to="/home" className="link">Go to Home</Link>
      
     </div>
  </div >
};

export default NotFound;
