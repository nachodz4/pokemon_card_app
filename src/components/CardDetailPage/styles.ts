import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const CardWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 80%;
  margin: 20px 0;
`;

export const PageTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

export const BattleSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const BattleWith = styled.p`
  font-size: 18px;
  margin-bottom: 10px;
`;

export const Dropdown = styled.select`
  padding: 10px;
  margin-bottom: 20px;
`;

export const BattleButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 18px;
  &:hover {
    background-color: #0056b3;
  }
`;

export const VS = styled.div`
  width: 80px;
  height: 80px;
  background-color: #007bff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 24px;
  font-weight: bold;
  margin: 20px 0;
`;
