import data from "./data.json";
import ProductData from "./product.json";
import { useState, useEffect, useRef } from "react";

import {
  Container,
  Header,
  Product,
  ProductList,
  ProductId,
  ProductName,
  ProductDescription,
  ProductPrice,
  Chat,
  ChatInputWrapper,
  ChatInput,
  ChatSubmit,
  ChatBox,
  WrapperBubbleBot,
  WrapperBubbleUser,
  BubbleBot,
  BubbleUser,
} from "./styled";

const App = () => {
  const [productList, setProductList] = useState([]);
  const [chatInput, setChatInput] = useState("");
  const [chatList, setChatList] = useState([]);
  const [step, setStep] = useState("");
  const [keranjang, setKeranjang] = useState({});
  const [disableButton, setDisableButton] = useState(false);

  const chatRef = useRef();

  const submitChat = () => {
    let list;
    let chatBot;
    let chatUser = [];
    let isFinishChat = false;

    if (chatInput.length > 0) {
      chatUser = [...chatList, { sender: "user", chat: chatInput }];
      setChatList(chatUser);
    }

    if (chatList.length === 0) {
      chatBot = data.bot[0];
      setStep("name");
    } else if (step === "name") {
      chatBot = data.bot[1];
      setStep("product");

      const nama = { buyerName: chatInput };
      setKeranjang(nama);
    } else if (step === "product") {
      if (productList[chatInput - 1] === undefined) {
        chatBot = data.khusus[0];
      } else {
        chatBot = data.bot[2];
        setStep("jumlah");

        const product = { ...keranjang, ...productList[chatInput - 1] };
        setKeranjang(product);
      }
    } else if (step === "jumlah") {
      const jumlah = parseInt(chatInput);
      if (isNaN(jumlah)) {
        chatBot = data.khusus[1];
      } else {
        chatBot = data.bot[3];
        setStep("alamat");

        const dataJumlah = {
          jumlah: chatInput,
          totalHarga: keranjang.price * chatInput,
        };
        const product = { ...keranjang, ...dataJumlah };
        setKeranjang(product);
      }
    } else if (step === "alamat") {
      chatBot = data.bot[4];
      isFinishChat = true;

      const alamat = { alamat: chatInput };
      const product = { ...keranjang, ...alamat };
      setKeranjang(product);
    }
    setChatInput("");
    setDisableButton(true);

    list = [...chatUser, chatBot];
    setTimeout(() => {
      setChatList(list);
      setDisableButton(false);

      if (isFinishChat) {
        setTimeout(() => {
          setStep("selesai");
        }, 1000);
      }
    }, 700);
  };

  const repeatOrder = () => {
    setChatList([]);
    setKeranjang({});
    setStep("");
  };

  const textButton = () => {
    if (chatList.length === 0) {
      return "Mulai Chat";
    } else if (chatList.length > 0 && step !== "selesai") {
      return "Kirim";
    } else if (chatList.length > 0 && step === "selesai") {
      return "Pesan Lagi";
    }
  };

  const handleClick = () => {
    if (step === "selesai") {
      repeatOrder();
    } else {
      submitChat();
    }
  };

  const scrollToBottom = () => {
    chatRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    setProductList(ProductData.product);
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [chatList, step]);

  return (
    <Container>
      <Header>Toko Tokoan</Header>
      {/* Product */}
      <Product>
        {productList.map((product, index) => {
          return (
            <ProductList key={index}>
              <ProductId>ID Product: {product.id}</ProductId>
              <ProductName>{product.name}</ProductName>
              <ProductDescription>{product.description}</ProductDescription>
              <ProductPrice>Rp. {product.price}</ProductPrice>
            </ProductList>
          );
        })}
      </Product>

      {/* Chat */}
      <Chat>
        <ChatBox>
          {chatList.map((chat, index) => {
            return chat.sender === "bot" ? (
              <WrapperBubbleBot>
                <BubbleBot>{chat.chat}</BubbleBot>
              </WrapperBubbleBot>
            ) : (
              <WrapperBubbleUser>
                <BubbleUser>{chat.chat}</BubbleUser>
              </WrapperBubbleUser>
            );
          })}
          {step === "selesai" && (
            <WrapperBubbleBot>
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
            </WrapperBubbleBot>
          )}
          <div ref={chatRef} />
        </ChatBox>

        <ChatInputWrapper>
          <ChatInput
            value={chatInput}
            onChange={(event) => {
              setChatInput(event.target.value);
            }}
            disabled={chatList.length === 0 || step === "selesai"}
            placeholder={chatList.length === 0 ? "klik tombol mulai chat" : ""}
          />
          <ChatSubmit onClick={handleClick} disabled={disableButton}>
            {textButton()}
          </ChatSubmit>
        </ChatInputWrapper>
      </Chat>
    </Container>
  );
};

export default App;
