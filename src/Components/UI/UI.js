import React from 'react';
import classes from './Ui.module.css'
const ButtonUi = (props) => {
    return (  
        <button type={props.type||"button"} onClick={props.onClick} className={classes.buttonUi}>
            {props.children}
        </button>
    );
}
 
export {ButtonUi};