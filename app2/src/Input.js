import React from "react";


const  Input = ({iconstart, iconend}) => {

  return (
    <div className="containerB">
     <p>Input</p>
         <div className="input-items">    

        <label><p>{"<input/>"}</p><p>Label</p><input placeholder="placeholder" className="input-1"></input></label>
        
        <label><p>{"&:hover"}</p><p>Label</p> <input placeholder="placeholder" className="input-2"></input></label>
        
        <label><p>{"&:Focus"}</p><p className="inputlabel">Label</p> <input placeholder="placeholder" className="input-3"></input></label>
   
   
      </div>
      <div className="input-items">
      <label><p>{"<Input error/>"}</p><p className="inputred"> Label</p><input placeholder="placeholder" className="input-4" Error></input></label>
        
        <label><p>{"&:hover"}</p><p>Label</p> <input placeholder="placeholder" className="input-2"></input></label>
        
        <label><p>{"&:Focus"}</p><p className="inputred">Label</p> <input placeholder="placeholder" className="input-4"></input></label>
      </div>
      <div className="input-items">

      <label><p>{"<Input disabled/>"}</p><p>Label</p> <input placeholder="placeholder" className="input-5" disabled></input></label>
</div>
<div className="input-items">
<label><p>{"<Input helperText=”Some interesting text” />"}</p><p> Label</p><input placeholder="placeholder" className="input-1" Error></input><p>{"Some interesting text"}</p></label>
<label><p>{"<Input helperText=”Some interesting text” error />"}</p><p className="inputred"> Label</p><input placeholder="placeholder" className="input-4" Error></input><p className="inputred">{"Some interesting text"}</p></label>
</div>

<div className="input-items">
<label><p>{"<Input startIcon />"}</p><p> Label</p>
<i class="material-icons">phone</i>
<input  placeholder="placeholder" className="input-1" >  
  </input><p>{""}</p></label>
<label><p>{"<Input endIcon />"}</p><p> Label</p><input  placeholder="placeholder" className="input-1" ></input><span class="material-icons">
lock
</span><p>{""}</p></label>
</div>


    <div className="input-items">
      
    <p>{"<Input fullWidth />"}</p>
    <p>Label</p>
    
    <input placeholder="Text" className="fullwidth" ></input>
    </div>
<div className="input-items"></div>
<label><p>{"<Input multiline row=”4” />"}</p><textarea  placeholder="Placholder" rows="4" >
</textarea></label>


<div>
          <p>icon: https://material.io/resources/icons/?style=round</p>  
          created by <a href="https://github.com/Snolledz99">Snolledz99</a> - dev Challenges.io
        </div>
</div>
  );
}

export default Input;