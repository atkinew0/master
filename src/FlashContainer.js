import React, { Component } from 'react';
import FlashCard from "./FlashCard";

class FlashContainer extends Component{
    constructor(props){
        super(props);
        
         this.state = {inputValue:"", display:[], cards:this.props.cards };
        
         this.handleChange = this.handleChange.bind(this);
         this.handleClick = this.handleClick.bind(this);
        
        
    }
    
      handleChange(e){
        
        this.setState({inputValue:e.target.value});
        
    }
    
    handleClick(e){
        
        e.preventDefault();
    
       if ( this.props.checkAnswer(this.state.inputValue, this.state.display) ){
           console.log("Correct answer!");
       }else{
           console.log("Wrong answer!");
       }
    }
    
    
    componentWillMount(){
        
        console.log("A will mount was called");
        
         var cardToDisplay;
        
        for(var i = 0; i < this.props.cards.length; i++){
            if(this.props.cards[i].done === false){
                cardToDisplay = this.props.cards[i];
                break;
            }
        }
        
        this.setState({display:cardToDisplay});
        
      
        
        this.forceUpdate();
        
    }
    
    componentWillReceiveProps(nextProps){
        
         if(nextProps.cards !== this.props.cards){
             console.log("nextprops not equal");
             
             for(let i = 0; i < nextProps.cards.length; i++){
                 console.log("Next props "+nextProps.cards[i].done);
             }
             
            this.setState({cards:nextProps.cards}, function(){
                for(let i = 0; i < this.state.cards.length; i++){
                 console.log("Now to CALLBACK current cards props "+ this.state.cards[i].done);
             }
             
             console.log("A willreceivePros was called");
        
        var cardToDisplay;
        
        for(var i = 0; i < this.props.cards.length; i++){
            if(this.props.cards[i].done === false){
                
                console.log("At card "+ i + " the done field is" +this.props.cards[i].done);
                
                cardToDisplay = this.props.cards[i];
                break;
            }
        }
        
        console.log("Display is now "+cardToDisplay.question +"and forcing update");
        
        this.setState({display:cardToDisplay});
             
             
            });
            
              
             
            
        }
        
        
        
    }
    
    
    render(){
        
        console.log("re rendering the flash container");
        
        return (
            <div>
            <FlashCard question={this.state.display.question}/>
            <form>
            <input type="text" value={this.state.inputValue} onChange={this.handleChange}/>
            <button onClick={this.handleClick}>Submit></button>
            </form>
            </div>
            
            )
        
        
    }
    
    
    
    
}


export default FlashContainer;