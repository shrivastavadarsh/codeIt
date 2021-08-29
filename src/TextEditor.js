import React, { Component } from 'react';
import AceEditor from 'react-ace';
import 'brace/theme/monokai';


export default class Edtr1 extends Component
{
    render()
    {
        return <div>
            <AceEditor height={'83vh'} width={'101vh'} fontSize={"30px"}  theme="monokai"/>
        </div>;
    }
}