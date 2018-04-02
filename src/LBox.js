import React, { Component } from 'react';
import Level from "./Level";
import CList from "./CList"

import './LBox.css';

class LBox extends Component {
    constructor(props){
        super(props);
        
        
        this.state = {
            commands: [
                "cd",
                "pwd",
                "ls",
                "cat",
                "mkdir"
                
                ]
        }
        
        
    }
    
    render(){
        
        return (
            <div className="LB">
            <Level level="Beginner"/>
            <CList items={this.state.commands}/>
            </div>
            
            );
        
        
    }
    
    
}

export default LBox;