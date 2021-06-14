import React from "react";
import ClassNames from "classnames";

const Task = ({ id, done, text, onChange, onDelete }) => {
  return (
    <li className={ClassNames("list-item", { "list-item_done": done })}>
      <input
        type="checkbox"
        className="list-item__checkbox"
        defaultChecked={done}
        onChange={() => onChange(id)}
      />
      <span className="list-item__text">{text}</span>
      <button
        className="list-item__delete-btn"
        onClick={() => onDelete(id)}
      ></button>
    </li>
  );
};

export default Task;
