import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const Header = styled.div`
  max-width: 500px;
  height: 150px;
  background-color: #eaeaea;
  color: black;
  font-size: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  letter-spacing: 2px;
  text-transform: uppercase;
`;

export const Product = styled.div`
  max-width: 500px;
  height: 250px;
  display: flex;
`;

export const ProductList = styled.div`
  flex: 1 1 0px;
  height: 200px;
  border: 1px solid black;
  text-align: center;
`;

export const ProductName = styled.h3`
  letter-spacing: 4px;
`;

export const ProductDescription = styled.p`
  font-weight: 500;
`;

export const ProductPrice = styled.p`
  font-weight: 800;
`;

export const Chat = styled.div`
  max-width: 500px;
  height: 400px;
`;

export const ChatBox = styled.div`
  max-height: 600px;
  width: 100%;
  padding: 10px;
  overflow-y: auto;
`;

export const BubbleBot = styled.div`
  min-height: 30px;
  width: fit-content;
  padding: 6px;
  background-color: blue;
  margin: 8px 0;
  border-radius: 6px;
  color: white;
`;

export const BubbleUser = styled.div`
  min-height: 30px;
  width: fit-content;
  padding: 6px;
  background-color: #eaeaea;
  margin: 8px 0;
  margin-right: 26px;
  border-radius: 6px;
  margin-left: auto;
`;

export const ChatInputWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  border-top: 1px solid black;
  padding-top: 10px;
`;

export const ChatInput = styled.input`
  border-radius: 4px;
  border: 1px solid black;
  height: 30px;
  width: 60%;
`;

export const ChatSubmit = styled.button`
  border-radius: 4px;
  border: none;
  background-color: blue;
  color: white;
  height: 30px;
  width: 30%;
`;