import React, {Component} from "react";

import "./CItem.css";

class CItem extends Component{
    
    
    render(){
        var FontAwesome = require('react-fontawesome');
        
        return (
            <div className="item">
             <FontAwesome
        className='super-crazy-colors'
        name='coffee'
        size='2x'
        
      />
             <p>  </p> {this.props.name}
            </div>
            
            )
        
        
    }
    
    
    
}

export default CItem;