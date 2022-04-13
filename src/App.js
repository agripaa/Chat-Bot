import data from "./data.json";
import ProductData from "./product.json";
import { useState, useEffect } from "react";

import {
  Container,
  Header,
  Product,
  ProductList,
  ProductName,
  ProductDescription,
  ProductPrice,
  Chat,
  ChatInputWrapper,
  ChatInput,
  ChatSubmit,
  ChatBox,
  BubbleBot,
  BubbleUser,
} from "./styled";

const App = () => {
  const [productList, setProductList] = useState([]);
  const [chatInput, setChatInput] = useState("");
  const [chatList, setChatList] = useState([]);
  const [step, setStep] = useState("");
  const [keranjang, setKeranjang] = useState({});

  const submitChat = () => {
    let list;
    let chatBot;
    let chatUser = [];

    if (chatList.length === 0) {
      chatBot = data.bot[0];
      setStep("name");
    } else if (step === "name") {
      chatUser = [...chatList, { sender: "user", chat: chatInput }];
      chatBot = data.bot[1];
      setStep("product");

      let nama = { buyerName: chatInput };
      setKeranjang(nama);
    } else if (step === "product") {
      chatUser = [...chatList, { sender: "user", chat: chatInput }];
      chatBot = data.bot[2];
      setStep("jumlah");

      let product = { ...keranjang, ...productList[chatInput - 1] };
      setKeranjang(product);
    } else if (step === "jumlah") {
      chatUser = [...chatList, { sender: "user", chat: chatInput }];
      chatBot = data.bot[3];
      setStep("alamat");

      let jumlah = {
        jumlah: chatInput,
        totalHarga: keranjang.price * chatInput,
      };
      let product = { ...keranjang, ...jumlah };
      setKeranjang(product);
    } else if (step === "alamat") {
      chatUser = [...chatList, { sender: "user", chat: chatInput }];
      chatBot = data.bot[4];
      setStep("selesai");

      let alamat = { alamat: chatInput };
      let product = { ...keranjang, ...alamat };
      setKeranjang(product);
    }
    setChatInput("");

    if (chatInput.length > 0) setChatList(chatUser);
    list = [...chatUser, chatBot];

    setTimeout(() => {
      setChatList(list);
    }, 700);
  };

// const handlerKeyboard = (x) => {
//     if (x.keyCode == 13) {
//       handleSubmitChat();
//     }
//   };

  useEffect(() => {
    setProductList(ProductData.product);
  }, []);

  return (
    <Container>
      <Header>Toko Cuy</Header>
      {/* Ini Product */}
      <Product>
        {productList.map((product, index) => {
          return (
            <ProductList key={index}>
              <p>Id Product: {product.id}</p>
              <ProductName>{product.name}</ProductName>
              <ProductDescription>{product.description}</ProductDescription>
              <ProductPrice>Rp. {product.price}</ProductPrice>
            </ProductList>
          );
        })}
      </Product>

      {/* Ini Chat */}
      <Chat>
        <ChatBox>
          {chatList.map((chat, index) => {
            return chat.sender === "bot" ? (
              <BubbleBot>{chat.chat}</BubbleBot>
            ) : (
              <BubbleUser>{chat.chat}</BubbleUser>
            );
          })}
          {step === "selesai" && (
            <BubbleBot>
              Pembelian anda:
              <br />
              Nama: {keranjang.buyerName}
              <br />
              Alamat: {keranjang.alamat}
              <br />
              Nama produk: {keranjang.name}
              <br />
              Harga produk: {keranjang.price}
              <br />
              Jumlah beli: {keranjang.jumlah}
              <br />
              Total Harga: {keranjang.totalHarga}
            </BubbleBot>
          )}
        </ChatBox>
        <ChatInputWrapper>
          <ChatInput
            value={chatInput}
            onChange={(event) => {
              setChatInput(event.target.value);
            }}
          />
          <ChatSubmit onClick={submitChat}>Submit</ChatSubmit>
        </ChatInputWrapper>
      </Chat>
    </Container>
  );
};

export default App;