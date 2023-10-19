import React from "react";
import { NavLink } from "react-router-dom";


const Items = () => {
  return (
    <div>
      <h1>Item List</h1>
      
      <ul>
        <li>
          <NavLink to="items/1">Item 1</NavLink>
        </li>
        <li>
          <NavLink to="items/2">Item 2</NavLink>
        </li>
        <li>
          <NavLink to="items/3">Item 3</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Items;
