import React, { FC } from 'react';
import styled, { css } from 'styled-components';
import { MdDone, MdDelete } from 'react-icons/md';
import { useRecoilState } from "recoil";
import { TodoListStateProp, todoListState } from "../recoil_state";

interface CheckCircleProps {
    onClick: any;
    done: boolean;
}

interface TextProps {
    done: boolean;
}

interface TodoitemProps {
    item: TodoListStateProp;
}

const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
  display: none;
`;

const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  &:hover {
    ${Remove} {
      display: initial;
    }
  }
`;

const CheckCircle = styled.div<CheckCircleProps>`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  border: 1px solid #ced4da;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  ${props =>
    props.done &&
    css`
      border: 1px solid #38d9a9;
      color: #38d9a9;
    `}
`;

const Text = styled.div<TextProps>`
  flex: 1;
  font-size: 21px;
  color: #495057;
  ${props =>
    props.done &&
    css`
      color: #ced4da;
    `}
`;


const replaceItemAtIndex = (arr: TodoListStateProp[], index: number, newValue: TodoListStateProp) => {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
};


const TodoItem: FC<TodoitemProps> = ({ item }) => {
    const [todoList, setTodoList] = useRecoilState<TodoListStateProp[]>(todoListState);
    const index: number = todoList.findIndex((listItem: TodoListStateProp) => listItem === item);

    const toggleItemCompletion = () => {
        const newList = replaceItemAtIndex(todoList, index, {
          ...item,
          isComplete: !item.isComplete
        });
    
        setTodoList(newList);
    };

    const deleteItem = () => {
        console.log('delete!');
    };

    return (
        <TodoItemBlock>
          <CheckCircle done={item.isComplete} onClick={toggleItemCompletion}>
            {item.isComplete && <MdDone />}
          </CheckCircle>
          <Text done={item.isComplete}>{item.text}</Text>
          <Remove>
            <MdDelete onClick={deleteItem} />
          </Remove>
        </TodoItemBlock> 
    );
  }
  
  export default TodoItem;