import React, { useState } from 'react';
import classes from './MovieForm.module.css'
import Wrapper from '../Wrapper/Wrapper'
import {ButtonUi} from '../UI/UI'

const MovieForm = (props) => {
    const data = {
        title: "",
        ReleaseDate: "",
        director: "",
        about: "",
    
    }
    const [customData, setCustomData] = useState(data)
    const userChangeHandler = (e) => {
        const { id, value } = e.target;
        setCustomData({ ...customData, [id]: value })

    }
    console.log(customData);

    // This is Submit Handler To get input Data
    const submitHandler=(e)=>{
        e.preventDefault();
        props.Data(customData);
        setCustomData(data)
    }

    return (
        <Wrapper>
            <h1>Custom Movie</h1>
            <form onSubmit={submitHandler} className={`${classes.form}`}>
                <div className={`${classes.inputFields}`}>
                    <label htmlFor="title">Title: </label>
                    <input value={customData.title} type="text" id='title' onChange={userChangeHandler} />
                </div>
                <div className={`${classes.inputFields}`}>
                    <label htmlFor="ReleaseDate">Release Date:</label>
                    <input type="date" id='ReleaseDate' value={customData.ReleaseDate} onChange={userChangeHandler} />
                </div>
                <div className={`${classes.inputFields}`}>
                    <label htmlFor="director">Director: </label>
                    <input type="text" id='director' value={customData.director} onChange={userChangeHandler} />
                </div>
                <div className={`${classes.inputFields}`}>
                    <label htmlFor="about">About</label>
                    <textarea cols="30" rows="10" id='about' value={customData.about} onChange={userChangeHandler}></textarea>
                </div>
                <div className={classes.button}>
                <ButtonUi type="submit">Add</ButtonUi>
                </div>
            </form>
        </Wrapper>
    );
}

export default MovieForm;