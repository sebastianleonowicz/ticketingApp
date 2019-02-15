import React, {Component} from 'react';

class List extends Component {
    constructor (props) {
        super(props);
        this.state = {};
    }

    render () {
        return  <div>
                <p onClick={this.props.click}>It's a paragraph from the list</p>
                <p onClick={this.props.click2}> Sign me out
                </p>
            </div>
    } 
}

export default List;

