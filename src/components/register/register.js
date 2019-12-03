import React from 'react';
import '../styles/form.css';

class Register extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    componentDidUpdate() {

    }

    render() {
        return (
            <div>
                <div className = "primary_button_holder">
                    <button className = "primary_button">Register</button>
                </div>
                <div className = "secondary_button_holder">
                    <button className = "primary_button">Login</button>
                </div>
            </div>
        );
    }
}

export default Register;