import React from 'react';
import { connect } from 'react-redux';
import { removeError } from '../../actions';

class Error extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        
    }

    render() {
        return (
            <div class = "error" onClick={() => {this.props.removeError(this.props.i)}}>
                {this.props.error}
            </div>
        )
    }
}

export default connect(null, {removeError: removeError})(Error);