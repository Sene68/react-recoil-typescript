import { atom, selector } from "recoil";

export interface TodoListStateProp {
    id: number;
    text: string;
    isComplete: boolean;
}

const todoListState = atom<TodoListStateProp[]>({
    key: "todoListState",
    default: []
});

const defaultTodoListState = selector<TodoListStateProp[]>({
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