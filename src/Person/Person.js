import React from 'react';


const person = (props) =>{
return (
    <div>
        <p>i am {props.name} and i am {props.age}: {props.children}</p>
       
    </div>
)
};

export default person