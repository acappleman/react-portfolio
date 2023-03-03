import React from 'react';
import Project from './Project';

function ProjectList(props) {
    return <section className='main-section' id='work'>
        <h2>Work</h2>
        <div className='work-section'>
            <Project url="https://acappleman.github.io/mod-1-challenge/Develop/" id="challenge-1" name="Module 1 Challenge" />
            <Project url="https://rilaey.github.io/Park-Finder/" id="challenge-2" name="Park Finder" />
            <Project url="https://backyard-sports.herokuapp.com/" id="challenge-3" name="Backyard Sports" />
            <Project url="https://acappleman.github.io/mod-1-challenge/Develop/" id="challenge-4" name="Challenge 4" />
        </div>
    </section>;
}

export default ProjectList;