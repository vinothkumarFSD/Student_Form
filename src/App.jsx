import React from "react";
import CardLink from "./Components/CardLink/cardLink";
import './App.css';

import Form from "./Components/Form/Form";

const batches=['B42WETAMIL','B4445WETAMIL','B49WEENG','BB45WETAMIL'];
const linkDetails=[
    {title:"Self Paced Courses",description:"Learn & Upskill Online" ,Link:"https://www.guvi.in/course"},
    {title:"Live Classes",description:"Learn & Upskill Offline" ,Link:"https://www.guvi.in/course"},
    {title:"Interactive Practice Platforms",description:"Learn & Upskill both offline & online" ,Link:"https://www.guvi.in/course"},
    {title:"For Corporates",description:"Learn & Upskill Online with paid" ,Link:"https://www.guvi.in/course"}
]

const showFooter=true,isSiteOwned=true;

const App=()=>{
    return (
        <div>
            <div className="container">
            {batches.map((batchName)=>{return <h1>{batchName}</h1>})}
            {linkDetails.map(({title,description,Link})=>{return <CardLink title={title} description={description} Link={Link}/>})}
            {/* <CardLink title="Self Paced Courses" description="Learn & Upskill Online" Link="https://www.guvi.in/course" />
            <CardLink title="Live Classes" description="Learn & Upskill Offline" Link="https://www.guvi.in/course"  />
            <CardLink title="Interactive Practice Platforms" description="Learn & Upskill both offline & online" Link="https://www.guvi.in/course"  />
            <CardLink title="For Corporates" description="Learn & Upskill Online with paid" Link="https://www.guvi.in/course"  /> */}
        </div>
        {showFooter && <div 
        style={{
            backgroundColor:'black',
            color:'white',
            fontSize:'24px',
            textAlign:'center'
        }}>Footer</div>}
        <b>
        {isSiteOwned ? 'Copy Rights Reserved':'No Rights Reserved'}
        </b>  
        <Form />      
        </div>
    )
}

export default App;