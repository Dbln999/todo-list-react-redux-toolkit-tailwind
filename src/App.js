import "./index.css";
import TodoForm from "./components/TodoForm";
import { connect } from "react-redux";
import Todo from "./components/Todo";

function App({ todos }) {
  return (
    <div className="App flex justify-center">
      <div className="w-[550px] mt-14 pb-[100px] rounded border bg-blue-200">
        <TodoForm />
        <div className="">
          {todos.map((todo, idx) => (
            <Todo idx={idx} key={todo.id} todo={todo}></Todo>
          ))}
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    todos: state.todos.todos,
  };
};
export default connect(mapStateToProps, null)(App);
