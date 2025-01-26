import React from "react";

import styles from './StudentForm.module.css';

const StudentDatas = [
    {
        name: 'PeterParker',
        age: 28,
        gender: 'male',
        imageUrl: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg'
    },
    {
        name: 'Lucy',
        age: 32,
        gender: 'female',
        imageUrl: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg'
    },
    {
        name: 'John carter',
        age: 38,
        gender: 'male',
        imageUrl: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg'
    }
];

const StudentForm = () => {

    return (
       <div style={{
        display:"flex",
        flexWrap:"wrap"
       }}>
        {StudentDatas.map(({name,age,gender,imageUrl})=>{
            return(
                <div style={{
                    borderRadius:'10px',
                    overflow:'hidden',
                    height:250,
                    width:250,
                    border:'1px solid',
                    margin:16,
                    textAlign:'center',
                    fontSize:'16px'
                }}>
                    <img src={imageUrl} alt={name} className={styles.image} /><br />
                    Name:{name}<br/>
                    Age:{age}<br/>
                    Sex: {gender}
                </div>
            )
        })}
       </div>
    )
}

export default StudentForm;