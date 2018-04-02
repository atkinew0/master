import React, {Component} from "react";
import CItem from "./CItem";

import "./CList.css";

class CList extends Component{
    
    
    render(){
        
        const commands = this.props.items.map((c,i) =>(
                <CItem name={c} key={i}/>
            ));
        
        
        return (
            <div className="CList">
            {commands}
            </div>
            
            );
        
    }
    
    
    
    
}


export default CList;