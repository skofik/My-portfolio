import React, { Component } from 'react';
import "../style/PageProjects.css"
import SingleProject from './SingleProject';


class Projects extends Component {
    state = {
        activeRight: false,
        activeLeft: false,
        rotateNumber: 0,
        clickCountRight: 0,
        clickCountLeft: 0,
    }
    number = 0;
    projects = {
        one: {
            id: 0,
            orderName: "singleProject one",
            title: "Tic-tac-toe",
            code: "https://github.com/skofik/Game-Tic-tac-toe",
            live: "https://skofik.github.io/Game-Tic-tac-toe/",
            text: "This is my first game where you can save the result and choose the level of difficulty",
            technologies: ["css", "js", "html"],

        },
        two: {
            id: 4,
            orderName: "singleProject two",
            title: "Calorie-counter",
            code: "4",
            live: "4",
            text: "this is my first app in which you can calculate your daily calorie needs",
            technologies: ["css", "html", "react"]
        },
        three: {
            id: 3,
            orderName: "singleProject three",
            title: "Portfolio",
            code: "3",
            live: "3",
            text: "This is my single page application create in React",
            technologies: ["css", "html", "react"]
        },
        four: {
            id: 2,
            orderName: "singleProject four",
            title: "Gallery 3D",
            code: "2",
            live: "2",
            text: "You can choose number picture which you want see",
            technologies: ["css", "html", "react"]
        },
        five: {
            id: 1,
            orderName: "singleProject five",
            title: "page sewing",
            code: "2",
            live: "2",
            text: "not yet completed",
            technologies: ["css", "html", "react"]
        },
    }


    // function change picture 
    handleChangePicture = (e) => {

        if ((this.number > 3) && (e.target.className === "fas fa-arrow-right")) {
            this.setState({
                rotateNumber: this.state.rotateNumber + 72,
                clickCountRight: 0,
                clickCountLeft: 0,
                activeRight: false,
                activeLeft: false,
            })
        } else if ((this.number === 1) && (e.target.className === "fas fa-arrow-left")) {
            this.setState({
                rotateNumber: this.state.rotateNumber - 72,
                clickCountLeft: 0,
                clickCountRight: 0,
                activeLeft: false,
                activeRight: false,
            })
        }
        else if (e.target.className === "fas fa-arrow-right") {
            this.setState({
                rotateNumber: this.state.rotateNumber + 72,
                clickCountRight: this.state.clickCountRight + 1,
                activeRight: true,
            })

        } else if (e.target.className === "fas fa-arrow-left") {
            this.setState({
                rotateNumber: this.state.rotateNumber - 72,
                clickCountLeft: this.state.clickCountLeft + 1,
                activeLeft: true,
                activeRight: false,

            })
        }
    }

    // function that selects the project which is at the front
    handleCheckVisibleProject = () => {
        let numberVisibleProject
        const { clickCountLeft, clickCountRight, activeLeft, activeRight } = this.state;

        if ((clickCountRight > 4) && (clickCountLeft === 0)) {
            numberVisibleProject = 0
        } else if ((clickCountLeft > 0) && (clickCountRight === 0)) {
            numberVisibleProject = ((5 - clickCountLeft) - clickCountRight)
        } else if (clickCountRight >= clickCountLeft) {
            numberVisibleProject = clickCountRight - clickCountLeft
        } else if ((clickCountRight <= clickCountLeft) && (activeRight === true)) {
            numberVisibleProject = this.number + 1
        } else if ((clickCountRight <= clickCountLeft) && (activeLeft === true)) {
            numberVisibleProject = this.number - 1
        }
        this.number = numberVisibleProject;
    }




    render() {

        this.handleCheckVisibleProject();
        const { one, two, three, four, five } = this.projects
        return (
            <>
                <div className="containerText">
                    <h1>Projects</h1>
                    <p>I try to pay attention to every detail in the project</p>
                </div>
                <div className="containerProjects">
                    <div className="containerProjectsRotate">
                        <div className="projectsRotate" style={{ transform: `rotateY(${this.state.rotateNumber}deg)` }} >

                            <SingleProject number={this.number} project={one} />
                            <SingleProject number={this.number} project={two} />
                            <SingleProject number={this.number} project={three} />
                            <SingleProject number={this.number} project={four} />
                            <SingleProject number={this.number} project={five} />
                        </div>
                    </div>
                    <i className="fas fa-arrow-right" onClick={this.handleChangePicture}></i>
                    <i className="fas fa-arrow-left" onClick={this.handleChangePicture}></i>
                </div>
            </>
        )
    }


}

export default Projects