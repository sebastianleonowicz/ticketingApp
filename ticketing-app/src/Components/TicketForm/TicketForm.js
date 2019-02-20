import React, {Component} from 'react';
import TicketFormWrapper from './TicketFormComponents/TicketFormWrapper';
import TicketFormInput from './TicketFormComponents/TicketFormInput';
import TicketFormHeader from './TicketFormComponents/TicketFormHeader';
import TicketFormTextarea from './TicketFormComponents/TicketFormTextarea';
import Button from '../ReusableElements/Button';

class TicketForm extends Component {
    constructor(props){
      super(props);
      console.log('[TicketForm]', props)
      this.state = {
          title: '',
          description: '',
          accCriteria: '',
          deadline: '',
          loggedUser: props.loggedUser,
        }
      this.db = props.firebase.firestore();
    }

    updateTicketData = (event, key) => {
      console.log(event.target.value);
      this.setState({
          [key]: event.target.value
      })
    }
  
    createTicket = () => {
      console.log(this.state);
      console.log(this.props.firebase.auth());
      this.db.collection("tickets").add({
        title: this.state.title,
        description: this.state.description,
        accCriteria: this.state.accCriteria,
        deadline: this.state.deadline
      })
      .then((docRef) => {
          console.log("Document written with ID: ", docRef.id);
      })
      .catch((error) => {
          console.error("Error adding document: ", error);
      });
    }

    render () {
        return  <TicketFormWrapper className='ticketFormWrapper'>
                  <form action="/action_page.php">
                      <TicketFormHeader>Title</TicketFormHeader>
                      <TicketFormInput placeholder='Title' value={this.state.title}  onChange={(e) => this.updateTicketData(e, 'title')} type="text" name="title"/>
                     
                      <TicketFormHeader>Description</TicketFormHeader>
                      <TicketFormInput placeholder='Description' value={this.state.description}  onChange={(e) => this.updateTicketData(e, 'description')} type="text" name="description"/>
                     
                      <TicketFormHeader>Acceptance Criteria</TicketFormHeader>
                      <TicketFormInput placeholder='Acceptance Criteria' value={this.state.accCriteria}  onChange={(e) => this.updateTicketData(e, 'accCriteria')} type="text" name="accCriteria"/>
                     
                      <TicketFormHeader>Deadline</TicketFormHeader>
                      <TicketFormTextarea placeholder='Deadline' value={this.state.deadline}  onChange={(e) => this.updateTicketData(e, 'deadline')} type="text" name="deadline"/>
                  </form>
                  <Button onClick={this.createTicket}>Submit</Button>
                </TicketFormWrapper> 
    }
}

export default TicketForm;