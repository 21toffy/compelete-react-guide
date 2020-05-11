import React from 'react';

import './Person.css';

const person = (props) =>{
return (
    <div className ='Person'>
        <p onClick = {props.click}>
            i am {props.name} and i am {props.age}: {props.children}
        </p>
        <input type ="text" onChange = {props.changed} />
       
    </div>
)
};

export default person