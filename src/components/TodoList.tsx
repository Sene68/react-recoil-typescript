import TodoHead from "./TodoHead";
import TodoItemCreator from "./TodoItemCreator";
import { defaultTodoListState } from "../recoil_state";
import { useRecoilValue } from "recoil";

export default function TodoList() {
    const todoList = useRecoilValue(defaultTodoListState);

    return(
        <div className="todo-template-block">
            <TodoHead />
            <div className="todo-list-block">
                {todoList.map((todoItem) => (
                    <>
                        <p>{todoItem.id}</p>
                        <p>{todoItem.text}</p>
                    </>
                ))}
            </div>
            <TodoItemCreator />
        </div>
    );
}