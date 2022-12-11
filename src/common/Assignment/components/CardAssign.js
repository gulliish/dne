import React from "react";
import './tests.css'

class Button extends React.Component {
    render() {
        return (
            <button className="button button-primary">
                <i className="fa fa-chevron-right"></i> Find out more
            </button>
        )
    }
}

class CardBody extends React.Component {
    render() {
        return (
            <div className="card-body">
                <p className="date">March 20 2015</p>

                <h2>{this.props.title}</h2>

                <p className="body-content">{this.props.text}</p>

                <Button />
            </div>
        )
    }
}

class CardAssign extends React.Component {
    render() {
        return (
            <article className="card">
                <CardBody title={'What happened in Thialand?'} text={'Kayaks crowd Three Sister Springs, where people and manatees maintain controversial coexistence'} />
            </article>
        )
    }
}

export default CardAssign;