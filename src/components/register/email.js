import React from 'react';
import { registerEmail, registerUsername, registerPassword } from '../../actions';
import { connect } from 'react-redux'; 

class Email extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: ""
        }
    }

    emailChanged = (e) => {
        var email = e.target.value;
        this.setState({
            email: email
        })
        
        if(this.props.label === "Email") {
            this.props.registerEmail(email);
        } else if (this.props.label === "Username") {
            this.props.registerUsername(email);
        } else if (this.props.label === "Password") {
            this.props.registerPassword(email);
        }
    }

    render() {
        return (
            <div>
                <div class = "label-holder"><label for = "email">{this.props.label}</label></div>
                <input 
                type = {this.props.type}
                value = {this.state.email}
                onChange = {this.emailChanged}
                name = "email">

                </input>
            </div>
        )
    }
}

export default connect(null, {registerEmail, registerPassword, registerUsername})(Email);