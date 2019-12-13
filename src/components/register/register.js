import React from 'react';
import Email from './email';
import IsDM from './isDm';
import PasswordStrength from './passwordStrength';
import validator from 'validator';
import { connect } from 'react-redux';
import { setErrors } from '../../actions';

import '../styles/form.css';

class Register extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            passwordErrors: []
        }
    }

    componentDidMount() {

    }

    componentDidUpdate() {

    }

    renderRegisterDetails = () => {
        console.log(this.props.register)
        var data = [];
        if(this.props.register.username) {
            data.push(<p>{this.props.register.username}</p>)
        }
        if(this.props.register.password) {
            data.push(<p>{this.props.register.password}</p>);
        }
        if(this.props.register.email) {
            data.push(<p>{this.props.register.email}</p>)
        }
        if(this.props.register.dm) {
            data.push(<p>{this.props.register.dm}</p>);
        }
        return <div>{data}</div>;
    }

    login = () => {

    }

    //TODO: Have a component that checks if a username or email is already taken.

    register = () => {
        var errors = [];
        if(this.state.passwordErrors.length > 0) {
            errors.push(this.state.passwordErrors);
        }
        if(this.props.register.email) {
            if(validator.isEmail(this.props.register.email)) {
                errors.push("Email address is invalid");
            }
        } else {
            errors.push("An email is required");
        }
        if(!this.props.register.username) {
            errors.push("A username is required")
        }
        this.props.setErrors(errors);
    }

    passwordErrors = (errors) => {
        this.setState({
            passwordErrors: errors
        })
    }

    render() {
        return (
            <div className = "__form_holder">
                <h1>Register</h1>
                <Email
                label = "Username"
                type="text"></Email>
                <Email
                label = "Email"
                type = "email">
                </Email>
                <Email
                label="Password"
                type="password"></Email>
                <PasswordStrength
                setErrors = {this.passwordErrors}></PasswordStrength>
                <IsDM></IsDM>
                <div className = "primary_button_holder">
                    <button className = "primary_button" onClick = {this.register}>Register</button>
                </div>
                <div className = "secondary_button_holder">
                    <button className = "primary_button" onClick={this.login}>Login</button>
                </div>
                {this.renderRegisterDetails()}
            </div>
        );
    }
}

const mapStateToProps = (state, ourProps) => {
    // console.log("REGISTER: ", state.register);
    return {
        register: state.register
    }
}

export default connect(mapStateToProps, {setErrors})(Register);