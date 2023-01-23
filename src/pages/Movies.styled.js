import styled from "styled-components";

export const Button = styled.button`
  margin-left: 5px;
  align-items: center;
  background-color: #e9e9e9;
  border-radius: 3px;
  box-shadow: transparent 0 0 0 3px, rgba(18, 18, 18, 0.1) 0 6px 20px;
  box-sizing: border-box;
  color: #121212;
  cursor: pointer;
  display: inline-flex;
  vertical-align: middle; 
  vertical-align: text-bottom;
  flex: 1 1 auto;
  font-family: Inter, sans-serif;
  font-size: 1rem;
  font-weight: 700;
  justify-content: center;
  line-height: 1;
  outline: none;
  padding: 1.1rem 1.2rem;
  text-align: center;
  text-decoration: none;
  transition: box-shadow 0.2s, -webkit-box-shadow 0.2s;
  white-space: nowrap;
  border: 0.2;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  &:hover {
    box-shadow: #121212 0 0 0 2px, transparent 0 0 0 0;
  }
`;

export const Input = styled.input`
  font-size: 2rem;
  border-radius: 3px;
  padding: 0.4rem 0.5rem;
  vertical-align: middle; 
  vertical-align: text-bottom;

`;