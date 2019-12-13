import React from 'react';
import Email from './email';
import IsDM from './isDm';
import PasswordStrength from './passwordStrength';
import { connect } from 'react-redux';

import '../styles/form.css';

class Register extends React.Component {
    constructor(props) {
        super(props);
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
                <PasswordStrength></PasswordStrength>
                <IsDM></IsDM>
                <div className = "primary_button_holder">
                    <button className = "primary_button">Register</button>
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

export default connect(mapStateToProps, null)(Register);