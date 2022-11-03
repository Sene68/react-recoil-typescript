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

const todoListStatsState = selector<number>({
    key: "todoListStatsState",
    get: ({ get }) => {
      const todoList: TodoListStateProp[] = get(todoListState);
      const totalNum: number = todoList.length;
      const totalCompletedNum: number = todoList.filter((item: TodoListStateProp) => item.isComplete).length;
      const totalUncompletedNum: number = totalNum - totalCompletedNum;

      return totalUncompletedNum;
    }
});

export { 
    todoListState,
    defaultTodoListState,
    todoListStatsState
};