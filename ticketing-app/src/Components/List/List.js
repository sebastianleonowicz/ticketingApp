import React, {Component} from 'react';
import Ticket from '../Ticket/Ticket';

class List extends Component {
    constructor (props) {
        super(props);
        this.state = {
            loading: true
        };
        this.db = props.firebase.firestore();
        this.tickets = [];
        this.loading = true;
    }

    componentDidMount () {
        this.db.collection("tickets").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                console.log(JSON.stringify(doc.data()));
                this.tickets.push(JSON.stringify(doc.data()));
            });
            this.setState({
                tickets: this.tickets
            });
            console.log(this.state);
            this.setState({
                loading: false
            });
        });
    }

    render () {
        let displayedTickets = [];
        if (!this.state.loading) {
            displayedTickets = this.state.tickets.map(ticket => {
                // console.log(JSON.parse(ticket).ticketType);
            return  <Ticket title={JSON.parse(ticket).title}
                            description={JSON.parse(ticket).description}
                            acceptanceCriteria={JSON.parse(ticket).acceptanceCriteria}
                            deadline={JSON.parse(ticket).deadline}
                            ticketType={JSON.parse(ticket).ticketType}
                    ></Ticket>
            })
        }
        if (this.state.loading) {
            return  <div>
                        <p>loading....</p>
                    </div> 
        } 
        else {
            return  <div>
                        {displayedTickets}
                    </div> 
        }
       
    } 
}

export default List;

