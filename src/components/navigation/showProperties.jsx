import { useState } from "react";


const ShowPropertie = (props) => {
    const info = props.info;
    const category = props.category; 
    
    return (
        <div className="flex flex-col font-montserrat w-full "> 
            <h3 className="font-bold"> {category} </h3>
            <div className="flex gap-2"> 
               <div className="m-1 pl-1 font-montserrat ">{info}</div>
            </div>
        </div>
    ); 
}


export default ShowPropertie; 