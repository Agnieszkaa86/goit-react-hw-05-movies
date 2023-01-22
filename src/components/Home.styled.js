import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledLink = styled(NavLink)`
  font-weight: bold;
  font-size: 20px;
  color: black;
  margin-left: 25px;
  margin-top: 15px;
  &.active {
    color: red;
  }
`;

export const Nav = styled.div`
box-shadow: 0 4px 2px -2px gray;
  padding-bottom: 15px;
  margin-bottom: 25px;
`;
export const Wrapper = styled.div`
 margin-left: 25px;
`