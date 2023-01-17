import React from "react";
function Forminput() {

  return(
  <div className="forminput"> 
      <label>Description</label>
      <input type="text"
    placeholder="description"/>
      <label>Category</label>
      <input placeholder="category"/>
      <label>Amount</label>
      <input placeholder="amount"/>
      <button>submit</button>
  </div>


  );
}

export default Forminput;