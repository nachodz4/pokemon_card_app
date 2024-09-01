import styled from "styled-components";

export const Header = styled.header`
  background-color: #5a5f5f;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const Title = styled.h1`
  font-size: 2rem;
  color: white;
  margin: 0;
  font-weight: bold;
  font-family: "Roboto", sans-serif;
  letter-spacing: 2px;
`;

export const Container = styled.div`
  background-color: #f5f5f5;
  min-height: 100vh;
`;

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  padding: 20px;
`;

export const SearchBar = styled.input`
  padding: 10px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;
