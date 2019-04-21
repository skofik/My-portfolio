
import React from "react";
import "../style/PageProjects.css"

const SingleProject = (props) => {



    const rotateDeg = () => {
        if (props.number === 0) {
            return 0
        } else if (props.number === 4) {
            return 72
        } else if (props.number === 3) {
            return 144
        } else if (props.number === 2) {
            return 216
        } else if (props.number === 1) {
            return 288
        }
    }

    const styleSingleProject = {
        transform: `rotateY(${rotateDeg()}deg)`,
        filter: " none",
        color: "rgba(255,255,255)",
        transition: " .8s linear",
    }


    const { orderName, title, code, live, text, technologies, id } = props.project;



    return (
        <article className={orderName} style={props.number === id ? styleSingleProject : null} >
            <div className="singleProjectImg"><h2>{title}</h2> <div></div>
            </div>
            <div className="singleProjectLink">
                <a target="_blank" rel="noopener noreferrer" href={code}>code</a>
                <a target="_blank" rel="noopener noreferrer" href={live} >live</a>
            </div>
            <div className="singleProjectText">
                <p>{text}</p>

                {technologies.map(technology => (<span key={technology}>{technology}</span>))}
            </div>
        </article>
    );
};

export default SingleProject;
