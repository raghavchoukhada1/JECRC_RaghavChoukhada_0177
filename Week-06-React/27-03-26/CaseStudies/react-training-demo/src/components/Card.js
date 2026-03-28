import React from "react";
function Card({title,content,icon,isfeatured=false}){
    return (
        <div style={{
            border:isfeatured?'2px solid gold':'1px solid #add',
            borderRadius:'8px',
            padding:'20px',
            margin:'10px',
            backgroundColor:'white',
            boxshadow:'0 2px 4px rgba(0,0,0,0.1)',
            width:'300px'
        }}>
            {icon && <div style={{fontSize:'40px'}}>{icon}</div>}
            <h3>title</h3>
            <p>content</p>
        </div>
    );
}
export default Card;