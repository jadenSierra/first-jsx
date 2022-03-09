import React , {Component} from "react";

class Person extends Component {
    render() {

        const {lastName, firstName, age, hairColor} = this.props;

        return (
        <>
        <h1>{lastName},{firstName}</h1>
        <p>Age: {age}</p>
        <p>Hair Color: {hairColor}</p>
        </>
        )
    }
}

export default Person;