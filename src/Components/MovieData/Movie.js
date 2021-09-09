import React from 'react';
import classes from './Movie.module.css'
const MovieDataContainer = (props) => {
    return (
        props.data.map(info => {
            return (
                <div className={classes.container} id={info.episode_id}>
                    <h1 className={classes.head}>{info.title}</h1>
                    <h3 className={classes.date}> Release Date: {info.edited}</h3>
                    <h3 className={classes.date}>Director: {info.director}</h3>
                    <p className={classes.about}><strong>About: </strong>{info.opening_crawl}</p>
                </div>
            );
        })

    );
}

export default MovieDataContainer;