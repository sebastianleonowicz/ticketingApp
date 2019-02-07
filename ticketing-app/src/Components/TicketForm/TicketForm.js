import React from 'react';

const form = (props) => {
    return  <div className='formContainer'>
                <form className='form' action="/action_page.php">
                    Title: <input onChange={props.clickUpdateTitle} type="text" name="title"/>
                    Description: <input onChange={props.clickUpdateDescription} type="text" name="description"/>
                    Acceptance Criteria: <input onChange={props.clickUpdateAccCriteria} type="text" name="accCriteria"/>
                    Deadline: <input onChange={props.clickUpdateDeadline} type="text" name="deadline"/>
                </form>
                <button onClick={props.clickCreate}>Submit</button>
            </div>  
}

export default form;