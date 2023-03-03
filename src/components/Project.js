import React from 'react';

function Project(props) {
    return <a
            href={props.url}
            className="work-card"
            id={props.id}
          >
            {props.name}
          </a>;
}

export default Project;