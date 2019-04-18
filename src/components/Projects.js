import React, { Component } from 'react';
import "../style/PageProjects.css"


class Projects extends Component {
    state = {
        activeRight: false,
        activeLeft: false,
        rotateNumber: 0,
        clickCountRight: 0,
        clickCountLeft: 0,
    }
    number = 0;



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


    handleCheckVisibleProject = () => {
        let numberVisibleProject

        if ((this.state.clickCountRight > 4) && (this.state.clickCountLeft === 0)) {

            numberVisibleProject = 0
        } else if ((this.state.clickCountLeft > 0) && (this.state.clickCountRight === 0)) {
            numberVisibleProject = ((5 - this.state.clickCountLeft) - this.state.clickCountRight)
        }
        else if (this.state.clickCountRight >= this.state.clickCountLeft) {
            numberVisibleProject = this.state.clickCountRight - this.state.clickCountLeft
        } else if ((this.state.clickCountRight <= this.state.clickCountLeft) && (this.state.activeRight === true)) {
            numberVisibleProject = this.number + 1
        } else if ((this.state.clickCountRight <= this.state.clickCountLeft) && (this.state.activeLeft === true)) {
            numberVisibleProject = this.number - 1

        }
        this.number = numberVisibleProject;
    }

    rotateDeg = () => {
        if (this.number === 0) {
            return 0
        } else if (this.number === 4) {
            return 72
        } else if (this.number === 3) {
            return 144
        } else if (this.number === 2) {
            return 216
        } else if (this.number === 1) {
            return 288
        }
    }




    render() {

        this.handleCheckVisibleProject();
        let colorText = "rgba(255,255,255)"

        const styleSingleProject = {
            transform: `rotateY(${this.rotateDeg()}deg)`,
            filter: " none",
            color: colorText,
            transition: " .8s linear",
        }

        console.log(this.number)
        console.log(`to jest numer kliku w lewo ${this.state.clickCountLeft}`)
        console.log(`to jest numer kliku w prawo ${this.state.clickCountRight}`)
        return (
            <>
                <div className="containerText">
                    <h1>Projects</h1>
                    <p>I try to pay attention to every detail in the project</p>
                </div>
                <div className="containerProjects">
                    <div className="containerProjectsRotate">
                        <div className="projectsRotate" style={{ transform: `rotateY(${this.state.rotateNumber}deg)` }} >
                            <article className="singleProject one" style={this.number === 0 ? styleSingleProject : null} >
                                <div className="singleProjectImg"><h2>Tic-tac-toe</h2> <div></div>
                                </div>
                                <div className="singleProjectLink">
                                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/skofik/Game-Tic-tac-toe">kod</a>
                                    <a target="_blank" rel="noopener noreferrer" href="https://skofik.github.io/Game-Tic-tac-toe/" >live</a>
                                </div>
                                <div className="singleProjectText">
                                    <p>This is my first game where you can save the result and choose the level of difficulty</p>
                                    <p>used technologies:</p>
                                    <span>css</span> <span>js</span> <span>html</span>
                                </div>
                            </article>
                            <article className="singleProject two" style={this.number === 4 ? styleSingleProject : null}>
                                <div className="singleProjectImg"> <h2>Daily-calorie-counter</h2><div></div>
                                </div>
                                <div className="singleProjectLink">
                                    <a target="_blank" rel="noopener noreferrer" href="3">kod</a>
                                    <a target="_blank" rel="noopener noreferrer" href="3">live</a>
                                </div>
                                <div className="singleProjectText">
                                    <p> this is my first app in which you can calculate your daily calorie needs</p>
                                    <p>used technologies:</p>
                                    <span>css</span> <span>html</span><span>React</span>
                                </div>
                            </article>
                            <article className="singleProject three" style={this.number === 3 ? styleSingleProject : null}>
                                <div className="singleProjectImg"><h2>Daily-calorie-counter</h2><div></div>
                                </div>
                                <div className="singleProjectLink">
                                    <a href="">kod</a>
                                    <a href="">live</a>
                                </div>
                                <div className="singleProjectText" >
                                    <p>This is my single page application create in React Router</p>
                                    <p>wykorzystane technologie</p>
                                    <span>css</span> <span>js</span>
                                </div>
                            </article>
                            <article className="singleProject four" style={this.number === 2 ? styleSingleProject : null}>
                                <div className="singleProjectImg"><h2>Daily-calorie-counter</h2><div></div>
                                </div>
                                <div className="singleProjectLink">
                                    <a href="">kod</a>
                                    <a href="">live</a>
                                </div>
                                <div className="singleProjectText">
                                    <p>This is my first game where you can save the result and choose the level of difficulty</p>
                                    <p>wykorzystane technologie</p>
                                    <span>css</span> <span>js</span>
                                </div>
                            </article>
                            <article className="singleProject five" style={this.number === 1 ? styleSingleProject : null}>
                                <div className="singleProjectImg"><h2>in construction</h2><div></div>
                                </div>
                                <div className="singleProjectLink">
                                    <a href="">kod</a>
                                    <a href="">live</a>
                                </div>
                                <div className="singleProjectText">
                                    <p>...</p>
                                    <p>..</p>
                                    <span>..</span> <span>..</span>
                                </div>
                            </article>
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