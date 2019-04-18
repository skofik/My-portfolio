import React, { Component } from 'react';
import "../style/cardRotateHome.css";

class CardRotate extends Component {
    state = {
        rotate: false,
        changeText: false
    }

    handleRotateCard = () => {
        this.setState({
            rotate: !this.state.rotate,
        })
    }
    handleChangeText = () => {

        this.setState({
            changeText: !this.state.changeText
        })
    }



    render() {

        return (
            <div className="card">

                <div className="cardContainer" style={this.state.rotate ? { transform: "rotateY(-180deg)" } : null}>
                    <i className="fas fa-sync-alt" onClick={this.handleRotateCard}></i>
                    <div className="front"  >
                        <div>
                            <h2>About me</h2>
                            <ul>
                                <li>I'm self-taught</li>
                                <li>I love programming</li>
                                <li>I'm inquisitive</li>
                                <li>I will not fall asleep if I do not find a solution</li>
                            </ul>
                        </div>
                    </div>
                    <div className="back" >
                        <div>
                            <h2>My sources of knowledge</h2>
                            {this.state.changeText ?
                                <ul>
                                    <li>"Przewodnik dla poczatkujacych webmasterow o html5,css3 i grafice" (O`Reilly)</li>
                                    <li>"Pro Git" second edition (S.Chacon and B.Straub) </li>
                                </ul>
                                :
                                <ul>
                                    <li>courses on the udemy (samurai)</li>
                                    <li>youtube, github, stackoverflow etc.</li>
                                    <li> "Rusz glowa": JS, Html5 (O`Reily)</li>
                                    <li> "React i Redux" K. Chinnathambi</li>
                                </ul>}

                        </div>
                        <i className="fas fa-exchange-alt" style={this.state.rotate ? null : { opacity: "0" }} onClick={this.handleChangeText}></i>
                    </div>
                </div>
            </div >
        )

    }
}

export default CardRotate