import React, {Component} from 'react';
import TicketFormWrapper from '../ReusableElements/TicketFormWrapper';
import TicketFormInput from '../ReusableElements/TicketFormInput';
import TicketFormHeader from '../ReusableElements/TicketFormHeader';
import Textarea from '../ReusableElements/Textarea';
import Button from '../ReusableElements/Button';
import TicketDropdown from '../ReusableElements/TicketDropdown'
import TicketOption from '../ReusableElements/TicketOption'

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
          assignedUser: null
        }
      this.db = props.firebase.firestore();
    }

    componentWillMount() {
      this.setState({
        loggedUser: this.props.firebase.auth().currentUser.email
      })
    }

    updateTicketData = (event, key) => {
      console.log(event.target.value);
      this.setState({
        [key]: event.target.value
      })
      console.log(this.state);
    }

    setTicketUser = (event) => {
      console.log('on click works');
      this.setState({
        assignedUser: event.target.value
      }, () => {
        console.log(this.state);
      })
    }
  
    createTicket = () => {
      console.log(this.state);
      console.log(this.props.firebase.auth());
      // const loggedInUser = this.props.firebase.auth()
      this.db.collection("tickets").add({
        title: this.state.title,
        description: this.state.description,
        accCriteria: this.state.accCriteria,
        deadline: this.state.deadline,
        user: this.state.loggedUser,
        assignedUser: this.state.assignedUser
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
                  <TicketDropdown onChange={this.setTicketUser.bind('assignedUser')}>
                    <TicketOption value='Null'>Null</TicketOption>
                    <TicketOption value='User1'>User1</TicketOption>
                    <TicketOption value='User2'>User2</TicketOption>
                    <TicketOption value='User3'>User3</TicketOption>
                  </TicketDropdown>
                  {/* <TicketDropdown onClick={this.setTicketUser.bind()}>
                    <TicketOption value='Epic'>Epic</TicketOption>
                    <TicketOption value='Ticket'>Ticket</TicketOption>
                    <TicketOption value='Task'>Task</TicketOption>
                    <TicketOption value='Bug'>Bug</TicketOption>
                  </TicketDropdown> */}
                  <form action="/action_page.php">
                      <TicketFormHeader>Title</TicketFormHeader>
                      <TicketFormInput placeholder='Title' value={this.state.title}  onChange={(e) => this.updateTicketData(e, 'title')} type="text" name="title"/>
                     
                      <TicketFormHeader>Description</TicketFormHeader>
                      <TicketFormInput placeholder='Description' value={this.state.description}  onChange={(e) => this.updateTicketData(e, 'description')} type="text" name="description"/>
                     
                      <TicketFormHeader>Acceptance Criteria</TicketFormHeader>
                      <TicketFormInput placeholder='Acceptance Criteria' value={this.state.accCriteria}  onChange={(e) => this.updateTicketData(e, 'accCriteria')} type="text" name="accCriteria"/>
                     
                      <TicketFormHeader>Deadline</TicketFormHeader>
                      <Textarea placeholder='Deadline' value={this.state.deadline}  onChange={(e) => this.updateTicketData(e, 'deadline')} type="text" name="deadline"/>
                  </form>
                  <Button onClick={this.createTicket}>Submit</Button>
                </TicketFormWrapper> 
    }
}

export default TicketForm;