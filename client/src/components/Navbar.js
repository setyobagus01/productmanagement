import React, { useState } from "react";
import {
  Sidebar,
  IconStyleWrapper,
  MenuList,
  MenuItem,
  NavLinks,
} from "./StyledNavbar";

import { Home, UserGroup } from "@styled-icons/heroicons-outline";
import { Boxes } from "@styled-icons/fa-solid";
import { Send } from "@styled-icons/feather";
import { ThemeProvider } from "styled-components";

function Navbar() {
  const [active, setActive] = useState(false);
  return (
    <Sidebar>
      <IconStyleWrapper>
        <MenuList>
          <MenuItem active={active}>
            <Home size="28" />
            <NavLinks
              onClick={() => (active ? setActive(!active) : setActive(active))}
              to="/"
            >
              Home
            </NavLinks>
          </MenuItem>
          <MenuItem>
            <Boxes size="28" />
            <NavLinks to="/inventory">Inventory</NavLinks>
          </MenuItem>
          <MenuItem>
            <Send size="28" />
            <NavLinks to="/">Product</NavLinks>
          </MenuItem>
          <MenuItem>
            <UserGroup size="28" />
            <NavLinks to="/">Data CS</NavLinks>
          </MenuItem>
        </MenuList>
      </IconStyleWrapper>
    </Sidebar>
  );
}

export default Navbar;
