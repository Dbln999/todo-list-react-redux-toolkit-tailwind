import React, { useState } from "react";
import { connect } from "react-redux";
import { removeTodo, setCompleted, todoChange } from "../store/todoSlice";

function Todo({ todo, idx, ...props }) {
  const line = todo.completed && "line-through text-red-300";

  const [disabled, setDisabled] = useState(true);

  const [title, setTitle] = useState(todo.title);

  const todoChange = () => {
    setDisabled(!disabled);
    if (!disabled) {
      props.todoChange({ id: idx, title: title });
    }
  };

  return (
    <div className="flex justify-evenly w-full mt-4 text-xl">
      <p className="cursor-pointer hover:-translate-y-1" onClick={todoChange}>
        &#x270F;
      </p>
      <div className="flex justify-center">
        <input
          type="checkbox"
          className="mr-1"
          onClick={() => props.setCompleted(idx)}
          name=""
          id=""
        />
        <input
          className={`rounded text-center ${line}`}
          value={title}
          size={title.length}
          onChange={(e) => setTitle(e.target.value)}
          disabled={disabled}
        ></input>
      </div>
      <p className="cursor-pointer hover:-translate-y-1" onClick={() => props.removeTodo(todo.id)}>
        🗑️
      </p>
    </div>
  );
}

const mapDispatchToForm = {
  removeTodo,
  setCompleted,
  todoChange,
};

export default connect(null, mapDispatchToForm)(Todo);
