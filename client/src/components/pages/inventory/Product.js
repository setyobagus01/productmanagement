import React from "react";

import {
  SearchContainer,
  SearchForm,
  SelectForm,
  ProductList,
  ProductItem,
  ImageWrapper,
  ProductImage,
  TitleWrapper,
  ProductName,
  ProductUnit,
  ItemName,
  ItemUnit,
  TextWrapper,
  ShowProduct,
  Line,
} from "./StyledProduct";

import photo1 from "../../../assets/images/photo1.jpg";
import photo2 from "../../../assets/images/photo2.jpg";

function Product() {
  return (
    <>
      <SearchContainer>
        <SelectForm id="filter">
          <option value="product">Filter</option>
          <option value="product">Product</option>
          <option value="product">Product</option>
          <option value="product">Product</option>
        </SelectForm>
        <SearchForm type="text" />
      </SearchContainer>
      <ShowProduct>Showing 2 Products</ShowProduct>
      <Line />
      <ProductList>
        <ProductItem>
          <ImageWrapper>
            <ProductImage src={photo1} />
            <TitleWrapper>
              <ProductName>Garam Himalaya - KASAR</ProductName>
              <ProductUnit>500 Gr</ProductUnit>
            </TitleWrapper>
          </ImageWrapper>
          <TextWrapper>
            <ItemName>Brand:</ItemName>
            <ItemUnit>Ibnu Sina</ItemUnit>
          </TextWrapper>
          <TextWrapper>
            <ItemName>Stock:</ItemName>
            <ItemUnit>232</ItemUnit>
          </TextWrapper>
          <TextWrapper>
            <ItemName>Price:</ItemName>
            <ItemUnit>Rp 23.000</ItemUnit>
          </TextWrapper>
          <TextWrapper>
            <ItemName>HET:</ItemName>
            <ItemUnit>Rp 75.000</ItemUnit>
          </TextWrapper>
        </ProductItem>

        <ProductItem>
          <ImageWrapper>
            <ProductImage src={photo2} />
            <TitleWrapper>
              <ProductName>Garam Himalaya - KASAR</ProductName>
              <ProductUnit>500 Gr</ProductUnit>
            </TitleWrapper>
          </ImageWrapper>
          <TextWrapper>
            <ItemName>Brand:</ItemName>
            <ItemUnit>Ibnu Sina</ItemUnit>
          </TextWrapper>
          <TextWrapper>
            <ItemName>Stock:</ItemName>
            <ItemUnit>232</ItemUnit>
          </TextWrapper>
          <TextWrapper>
            <ItemName>Price:</ItemName>
            <ItemUnit>Rp 23.000</ItemUnit>
          </TextWrapper>
          <TextWrapper>
            <ItemName>HET:</ItemName>
            <ItemUnit>Rp 75.000</ItemUnit>
          </TextWrapper>
        </ProductItem>
      </ProductList>
    </>
  );
}

export default Product;
