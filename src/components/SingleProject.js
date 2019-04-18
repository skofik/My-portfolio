
import React from "react";
import "../style/PageProjects.css"

const SingleProject = () => {


    //stworzyc automatyczne dodawanie projektow 








    return (
        <article className="singleProject one" style={this.number === 0 ? styleSingleProject : null} >
            <div className="singleProjectImg"> <h2>Tic-tac-toe</h2>
            </div>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/skofik/Game-Tic-tac-toe">kod</a>
            <a target="_blank" rel="noopener noreferrer" href="https://skofik.github.io/Game-Tic-tac-toe/" >live</a>
            <div className="singleProjectText">
                <p>This is my first game where you can save the result and choose the level of difficulty</p>
                <p>used technologies:</p>
                <span>css</span> <span>js</span> <span>html</span>
            </div>
        </article>
    );
};

export default SingleProject;
