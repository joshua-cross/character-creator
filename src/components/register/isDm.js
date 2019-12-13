import React from 'react';
import { registerIsDm } from '../../actions';
import { connect } from 'react-redux';

class IsDM extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isDM: false
        };
    }

    componentDidMount() {
        
    }

    componentDidUpdate() {

    }

    dmChanged = (e) => {
        this.setState({
            isDM: !this.state.isDM
        })
        this.props.registerIsDm(e.target.value)
    }

    render() {
        return(
            <div>
                <div className="label-holder"><label for = "isDM">Are you the DM?</label></div>
                <input type = "radio" name = "isDM" onChange={this.dmChanged} value="1"></input>Yes
                <input type = "radio" name="isDM" onChange={this.dmChanged} value="0"></input>No
            </div>
        )
    }
}

export default connect(null, {registerIsDm})(IsDM);