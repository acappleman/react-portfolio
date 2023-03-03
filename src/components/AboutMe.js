import React from 'react';

function AboutMe(props) {
    return <section className='main-section' id='about'>
        <img
          className="headshot"
          src={require("../images/headshot-circle.png")}
          alt="Headshot"
        />
        <h2>About Me</h2>
        <div>
          <p>
            I am a registered nurse that is learning to code with the hope of
            becoming a full-stack developer. I enjoy spending time with family,
            reading, and eating good food.
          </p>
        </div>
    </section>;
}

export default AboutMe;