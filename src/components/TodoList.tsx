import React, { FC } from "react";
import TodoHead from "./TodoHead";
import TodoItem from "./TodoItem";
import TodoItemCreator from "./TodoItemCreator";
import { TodoListStateProp, defaultTodoListState } from "../recoil_state";
import { useRecoilValue } from "recoil";

const TodoList: FC = () => {
    const todoList = useRecoilValue<TodoListStateProp[]>(defaultTodoListState);

    return(
        <div className="todo-template-block">
            <TodoHead />
            <div className="todo-list-block">
                {todoList.map((todoItem) => (
                    <>
                        <TodoItem item={todoItem} />
                    </>
                ))}
            </div>
            <TodoItemCreator />
        </div>
    );
}

export default TodoList;