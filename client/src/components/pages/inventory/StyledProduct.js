import styled from "styled-components";

export const SearchContainer = styled.form`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 2rem;
`;

export const SelectForm = styled.select`
  width: 15%;
  height: 5vh;
  border: 1px solid #d1cece;
`;

export const SearchForm = styled.input`
  width: 85%;
  height: 5vh;
  outline: none;
  border: 1px solid #d1cece;

  &:focus {
    border-color: #fd6565;
  }
`;

export const ShowProduct = styled.span`
  color: #b9b7b7;
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #b9b7b7;
  margin: 1.5rem 0;
`;

export const ProductList = styled.div`
  width: 100%;
`;

export const ProductItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease-in;
  margin-bottom: 2rem;
  cursor: pointer;

  &:hover {
    background-color: #f3f1f1;
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

export const ProductImage = styled.img`
  width: 60px;
  height: 66px;
  object-fit: cover;
  margin-right: 1rem;
`;

export const ProductName = styled.span`
  font-weight: 500;
  color: #050608;
`;

export const ProductUnit = styled.span`
  color: #b9b7b7;
`;

export const ItemName = styled.span`
  font-weight: 500;
  color: #050608;
  margin-right: 0.5rem;
`;

export const ItemUnit = styled.span`
  color: #b9b7b7;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
