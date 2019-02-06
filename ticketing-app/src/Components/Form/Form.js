import React from 'react';

const form = (props) => {
    return  <div className='formContainer'>
                <form className='form' action="/action_page.php">
                    Title: <input type="text" name="title"/>
                    Description: <input type="text" name="description"/>
                    Acceptance Criteria: <input type="text" name="accCriteria"/>
                    Deadline: <input type="text" name="deadline"/>
                </form>
                <button onClick={props.click}>Submit</button>
            </div>  
}

export default form;