import React from "react";
import styled from "styled-components";
import menuImg from "../assets/menu.png";
import epick from "../assets/epick.png";
import logo from "../assets/logo.png";

const Header1 = styled.div`
  background-color: #4E81C0;
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: flex-start;
  height:47px;
`
const Header2 = styled.div`
  background-color: #4E81C0;
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: flex-start;
  height:93px;
`
const Button1 = styled.button`
  margin-left: 10px;
  margin-top: 10px;
  font-size: 14px;
  line-height: 19px;
  color: #FFFFFF; 
  background-color:#4E81C0;
  border: none;
`
const Button2 = styled.button`
  align-self: flex-end;
  margin-left: 12px;
  margin-bottom: 20px;
  font-size: 20px;
  line-height: 27px;
  color: #FFFFFF; 
  font-weight: 550;
  background-color:#4E81C0;
  border: none;
`

const Header = () => {
    return (
        <div>
        <Header1>
          <Button1 style = {{marginLeft: '120px'}}><img src={menuImg} alt='menu'/></Button1>
          <Button1>장애인 서비스</Button1>
          <Button1>두리안(다문화)</Button1>
          <Button1 style = {{marginLeft: "735px"}}>로그인</Button1>
          <Button1 style>마이페이지</Button1>
          <Button1>고객센터</Button1>
          <Button1>연간권</Button1>
        </Header1>

        <Header2>
          <Button2 style = {{marginLeft: "120px"}}>TV</Button2>
          <Button2>라디오</Button2>
          <Button2>뉴스</Button2>
          <Button2><img src={epick} alt="epick"/></Button2>
          <Button2 style={{marginLeft: "280px"}}><img src={logo} alt="logo"/></Button2>
          <Button2 style={{marginLeft: "310px"}}>구독하기</Button2>
          <Button2>이벤트</Button2>
          <Button2>편성표</Button2>
        </Header2>    
        </div>
    );
}

export default Header