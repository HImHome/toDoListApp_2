import React,{useState} from "react";


export function NewTodoForm(props) {
    const [newItem, setNewItem] = useState("");
    
    
    function handleSumbmit(e) {
        e.preventDefault();
        
        if (newItem === "") return
        
        props.onSubmit(newItem);
    }
   
   
   
return ( 
    <form onSubmit={handleSumbmit} className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input 
          value={newItem} 
          onChange={e => setNewItem(e.target.value)} 
          type="text" 
          id="item" 
          />
        </div>
        <button className="btn">Add</button>
      </form>
      )
}