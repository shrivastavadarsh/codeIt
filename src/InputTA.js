import React, { Component } from 'react';



export default class InpTA extends Component
{
    render()
    {
        return <div>
            <textarea rows = "15" cols = "68" placeholder="//Input field" style={{resize:"none",border:"16px solid", fontSize:"20px", float:"right"}}/>
        </div>;
    }
}