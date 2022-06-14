import React from 'react';
import "./AddIssue.css"

function AddIssue() {


  return (
    <div className="add-issue">
      <form>
          <label>Description<input type = "text" placeholder = "Description of Issue..."/></label>
          <label>Assign To
            <select name = "forDev" id = "forDev">
                <option value = "John">John</option>
                <option value = "Sally">Sally</option>
                <option value = "Barbara">Barbara</option>
                <option value = "Steve">Steve</option>
            </select>
          </label>
          <label>Priority Level
            <select name = "priority" id = "priority">
                <option value = "Low">Low</option>
                <option value = "Medium">Medium</option>
                <option value = "High">High</option>
                <option value = "Critical">Critical</option>
            </select>
          </label>
          <button type = "submit">Add</button>
      </form>
    </div>
  );
}

export default AddIssue;
