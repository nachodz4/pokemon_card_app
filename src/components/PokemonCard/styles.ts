import styled from "styled-components";

export const Wrapper = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
`;

export const ContainerTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: baseline;
`;

export const DefaultImage = styled.div`
  width: 100px;
  height: 120px;
  background-color: #eee;
  margin-bottom: 10px;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
  margin-bottom: 10px;
`;

export const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 5px;
`;

export const Detail = styled.p`
  font-size: 14px;
  margin: 2px 0;
`;

export const HP = styled.p`
  font-size: 14px;
`;
