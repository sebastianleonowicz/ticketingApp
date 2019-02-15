import React, {Component} from 'react';

class List extends Component {
    constructor (props) {
        super(props);
        this.state = {};
        this.db = props.firebase.firestore();
    }

    componentDidMount () {
        this.db.collection("tickets").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                console.log(`${doc.id} => ${doc.data()}`, JSON.stringify(doc.data()));
            });
        });
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

