import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const HeaderDashboard = styled.header`
  height: 25vh;
  width: 100%;
  background-color: #f0f2f4;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Nav = styled.nav`
  width: 85%;
  height: 15vh;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
`;

export const ProfileWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  position: relative;
`;

export const ImageProfile = styled.img`
  display: inline;
  object-fit: cover;
  object-position: center;
  height: 100%;
  width: 100%;

  &:hover {
    background-color: #050608;
  }

  ${(props) =>
    props.circle &&
    css`
      border-radius: 50%;
    `}
`;

export const CircleImage = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: #4a5874;
  overflow: hidden;
  margin-right: 1rem;
  cursor: pointer;

  &:hover {
    background: #050608;
  }
`;

export const ModalProfile = styled.div`
  position: fixed;
  width: 250px;
  height: 30vh;
  top: 7%;
  right: 8%;
  background-color: #fff;
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  display: ${(props) => (props.modal ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
`;

export const ModalImage = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
  margin: 1rem 0;
`;

export const ProfileName = styled.span`
  font-weight: 500;
  color: #050608;
`;

export const LogoutButton = styled.button`
  border-radius: 5px;
  border: 1px solid #ddd9d9;
  outline: none;
  background: none;
  padding: 0.7rem 3rem;
  transition: all 0.3s ease;
  margin-top: 4rem;

  &:hover {
    background-color: #f1f1f1;
  }
`;

export const ContentMenu = styled.div`
  width: 85%;
  height: 27vh;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  justify-content: space-between;
`;

export const PageWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 1rem;
  align-items: center;
`;

export const PageTitle = styled.h1`
  display: inline-block;
  color: #050608;
  font-weight: 500;
`;

export const AddButton = styled.button`
  height: 40px;
  padding: 0 2rem;
  color: white;
  background-color: #fd6565;
  outline: none;
  border: none;
  border-radius: 5px;
  font-weight: 500;

  &:hover {
    background-color: #e05252;
  }
`;

export const Menubar = styled.ul`
  display: flex;
  padding: 0;
  width: auto;
`;

export const MenubarItem = styled.li`
  list-style: none;
  height: 4vh;
  /* padding: 1rem 0; */
  margin-right: 2rem;
  font-weight: 600;
  color: #ab9595;
  display: inline-block;
  cursor: pointer;
  font-weight: 500;

  &::after {
    content: "";
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    width: 0%;
    height: 2px;
    background: #5f5656;
    transition: width 0.5s ease;
    margin-top: 0.7rem;
  }

  ${(props) =>
    props.active &&
    css`
      color: #050608;

      &::after {
        content: "";
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto;
        width: 100%;
        height: 2px;
        background: #5f5656;
        transition: width 0.5s ease;
        margin-top: 0.7rem;
      }
    `}

  &:hover {
    color: #050608;

    &::after {
      width: 100%;
      transition: width 0.5s ease;
    }
  }
`;
