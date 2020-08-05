import React from "react";
import "./About.css";

function About(props){
    console.log(props);
    return (
        <div className="about_container">
            <span>
                “Whatever it is you're seeking won't come in the form you're expecting.”
            </span>
            <span>- Haruki Murakami</span>
        </div>
    );
}

export default About;