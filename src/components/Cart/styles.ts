import styled from "styled-components";

export const CartList = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: auto;
`;

export const Container = styled.div`
  height: 300px;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: 1rem;
  }

  span {
    font-size: 0.8rem;
  }

  img {
    height: 100px;
  }
`;
