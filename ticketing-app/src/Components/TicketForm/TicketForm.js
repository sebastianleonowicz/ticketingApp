import React, {Component} from 'react';

// const form = (props) => {
    // return  <div className='formContainer'>
    //             <form className='form' action="/action_page.php">
    //                 Title: <input onChange={props.clickUpdateTitle} type="text" name="title"/>
    //                 Description: <input onChange={props.clickUpdateDescription} type="text" name="description"/>
    //                 Acceptance Criteria: <input onChange={props.clickUpdateAccCriteria} type="text" name="accCriteria"/>
    //                 Deadline: <input onChange={props.clickUpdateDeadline} type="text" name="deadline"/>
    //             </form>
    //             <button onClick={props.clickCreate}>Submit</button>
    //         </div>  
// }

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
    }

      updateTicketData = (event, key) => {
        console.log(event.target.value);
        this.setState({
            [key]: event.target.value
        })
      }
    
      createTicket = () => {
        console.log(this.state);
      //   db.collection("tickets").add({
      //     title: this.state.title,
      //     description: this.state.description,
      //     accCriteria: this.state.accCriteria,
      //     deadline: this.state.deadline
      // })
      //   .then((docRef) => {
      //       console.log("Document written with ID: ", docRef.id);
      //   })
      //   .catch((error) => {
      //       console.error("Error adding document: ", error);
      //   });
      }

      render () {
          return <div className='formContainer'>
                    <form className='form' action="/action_page.php">
                        Title: <input value={this.state.title}  onChange={(e) => this.updateTicketData(e, 'title')} type="text" name="title"/>
                        Description: <input value={this.state.description}  onChange={(e) => this.updateTicketData(e, 'description')} type="text" name="description"/>
                        Acceptance Criteria: <input value={this.state.accCriteria}  onChange={(e) => this.updateTicketData(e, 'accCriteria')} type="text" name="accCriteria"/>
                        Deadline: <input value={this.state.deadline}  onChange={(e) => this.updateTicketData(e, 'deadline')} type="text" name="deadline"/>
                    </form>
                    <button onClick={this.createTicket}>Submit</button>
                </div> 
      }
}

export default TicketForm;