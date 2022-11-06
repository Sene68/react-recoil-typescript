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

const todoListFilterState = atom<string>({
    key: "todoListFilterState",
    default: "Show All"
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

const filteredTodoListState = selector<TodoListStateProp[]>({
    key: "filteredTodoListState",
    get: ({ get }) => {
      const filter: string = get(todoListFilterState);
      const list: TodoListStateProp[] = get(todoListState);
  
      switch (filter) {
        case "Show Completed":
          return list.filter((item: TodoListStateProp) => item.isComplete);
        case "Show Uncompleted":
          return list.filter((item: TodoListStateProp) => !item.isComplete);
        default:
          return list;
      }
    },
});

export { 
    todoListState,
    todoListFilterState,
    defaultTodoListState,
    todoListStatsState,
    filteredTodoListState
};