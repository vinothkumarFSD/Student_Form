import React from "react";

const Form =()=>{
    const handleChange=(e)=>{
        console.log(e.target.value);
    }
    return(
        <form onSubmit={(e) => {
            console.log(e);
            e.preventDefault();}}> 
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" name="name" placeholder="Enter Name" onChange={handleChange} />
            <button type="submit" style={{ margin: '20px 0px 0px 0px' }}>Submit</button>
        </form>
    )
}

export default Form;