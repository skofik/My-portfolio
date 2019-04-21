
import React from 'react';



const SingleSkil = (props) => {


    const styleText = {
        position: "absolute",
        bottom: "0",
        width: "100%",
        backgroundColor: "rgba(0,0,0,0.5)",
        color: "white",
        fontSize: ".6em",
        textAlign: "center",
        padding: "1%",

    }
    const styleDiv = {
        position: "relative",
        paddingBottom: "10%",
        marginBottom: "15%",
    }

    const { categoryName, name, text } = props.skill

    return (

        <div style={styleDiv}>
            <i className={categoryName} onClick={(e) => props.handleClik(e)} style={props.content ? props.changeStyle() : null}></i>
            <span>{name}</span>
            {props.content ? <p style={styleText}> {text}</p> : null}

        </div>
    );
}

export default SingleSkil;