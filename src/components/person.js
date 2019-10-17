import React from "react";
import "./person.css";

const Person = props => {
  return (
    <div className="person">
      <p onClick={props.click}>
        My name is {props.name} my age is :{props.age}
      </p>
      <input onChange={props.change} value={props.name}></input>
    </div>
  );
};
export default Person;
