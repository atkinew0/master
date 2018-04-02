import React, { Component } from 'react';
import LBox from "./LBox.js";
import FlashContainer from "./FlashContainer";

import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    
       this.state = {
            level1: [
                {question:"change directory to x", answer:"cd x", done:false},
                {question:"print current working directory",answer:"pwd",done:false},
                {question:"list files in current directory",answer:"ls",done:false},
                {question:"output text of a file named x ",answer:"cat x",done:false},
                {question:"make a new directory called x",answer:"mkdir x",done:false}
              
                
                ]
        };
        
       
        this.checkAnswer = this.checkAnswer.bind(this);
    
    
  }
  
 
 
  
  
  checkAnswer(userInput, card){
    
    
    
    if(userInput === card.answer){
      console.log("Processing correct answer");
      var current = this.state.level1;
      console.log("Current is "+current);
      
    var newSt =  this.state.level1.map((c) => {
        return (c.answer === card.answer) ? {...c, done:true}: c;
      });
      
      console.log("new state is "+newSt);
      
      for(var i = 0; i < newSt.length; i++){
        console.log("New St "+i +" "+ newSt[i].done);
      }
      
      this.setState({level1:newSt});
      
    }
    
    return userInput === card.answer;
    
  }
  
  render() {
    
    console.log("Appjs running render AGAIN!");
    
      for(var i = 0; i < this.state.level1.length; i++){
        console.log("New St "+i +" "+ this.state.level1[i].done);
      }
    
     var divStyle = {
    height: "100%"
  };
    
    return (
      <div className="App" style={divStyle}>
      <LBox commands={this.state.level1}/>
      <FlashContainer checkAnswer = {this.checkAnswer}  cards={this.state.level1}/>
      </div>
    );
  }
}

export default App;
