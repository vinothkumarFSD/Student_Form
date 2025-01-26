import React from "react";

// import './CardLink.css';
import styles from './CardLink.module.css';

function CardLink({ title, description, Link }) {
    // console.log(props);
    // console.log({styles});
    const handleClick = (e) => {
        console.log(e);
        alert(`Joining ${title}`);
    }
   
    return (
        <div style={{
            border: "1px solid",
            backgroundColor: "yellow",
            height: 300,
            width: '350px',
            borderRadius: '10px',
            padding: 16,
            margin: 16,
            minWidth: 300
        }} className={styles.container}>
            <div style={{ display: 'inline-block' }}>
                <i className="fa-solid fa-house fa-2x"></i>
            </div>
            <div style={{ padding: '20px 0px 0px 0px' }}><h4>{title}</h4></div>
            <p>{description}</p>
            <br />
            <a href={Link}>View link</a>
            <button type="button" style={{ marginLeft: 16 }}
                onClick={handleClick}>Join Course</button>
            
        </div>
    )
}

export default CardLink;