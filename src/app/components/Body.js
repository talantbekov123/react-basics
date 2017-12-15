import React from 'react';



export class Body extends React.Component {

    constructor(props) {
        super();
        this.state = {
            age: props.age,
            status: 0
        }
    }

    onMakeOlder() {
        this.setState({
            age: this.state.age + 3
        })
    }

    render() {
        return(
            <div>
                <p> Name: {this.props.name} </p>
                <p> Age: {this.state.age} </p>
                <button onClick = {() => this.onMakeOlder()} className="btn btn-primary"> get older </button>
            </div>
        )
    }
}

Body.propTypes = {
    name: React.PropTypes.string,
    age: React.PropTypes.number
}