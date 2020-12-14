import React from 'react';
import { Link } from "react-router-dom"; 
import me from '../assets/IMG_3611.JPG';

const About = () => {
    return (
   
        <main className="container">
      {/* <!-- first row  --> */}
      <div className="row mt-5">
        <div className="col-sm-9 border border-white bg-white mt-1">
          <h1 className="mt-4">About Me</h1>
          <hr/>

          {/* <!-- second row  --> */}
          <div className="row">
            {/* <!-- image column  --> */}
            <div className="col-sm-4">
                <img className = "img-fluid" id= "meImg" src={me} alt= "me smiling"/>
            </div>
            <div className = "col-sm-8">
               <h3> Hi there!</h3>
                <p>
                    My name is Ashley Brown, a software engineer with a knowledge of both 
                    front-end and back-end technologies. I primarily use React.js to create,
                    improve and maintain web applications. The objective of this portfolio is 
                    to showcase my web development experience using various frameworks and libraries. 
                </p>
                <p>
                    If I am not coding you will find me at a concert or sporting event. As a graduate 
                    from Clemson University <strong><emphasis> (GO TIGERS!)</emphasis></strong> I breathe 
                    team spirit which I bring to all my projects. I am constanly adding outfit ideas to my Pinterest boards and create excel files 
                    of shoe releases. I enjoy creating music playlist to have a soundtrack to my life. Ask me for a playlist. 
                </p>
                <p id= "wrap">
                    Explore my portfolio visting the <Link to= "/portfolio">Portfolio Page</Link>. Looking forward to hearing from you,
                    find my contact information <Link to="/contact">here</Link>. 
                    the information given on my contact page. 
                </p>
            </div>
              
          </div>
        </div>
      </div>
    </main>
        
    );
};

export default About;