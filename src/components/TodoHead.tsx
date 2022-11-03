import React, { FC } from 'react';
import styled from 'styled-components';
import { useRecoilValue } from "recoil";
import { todoListStatsState } from "../recoil_state";

const TodoHeadBlock = styled.div`
  padding-top: 48px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid #e9ecef;
  h1 {
    margin: 0;
    font-size: 36px;
    color: #343a40;
  }
  .day {
    margin-top: 4px;
    color: #868e96;
    font-size: 21px;
  }
  .tasks-left {
    color: #20c997;
    font-size: 18px;
    margin-top: 40px;
    font-weight: bold;
  }
`;

const TodoHead: FC = () => {
  const totalUncompletedNum: number = useRecoilValue<number>(todoListStatsState);

  const today: Date = new Date();
  const dateString: string = today.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  const dayName: string = today.toLocaleDateString('ko-KR', { weekday: 'long' });

  return (
    <TodoHeadBlock>
      <h1>{dateString}</h1>
      <div className="day">{dayName}</div>
      <div className="tasks-left">할 일 {totalUncompletedNum}개 남음</div>
    </TodoHeadBlock>
  );
}

export default TodoHead;