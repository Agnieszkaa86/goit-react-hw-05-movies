import styled from "styled-components";

export const StyledList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 10px;
  padding: 0px;
  list-style-type: none;
`;

export const StyledItem = styled.li`
  border: 1px solid black;
  border-radius: 12px;
  text-align: center;
  background-color: #878f99;
  overflow: hidden;
`;

export const Img = styled.img`
  display: block;
  max-width: 300px;
  width: 100%;
`;

