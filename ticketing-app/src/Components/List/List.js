import React from 'react';

const list = (props) => {
    return  <div>
                <p onClick={props.click}>It's a paragraph from the list</p>
                <p onClick={props.click2}> Sign me out
                </p>
            </div>
}

export default list;

