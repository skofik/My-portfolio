import React, { Component } from "react";
import "../style/PageSkills.css"


class Skills extends Component {


    state = {
        html5: false,
        css3: false,
        js: false,
        react: false,
        git: false,
        secondPage: false,
    }

    handleClik(e) {

        if (e.target.className === "fab fa-html5") {
            this.setState({
                html5: !this.state.html5,
                css3: false,
                js: false,
                react: false,
                git: false,
            })
        } else if (e.target.className === "fab fa-css3-alt") {
            this.setState({
                html5: false,
                css3: !this.state.css3,
                js: false,
                react: false,
                git: false,
            })

        } else if (e.target.className === "fab fa-js") {
            this.setState({
                html5: false,
                css3: false,
                js: !this.state.js,
                react: false,
                git: false,
            })
        } else if (e.target.className === "fab fa-react") {
            this.setState({
                html5: false,
                css3: false,
                js: false,
                react: !this.state.react,
                git: false,
            })
        }
        else if (e.target.className === "fab fa-git-square") {
            this.setState({
                html5: false,
                css3: false,
                js: false,
                react: false,
                git: !this.state.git
            })
        }

    }

    handleChangeText = () => {
        this.setState({
            secondPage: !this.state.secondPage
        })
    }

    changeStyle = () => {
        if (this.state.html5) {
            return ({
                color: "rgba(227,76,38)",
            })
        }
        else if (this.state.css3) {
            return ({ color: "rgba(47,128,191)" })
        }
        else if (this.state.js) {
            return ({ color: "rgba(247,223,30)" })
        }
        else if (this.state.react) {
            return ({ color: "rgba(97,218,251)" })
        } else if (this.state.git) {
            return ({ color: "rgba(0,0,0)" })
        }
        else {
            return null
        }
    }



    render() {
        const styleText = {
            backgroundColor: "rgba(0,0,0,0.5)",
            color: "white",
            fontSize: ".6em",
            textAlign: "center",
            padding: "1%"
        }

        const { html5, css3, js, react, git } = this.state

        return (
            <>
                <div className="containerText">
                    <h1>Skills</h1>
                    {this.state.secondPage ? <p> I learn and develop every day, improve my knowledge of technologies and plan to get to know:</p> : <p>I use the following technologies at the level visible in projects</p>}
                </div>
                {this.state.secondPage ?
                    <div className="skillsContainer" style={{ alignItems: "center" }}>
                        <div>
                            <i className="fas fa-database"></i>
                            <span>Sql</span>
                        </div>
                        <div>
                            <i className="fab fa-node"></i>
                            <span>Node.js</span>
                        </div>
                        <div>
                            <i className="fab fa-php"></i>
                            <span>Php</span>
                        </div>
                    </div>
                    :
                    <div className="skillsContainer">
                        <div>
                            <i className="fab fa-html5" onClick={(e) => this.handleClik(e)} style={html5 ? this.changeStyle() : null}></i>
                            <span>Html5</span>
                            {html5 ? <p style={styleText}>I'm trying to write a semantic code</p> : null}

                        </div>
                        <div>
                            <i className="fab fa-css3-alt" onClick={(e) => this.handleClik(e)} style={css3 ? this.changeStyle() : null}></i>
                            <span>Css3</span>
                            {css3 ? <p style={styleText}> I create RWD, I use a flex-box and I know the basics of Saas</p> : null}
                        </div>
                        <div>
                            <i className="fab fa-js" onClick={(e) => this.handleClik(e)} style={js ? this.changeStyle() : null}></i>
                            <span>Js</span>
                            {js ? <p style={styleText}>Applies ECMAScript 6 standards </p> : null}
                        </div>
                        <div>
                            <i className="fab fa-react" onClick={(e) => this.handleClik(e)} style={react ? this.changeStyle() : null}></i>
                            <span>React</span>
                            {react ? <p style={styleText}>I create a SPA and I know reactRouter </p> : null}
                        </div>
                        <div>
                            <i className="fab fa-git-square" onClick={(e) => this.handleClik(e)} style={git ? this.changeStyle() : null}></i>
                            <span>Git</span>
                            {git ? <p style={styleText}>I know the basics of the git </p> : null}
                        </div>
                    </div>}
                <button className="skillsSecondPart" onClick={this.handleChangeText} style={this.state.secondPage ? { right: "85%", transform: "rotate(180deg)" } : null}><i className="fas fa-arrow-right"></i></button>
            </>
        )


    }
}

export default Skills