import React from 'react';
import styled, { css } from 'styled-components';
import { MdDone, MdDelete } from 'react-icons/md';
import { TodoListStateProp } from "../recoil_state";

interface CheckCircleProps {
    onClick: any;
    done: boolean;
}

interface TextProps {
    done: boolean;
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

function TodoItem(props: { item: TodoListStateProp }) {
    const toggleItemCompletion = () => {
        console.log('toggle!');
    };

    const deleteItem = () => {
        console.log('delete!');
    };

    return (
        <TodoItemBlock>
          <CheckCircle done={props.item.isComplete} onClick={toggleItemCompletion}>
            {props.item.isComplete && <MdDone />}
          </CheckCircle>
          <Text done={props.item.isComplete}>{props.item.text}</Text>
          <Remove>
            <MdDelete onClick={deleteItem} />
          </Remove>
        </TodoItemBlock> 
    );
  }
  
  export default TodoItem;