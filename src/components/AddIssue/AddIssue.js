import React, { useState } from 'react';
import "./AddIssue.css"

function AddIssue() {
  const [desc, setDesc] = useState(true)
  const [dev, setDev] = useState(true)
  const [priority, setPriority] = useState(true)

  return (
    <div className="add-issue">
      <form>
          <label>Description<input id = "description" type = "text" placeholder = "Description of Issue..." onKeyUp ={() => setDesc(document.getElementById("description").value)}/></label>
          <label>Assign To
            <select name = "forDev" id = "forDev" onChange = {() => setDev(document.getElementById("forDev").value)}>
                <option value = "John">John</option>
                <option value = "Sally">Sally</option>
                <option value = "Barbara">Barbara</option>
                <option value = "Steve">Steve</option>
            </select>
          </label>
          <label>Priority Level
            <select name = "priority" id = "priority" onChange = {() => setPriority(document.getElementById("priority").value)}>
                <option value = "Low">Low</option>
                <option value = "Medium">Medium</option>
                <option value = "High">High</option>
                <option value = "Critical">Critical</option>
            </select>
          </label>
          <button type = "submit" onSubmit = {(e) => {
            e.preventDefault()
            addToLocalStorage()

          }}>Add</button>
      </form>
    </div>
  );
}

export default AddIssue;
