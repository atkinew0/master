import React, { Component } from 'react';
import "./FlashCard.css";

class FlashCard extends Component{
   
    

    
    componentWillReceiveProps(){
        console.log("force update of this");
        this.forceUpdate();
    }
    
    
    render(){
    return (<div className="flashCard">
            <p>{this.props.question}</p>
            </div>
            );
    }
    
    
    
    
}




export default FlashCard;