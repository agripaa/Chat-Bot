import styled from "styled-components";

export const Container = styled.div`
  max-width: 80vw;
  min-height: 100vh;
  margin: 0 auto;

  @media only screen and (max-width: 768px) {
    max-width: 100vw;
  }
`;

export const Header = styled.div`
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
  display: flex;
  flex-direction: row;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ProductList = styled.div`
  padding: 24px;
  text-align: center;
  border: 2px solid rgba(0, 0, 0, 0.2);

  @media only screen and (max-width: 768px) {
    padding: 12px;
  }
`;

export const ProductId = styled.p`
  letter-spacing: 2px;
  font-size: 12px;
`;

export const ProductName = styled.h3`
  letter-spacing: 4px;
  margin-top: 1.5em;

  @media only screen and (max-width: 768px) {
    margin-top: 0.5em;
  }
`;

export const ProductDescription = styled.p`
  color: #242424;
  letter-spacing: 2px;
  margin-top: 2px;
  font-size: 12px;
`;

export const ProductPrice = styled.p`
  font-weight: 800;
  margin-top: 1.5em;

  @media only screen and (max-width: 768px) {
    margin-top: 0.5em;
  }
`;

export const Chat = styled.div`
  height: 280px;
  margin-top: 1em;
  border-top: 2px solid rgba(0, 0, 0, 0.2);
`;

export const ChatBox = styled.div`
  max-height: 600px;
  padding: 10px 15px;
  height: 100%;
  overflow: auto;
`;

export const WrapperBubbleBot = styled.div`
  width: fit-content;
  margin-bottom: 20px;
  margin-right: auto;
  overflow: hidden;
`;

export const WrapperBubbleUser = styled.div`
  width: fit-content;
  margin-bottom: 20px;
  margin-left: auto;
  overflow: hidden;
`;

export const BubbleBot = styled.div`
  width: fit-content;
  border-radius: 10px;
  padding: 10px;
  background-color: #3d85c6;
  color: #fff;
`;

export const BubbleUser = styled.div`
  width: fit-content;
  border-radius: 10px;
  padding: 10px;
  background-color: #e1e1e1;
`;

export const ChatInputWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-top: 2px solid rgba(0, 0, 0, 0.2);
  height: 80px;
`;

export const ChatInput = styled.input`
  padding: 8px 12px;
  border-radius: 8px;
  background: #f0edf7;
  outline: none;
  border: none;
  width: 60%;
  height: 35px;
`;

export const ChatSubmit = styled.button`
  padding: 5px 8px;
  border-radius: 8px;
  background: #2986cc;
  border: none;
  outline: none;
  color: #fff;
  cursor: pointer;
  width: 30%;
  height: 35px;
`;
