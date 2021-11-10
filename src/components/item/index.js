import React from "react";
import { FiX, FiCheck } from "react-icons/fi";
import "./item.css";

export const ItemToDo = ({ label, onRemove, onFinish }) => {
  return (
    <div className="item-to-do" data-testid="task" >
      <span className="item-to-do-label">{label}</span>
      <div>
        <button className="item-to-do-remove" aria-label="Remove a tarefa" onClick={onRemove}>
          <FiX />
        </button>
        <button className='item-to-do-add' aria-label="Conclui a tarefa" onClick={onFinish}>
          <FiCheck />
        </button>
      </div>
    </div>
  );
};
