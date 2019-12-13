import React from 'react';
import { connect } from 'react-redux';
import '../styles/errors.css';

import Error from './error';

class ErrorHolder extends React.Component {
    constructor(props) {
        super(props);
    }

    renderErrors = () => {
        return this.props.errors.map((error, i) => {
            return (
                <Error error = {error} i = {i} />
            )
        })
    }

    render() {
        return (
            <div className="error-holder">
                {this.renderErrors()}
            </div>
        )
    }
}

const mapStateToProps = (state, ourProps) => {
    return {
        errors: state.errors
    }
}

export default connect(mapStateToProps, null)(ErrorHolder);