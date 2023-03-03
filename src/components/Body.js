import React from 'react';
import AboutMe from './AboutMe';
import ProjectList from './ProjectList';

function Body(props) {
    return <main>
        <AboutMe />
        <ProjectList />
    </main>;
}

export default Body;