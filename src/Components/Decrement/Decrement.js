import React, { Component } from "react";
import PropTypes from "prop-types";
import "./ContactCard.css";

class Decrement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: ""

        };
        this.subtract = this.subtract.bind(this);
    }

    subtract() {
        if(this.state.number === 0) {
            alert("No negative numbers allowed");
        }
        else {
            this.setState({
                number: this.state.number -1
            });
        }
    }
    render() {
        return (
            <div className = "Decrement">
                <h1>{this.state.number}</h1>
                <button onClick={this.subtract}>Decrement</button>
            </div>
        )
    }
}

Decrement.propType = {
    number: checkPropTypes.number.isRequired

}


export default Decrement;