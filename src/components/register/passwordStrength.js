import React from 'react';
import { connect } from 'react-redux';
import { passwordSafe } from '../../actions';

class PasswordStrength extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    componentDidUpdate() {

    }

    calculateBarWidth = () => {
        if(this.props.password) {
            var errors = [];
            var width = 0;
            var password = this.props.password;
            //the width of the password should be 25 if the length is 8 or greater.
            if(password.length >= 8) {
                width += 25;
            } else {
                var percentage = 25 / 8;
                width += percentage * password.length;
                errors.push("Password must be at least 8 characters.");
            }

            var containsUppercase = false;
            var containsLowercase = true;
            var containsNumber = false;
            for(let i = 0; i < password.length; i++) {
                let char = password[i];
                //if the char is an upper case letter.
                if(char.toUpperCase() === char && isNaN(char) && char !== ' ') {
                    containsUppercase = true;
                }
                //if the char is a lowe case letter
                if(char.toLowerCase() === char && isNaN(char) && char !== ' ') {
                    containsLowercase = true;
                }
                //if the character is a number.
                try {
                    var parsed = parseInt(char);
                    if(!isNaN(parsed)) {
                        containsNumber = true;
                    }
                } catch (e) {
                    
                }
                // if(!isNaN(char)) {
                //     containsNumber = true;
                // }
            }
            if(containsNumber) {
                width += 25;
            }
            if(containsUppercase) {
                width += 25;
            }
            if(containsLowercase) {
                width += 25;
            }
            console.log("Width is: ", width)
            return width
        }
        console.log("There is no password :(")
        return 0;
    }

    render() {
        return (
            <div className = "__password_strength">
                <p>Password Strength</p>
                <div class = "__password_strength_bar">
                    <div 
                    class = "__password_strength_bar_fill"
                    style={{width: this.calculateBarWidth() + "%"}}></div>
                </div>
                <p>Use at least 8 characters, use a combination of uppercase and lowercase letters, please include a number</p>
            </div>
        );
    }
}

const mapStateToProps = (state, ourProps) => {
    return {
        password: state.register.password
    }
}

export default connect(mapStateToProps, {passwordSafe})(PasswordStrength);