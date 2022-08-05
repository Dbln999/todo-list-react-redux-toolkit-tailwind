import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo } from "../store/todoSlice";

const TodoForm = ({ ...props }) => {
  const [form, setForm] = useState("");

  const addTodoForm = () => {
    if (form.trim()) {
      props.addTodo(form);
      setForm("");
    }
  };

  return (
    <div className="flex justify-center w-full mt-6">
      <input
        type="text"
        className="rounded px-4"
        value={form}
        onChange={(e) => setForm(e.target.value)}
      />
      <button
        className="rounded-2xl w-[90px] ml-5 h-10 bg-green-300 hover:scale-110 active:translate-y-1"
        onClick={addTodoForm}
      >
        ADD
      </button>
    </div>
  );
};

const mapDispatchToForm = {
  addTodo,
};

export default connect(null, mapDispatchToForm)(TodoForm);
