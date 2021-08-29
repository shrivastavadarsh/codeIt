import React, { Component } from 'react';



export default class OutTA extends Component
{
    render()
    {
        return <div>
            <textarea readOnly placeholder="//Output field" rows = "15" cols = "68" style={{resize:"none",border:"16px solid", fontSize:"20px", float:"right"}}/>
        </div>;
    }
}