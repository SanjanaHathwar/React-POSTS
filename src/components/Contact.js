import React from 'react';

const Contact = (props) => {
    //console.log(props)
    setTimeout(() => {
        props.history.push('/Home')
    },4000);
   
    return (
        <div className="container">
            <h4 className="center">Contact</h4>
            <p className="center"></p>
        </div>
    )
}

export default Contact