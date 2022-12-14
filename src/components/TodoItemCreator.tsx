import React, { FC, useState } from "react";
import { useSetRecoilState } from "recoil";
import { todoListState } from "../recoil_state";
import styled, { css } from 'styled-components';
import { MdAdd } from 'react-icons/md';

interface CircleButtonProps {
    onClick: any;
    open: boolean;
}

interface InputProps {
    value: string;
    onChange: any;
}

interface InputFormProps {
    onSubmit: any;
}


const CircleButton = styled.button<CircleButtonProps>`
  background: #38d9a9;
  &:hover {
    background: #63e6be;
  }
  &:active {
    background: #20c997;
  }

  z-index: 5;
  cursor: pointer;
  width: 80px;
  height: 80px;
  display: block;
  align-items: center;
  justify-content: center;
  font-size: 60px;
  position: absolute;
  left: 50%;
  bottom: 0px;
  transform: translate(-50%, 50%);
  color: white;
  border-radius: 50%;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;

  transition: 0.125s all ease-in;
  ${props =>
    props.open &&
    css`
      background: #ff6b6b;
      &:hover {
        background: #ff8787;
      }
      &:active {
        background: #fa5252;
      }
      transform: translate(-50%, 50%) rotate(45deg);
    `}
`;

const InsertFormPositioner = styled.div`
  width: 100%;
  bottom: 0;
  left: 0;
  position: absolute;
`;

const InsertForm = styled.form<InputFormProps>`
  background: #f8f9fa;
  padding-left: 32px;
  padding-top: 32px;
  padding-right: 32px;
  padding-bottom: 72px;

  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top: 1px solid #e9ecef;
`;

const Input = styled.input<InputProps>`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 100%;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
`;

let id: number = 0;
function getId() {
  return id++;
}

const TodoItemCreator: FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");
  const setTodoList = useSetRecoilState(todoListState);

  const onToggle = () => setOpen(!open);

  const addItem = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: getId(),
        text: inputValue,
        isComplete: false
      }
    ]);
    setInputValue("");
    setOpen(false);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setInputValue(e.target.value);
  };

  return (
    <>
      {open && (
        <InsertFormPositioner>
          <InsertForm onSubmit={addItem}>
            <Input autoFocus placeholder="??? ?????? ?????? ???, Enter ??? ????????????" value={inputValue} onChange={onChange} />
          </InsertForm>
        </InsertFormPositioner>
      )}
      <CircleButton onClick={onToggle} open={open}>
        <MdAdd />
      </CircleButton>
    </>
  );
}

export default TodoItemCreator;