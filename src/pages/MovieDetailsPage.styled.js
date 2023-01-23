import styled from "styled-components";

export const Button = styled.button`
  margin-bottom: 25px;
  align-items: center;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: transparent 0 0 0 3px, rgba(18, 18, 18, 0.1) 0 6px 20px;
  box-sizing: border-box;
  color: #121212;
  cursor: pointer;
  display: inline-flex;
  flex: 1 1 auto;
  font-family: Inter, sans-serif;
  font-size: 1.2rem;
  font-weight: 700;
  justify-content: center;
  outline: none;
  padding: 0.5rem 0.5rem;
  text-align: center;
  text-decoration: none;
  transition: box-shadow 0.2s, -webkit-box-shadow 0.2s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  &:hover {
    box-shadow: #FF0000 0 0 0 3px, transparent 0 0 0 0;
  }
`;
