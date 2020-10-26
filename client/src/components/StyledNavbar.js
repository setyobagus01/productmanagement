import styled, { css } from "styled-components";
import { StyledIconBase } from "@styled-icons/styled-icon";
import { Link } from "react-router-dom";

export const Sidebar = styled.div`
  min-width: 12%;

  min-height: 100vh;
  background-color: #050608;
`;

export const IconStyleWrapper = styled.div`
  ${StyledIconBase} {
    color: ${(props) => (props.active ? "white" : "#7A8396")};
    margin-right: 1.5rem;
  }
`;

export const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0;
  height: 35vh;
  justify-content: space-around;
  align-items: center;
  padding-top: 2rem;
`;

export const NavLinks = styled(Link)`
  text-decoration: none;
  color: ${(props) => (props.active ? "white" : "#7A8396")};
  font-size: 0.9rem;
`;

export const MenuItem = styled.li`
  width: 80%;
  display: flex;
  list-style: none;
  align-items: center;
  text-align: center;

  ${(props) =>
    props.active &&
    css`
      ${StyledIconBase} {
        color: #9ad6b1;
      }

      ${NavLinks} {
        color: #9ad6b1;
      }
    `}

  &:hover {
    ${StyledIconBase} {
      color: #9ad6b1;
    }

    ${NavLinks} {
      color: #9ad6b1;
    }
  }
`;
