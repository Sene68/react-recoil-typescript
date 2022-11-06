import React, { FC } from "react";
import TodoHead from "./TodoHead";
import TodoListFilters from "./TodoListFilter";
import TodoItem from "./TodoItem";
import TodoItemCreator from "./TodoItemCreator";
import { TodoListStateProp, filteredTodoListState } from "../recoil_state";
import { useRecoilValue } from "recoil";

const TodoList: FC = () => {
    const todoList = useRecoilValue<TodoListStateProp[]>(filteredTodoListState);

    return(
        <div className="todo-template-block">
            <TodoHead />
            <TodoListFilters />
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