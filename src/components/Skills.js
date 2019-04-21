import React, { Component } from "react";
import "../style/PageSkills.css"
import SingleSkil from "./SingleSkil"

class Skills extends Component {

    state = {
        html5: false,
        css3: false,
        js: false,
        react: false,
        git: false,
        sql: false,
        node: false,
        php: false,
        java: false,
        secondPage: false,
    }
    skills = {
        one: {
            categoryName: "fab fa-html5",
            name: "Html5",
            text: "I'm trying to write a semantic code"
        },
        two: {
            categoryName: "fab fa-css3-alt",
            name: "css3",
            text: "I use a flex-box and create RWD "
        },
        three: {
            categoryName: "fab fa-js",
            name: "js",
            text: "Applies ECMAScript 6 standards"
        },
        four: {
            categoryName: "fab fa-react",
            name: "react",
            text: "I create a SPA and I know reactRouter "
        },
        five: {
            categoryName: "fab fa-git-square",
            name: "git",
            text: "I know the basics of the git"
        },
        six: {
            categoryName: "fas fa-database",
            name: "sql",
            text: "I want to learn"
        },
        seven: {
            categoryName: "fab fa-node",
            name: "node.js",
            text: "I want to learn"
        },
        eight: {
            categoryName: "fab fa-php",
            name: "php",
            text: "I want to learn"
        },
        nine: {
            categoryName: "fab fa-java",
            name: "java",
            text: "I want to learn"
        }

    }

    // function change state
    handleClik(e) {

        let html5 = false;
        let css3 = false;
        let js = false;
        let react = false;
        let git = false;
        let sql = false;
        let node = false;
        let php = false;
        let java = false;

        if (e.target.className === "fab fa-html5") html5 = !this.state.html5;
        else if (e.target.className === "fab fa-css3-alt") css3 = !this.state.css3;
        else if (e.target.className === "fab fa-js") js = !this.state.js;
        else if (e.target.className === "fab fa-react") react = !this.state.react;
        else if (e.target.className === "fab fa-git-square") git = !this.state.git;
        else if (e.target.className === "fas fa-database") sql = !this.state.sql;
        else if (e.target.className === "fab fa-node") node = !this.state.node;
        else if (e.target.className === "fab fa-php") php = !this.state.php;
        else if (e.target.className === "fab fa-java") java = !this.state.java;

        this.setState({
            html5,
            css3,
            js,
            react,
            git,
            node,
            sql,
            php,
            java
        })

    }

    //function change page 

    handleChangeText = () => {
        this.setState({
            secondPage: !this.state.secondPage
        })
    }

    //function change color icon
    changeStyle = () => {
        const { html5, css3, js, react, git, sql, node, php, java } = this.state

        if (html5) return ({ color: "rgba(227,76,38)" })
        else if (css3) return ({ color: "rgba(47,128,191)" })
        else if (js) return ({ color: "rgba(247,223,30)" })
        else if (react) return ({ color: "rgba(97,218,251)" })
        else if (git) return ({ color: "rgba(0,0,0)" })
        else if (sql) return ({ color: "rgba(66,139,199)" })
        else if (node) return ({ color: "rgba(77,141,69)" })
        else if (php) return ({ color: "rgba(119,123,179)" })
        else if (java) return ({ color: "rgba(233,35,46)" })
    }



    render() {


        const { html5, css3, js, react, git, sql, node, php, java, secondPage } = this.state;
        const { one, two, three, four, five, six, seven, eight, nine } = this.skills

        return (
            <>
                <div className="containerText">
                    <h1>Skills</h1>
                    {secondPage ? <p> I improve my knowledge of technologies and plan to get to know:</p> : <p>I use the following technologies at the level visible in projects</p>}
                </div>
                {secondPage ?
                    <div className="skillsContainer" >
                        <SingleSkil handleClik={this.handleClik.bind(this)} content={sql} changeStyle={this.changeStyle} skill={six} />
                        <SingleSkil handleClik={this.handleClik.bind(this)} content={node} changeStyle={this.changeStyle} skill={seven} />
                        <SingleSkil handleClik={this.handleClik.bind(this)} content={php} changeStyle={this.changeStyle} skill={eight} />
                        <SingleSkil handleClik={this.handleClik.bind(this)} content={java} changeStyle={this.changeStyle} skill={nine} />
                    </div>
                    :
                    <div className="skillsContainer">
                        <SingleSkil handleClik={this.handleClik.bind(this)} content={html5} changeStyle={this.changeStyle} skill={one} />
                        <SingleSkil handleClik={this.handleClik.bind(this)} content={css3} changeStyle={this.changeStyle} skill={two} />
                        <SingleSkil handleClik={this.handleClik.bind(this)} content={js} changeStyle={this.changeStyle} skill={three} />
                        <SingleSkil handleClik={this.handleClik.bind(this)} content={react} changeStyle={this.changeStyle} skill={four} />
                        <SingleSkil handleClik={this.handleClik.bind(this)} content={git} changeStyle={this.changeStyle} skill={five} />
                    </div>}
                <button className="skillsSecondPart" onClick={this.handleChangeText} style={secondPage ? { right: "85%", transform: "rotate(180deg)" } : null}><i className="fas fa-arrow-right"></i></button>
            </>
        )


    }
}

export default Skills