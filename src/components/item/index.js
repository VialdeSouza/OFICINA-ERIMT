import React from "react";
import { FiX, FiCheck } from "react-icons/fi";
import "./item.css";

export const ItemToDo = ({ label, onRemove, onFinish }) => {
  return (
    <div className="item-to-do" data-testid="task" >
      <span className="item-to-do-label">{label}</span>
      <div>
        <button className="item-to-do-remove" aria-label={`remover a tarefa ${label}`} onClick={onRemove}>
          <FiX />
        </button>
        <button className='item-to-do-add' aria-label={`concluir a tarefa ${label}`} onClick={onFinish}>
          <FiCheck />
        </button>
      </div>
    </div>
  );
};
