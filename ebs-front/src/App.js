/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import https from 'https';
import axios from "axios";
import styled from "styled-components";
import image from "./assets/image.png";
import adban from "./assets/adban.png";
import soluni from "./assets/soluni.png";
import Header from "./components/Header";
import Input from "./components/Input";
import ImgCard from "./components/ImgCard";
import Card from "./components/Card";
import Link from "./components/Link";
import Footer from "./components/Footer";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0;
`

const Center = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height:100%;
`

const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin-top:50px;
`

const Bookgoing = styled.a`
  background-color: #004068;
  color: white;
  border-radius: 12px;
  box-shadow: 0px 5px 10px 0px rgba(97,97,97,0.25);
  height:160px;
  width: 200px;
  outline: none;
  border: none;
  display: flex;
  flex-direction: column ;
  justify-content: center;
  align-items: center;
  text-decoration: none;
`

const ImgCardWrapper = styled.div`
    display: grid;
    grid-template-columns: 220px 220px 220px 220px;
    grid-template-rows: 180px 180px
`
const ImgCardWrapper2 = styled.div`
    display: grid;
    grid-template-columns: 440px 220px 220px;
    grid-template-rows: 190px;
`

const CardWrapper = styled.div`
  display: grid;
  margin-left: 20px;
  grid-template-columns: 198px 208px;
  grid-template-rows: 88px 88px 88px 88px 88px 88px;
`

const Navigation = styled.div`
  background-color: #e0e0e0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: 250px;
`

const Menu = styled.a`
  background-color: ${(props) => (props.active ? "#4E81C0" : "#e0e0e0")};
  color: ${(props) => (props.active ? "white" : "#55585c")};
  border-radius: 30px;
  height:40px;
  width: 160px;
  outline: none;
  border: 1px solid #cccccc;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  line-height: 25px;
  text-decoration: none;
  margin-bottom: 10px;
`

const AdImage = styled.a`
    background-image: url(${image});
    background-position: center;
    background-size: 100%;
    border-radius: 12px;
    height:160px;
    width: 420px;
    outline: none;
    border: none;
    display: flex;
    margin: 0;
`

const agent = new https.Agent({
  rejectUnauthorized: false
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgCards: [], cards: [], prev: [], bookgoing: [], next: [],
      notice_1: [], notice_2: [], notice_3: [], menu: 0
    }
  }
  menuChange = (change) => {this.setState({menu: change})}
  getCategory = async () => {
    try{
      const {data:cards} = await axios.get("http://52.79.86.165/category", {httpsAgent: agent});
      this.setState({ cards });
    }
    catch(e){
      console.log("getCategroy error");
    }
  }
  getContents = async () => {
    try{
      const { data:imgCards } = await axios.get("http://52.79.86.165/contents", {httpsAgent: agent});
      const prev = imgCards.filter(imgCard => imgCard.id < 9 );
      const bookgoing = imgCards.filter(imgCard => imgCard.id === 9 );
      const next = imgCards.filter(imgCard => imgCard.id > 9 );
      this.setState({prev});
      this.setState({bookgoing});
      this.setState({next});
    }
    catch(e){
      console.log("getContents error");
    }
  }
  getNotice1 = async () => {
    try{
      const { data:notice_1 } = await axios.get("http://52.79.86.165/notice1", {httpsAgent: agent});
      this.setState({ notice_1 });
    }
    catch(e){
      console.log("getNotice1 error");
    }
  }
  getNotice2 = async () => {
    try{
      const { data:notice_2 } = await axios.get("http://52.79.86.165/notice2", {httpsAgent: agent});
      this.setState({ notice_2 });
    }
    catch(e){
      console.log("getNotice2 error");
    }
  }
  getNotice3 = async () => {
    try{
      const { data:notice_3 } = await axios.get("http://52.79.86.165/notice3", {httpsAgent: agent});
      this.setState({ notice_3 });
    }
    catch(e){
      console.log("getNotice3 error");
    }
  }
  componentDidMount() {
    this.getCategory();
    this.getContents();
    this.getNotice1();
    this.getNotice2();
    this.getNotice3();
  }

  render() {
    const {cards, prev, next, menu, bookgoing} = this.state;
    const contents = {
      0: this.state.notice_1,
      1: this.state.notice_2,
      2: this.state.notice_3,
    }
    return(
      <Wrapper>
        <Header/>
        <Center>
          <Input/>
          <Container>
            <Wrapper>
              <ImgCardWrapper>
                {prev.map(imgCard => (
                  <ImgCard
                    link={imgCard.link}
                    off_img={imgCard.off_img}
                    on_img={imgCard.on_img}
                    description={imgCard.description}
                  />
                ))}
              </ImgCardWrapper>
              <ImgCardWrapper2>
                <AdImage/>
                {bookgoing.map(book => (
                  <Bookgoing href={book.link}>
                    <img src={book.off_img} alt={book.description} style={{marginBottom:"20px"}}></img>
                    {book.description}
                  </Bookgoing>
                ))}
                {next.map(imgCard => (
                  <ImgCard
                    link={imgCard.link}
                    off_img={imgCard.off_img}
                    on_img={imgCard.on_img}
                    description={imgCard.description}
                  />
                ))}
              </ImgCardWrapper2>
            </Wrapper>
            <CardWrapper>
              {cards.map(card => (
                <Card
                  link={card.link}
                  name={card.name}
                />
              ))}
            </CardWrapper>
          </Container>
          <img src={adban} width='1000px' height='100px' alt='adban' style={{marginTop:"40px", marginBottom:"25px"}}></img>
        </Center>
        <Navigation>
          <div style={{display: "flex"}}>
            <Wrapper>
              <Menu active={this.state.menu === 0} href="#this" onClick={()=>this.menuChange(0)}>서비스 공지</Menu>
              <Menu active={this.state.menu === 1} href="#this" onClick={()=>this.menuChange(1)}>편성 공지</Menu>
              <Menu active={this.state.menu === 2} href="#this" onClick={()=>this.menuChange(2)}>EBS 공고</Menu>
            </Wrapper>
            <Wrapper style={{width: "340px"}}>
              <ul>
                {contents[menu].map(content => (
                  <li>{content.title.length>20?content.title.slice(0,22)+"···":content.title}</li>
                ))}
              </ul>
            </Wrapper>
          </div>
          <Link/>
          <Wrapper><img src={soluni} width="300px" height="205px" alt="soluni" style={{marginLeft: "50px"}}/></Wrapper>
        </Navigation>
        <Footer/>
      </Wrapper>
    );
  }
}

export default App;