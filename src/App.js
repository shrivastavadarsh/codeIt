import React from "react";
import MenuBar from "./header/MenuBar.jsx";
import "./styles.css"
import Edtr1 from "./TextEditor";
import InpTA from "./InputTA"
import OutTA from "./OutputTA"
export default function App1()
{
    return (

        <div className = "App">
            <MenuBar/>
            
            <h1 style={{padding: "30px" }}>CodeIt!</h1>
            <div style={{display:"flex"}}>
                <Edtr1/> 
                <div>
                    <InpTA/>
                    <OutTA/>
                </div>   
            </div>    
            
        </div>
    );
}