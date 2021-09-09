import React from 'react';
import classes from './Wrapper.module.css';
const Wrapper = (props) => {
    return ( 
        <div className={classes.wrapbox}>
            {props.children}
        </div>
     );
}
 
export default Wrapper;