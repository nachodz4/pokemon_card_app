import { styled } from "styled-components";

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 8px;
  width: 300px;
`;

export const DefaultImage = styled.div`
  height: 200px;
  background-color: #eee;
  margin-bottom: 20px;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
  margin-bottom: 20px;
`;

export const ContainerTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: baseline;
`;

export const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

export const Detail = styled.p`
  font-size: 18px;
  margin: 5px 0;
`;

export const HP = styled.p`
  font-size: 14px;
`;
