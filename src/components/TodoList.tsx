import TodoHead from "./TodoHead";
import TodoItemCreator from "./TodoItemCreator";

export default function TodoList() {
    return(
        <div className="todo-template-block">
            <TodoHead />
            <div className="todo-list-block">

            </div>
            <TodoItemCreator />
        </div>
    );
}