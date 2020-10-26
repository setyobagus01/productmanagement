import React, { useState } from "react";
import {
  HeaderDashboard,
  Nav,
  ProfileWrapper,
  CircleImage,
  ContentMenu,
  PageTitle,
  Menubar,
  MenubarItem,
  ImageProfile,
  PageWrapper,
  AddButton,
  ModalProfile,
  ModalImage,
  ProfileName,
  LogoutButton,
} from "./StyledHeader";

function Header({ headerName, menuItem }) {
  const [modal, setModal] = useState(false);
  return (
    <HeaderDashboard>
      <Nav>
        <ProfileWrapper>
          <CircleImage onClick={() => setModal(!modal)}>
            <ImageProfile src={require("../assets/images/aboutme.jpg")} />
          </CircleImage>

          <ModalProfile modal={modal}>
            <ModalImage>
              <ImageProfile
                circle
                src={require("../assets/images/aboutme.jpg")}
              />
            </ModalImage>
            <ProfileName>Setyo Bagus Nugraha</ProfileName>
            <LogoutButton>Logout</LogoutButton>
          </ModalProfile>
        </ProfileWrapper>
      </Nav>
      <ContentMenu>
        <PageWrapper>
          <PageTitle>{headerName ? headerName : "Dashboard"}</PageTitle>
          {menuItem.addProduct ? <AddButton>Upload</AddButton> : null}
        </PageWrapper>

        <Menubar>
          {/* <MenubarItem active>
            {menuItem ? menuItem.first : "Summary"}
          </MenubarItem>
          <MenubarItem>{menuItem ? menuItem.second : "Orders"}</MenubarItem> */}
          {menuItem.menu.map((menu) => {
            return <MenubarItem>{menu}</MenubarItem>;
          })}
        </Menubar>
      </ContentMenu>
    </HeaderDashboard>
  );
}

export default Header;
