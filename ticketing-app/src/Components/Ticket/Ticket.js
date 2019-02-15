import React from 'react';
       
const ticket = (props) => {
    return  <div className='ticket'>
                <p>{props.title}</p>
                <p>{props.description}</p>
            </div>  
}

export default ticket;