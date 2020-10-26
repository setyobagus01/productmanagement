import React from "react";
import Header from "../Header";
import styled from "styled-components";
import Product from "./inventory/Product";
function Inventory() {
  const InventoryContaner = styled.div`
    width: 85%;
    margin: 0 auto;
    padding-top: 5rem;
  `;
  const menuItem = {
    menu: ["All Products", "Coming soon", "Published", "Archieved"],
    addProduct: true,
  };
  return (
    <>
      <Header headerName={"Products"} menuItem={menuItem} />
      <InventoryContaner>
        <Product />
      </InventoryContaner>
    </>
  );
}

export default Inventory;
