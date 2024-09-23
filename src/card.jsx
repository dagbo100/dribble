import React from "react";


export default function Card(props){
    return(
        
        <div className="card">
           {props.image.includes(".mp4") ? (
                <video className="video" src={props.
                    image} autoPlay muted loop></video>
           ) :(
                 <img className="image" src={props.image}
                 alt="" />
                )}
             
            {/* <img className="image" src={props.image}alt="" /> */}
            <div className="tags">
                <div className="Name">{props.name}</div>
                <div className="role">{props.job}</div>
                <div className="role-tags">
                    {props.role.map((role, index)=>(
                     <div className="tag" key={index}>{role}</div>   
                    ))}
                    
                </div>
            </div>
          


        </div>
    )
}