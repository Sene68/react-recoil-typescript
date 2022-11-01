import { atom, selector } from "recoil";

export interface TodoListState {
    id: number;
    text: string;
    isComplete: boolean;
}

const todoListState = atom<TodoListState[]>({
    key: "todoListState",
    default: []
});

const defaultTodoListState = selector<TodoListState[]>({
    key: "defaultTodoListState",
    get: ({ get }) => {
        const list = get(todoListState);   
        return list;
        }
    },
);

export { 
    todoListState,
    defaultTodoListState
};