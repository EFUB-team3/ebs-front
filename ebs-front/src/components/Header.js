import React from "react";
import styled from "styled-components";
import menuImg from "../assets/menu.png";
import logo from "../assets/logo.png";

const LeftWrapper = styled.div`
  margin-left: 120px;
  background-color: #4E81C0;
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: flex-start;
`

const RightWrapper = styled.div`
  margin-right: 120px;
  background-color: #4E81C0;
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: flex-end;
`

const HeaderTop = styled.div`
  background-color: #4E81C0;
  display: flex;
  flex-direction: row;
  width: 100%;
  height:47px;
`
const HeaderBottom = styled.div`
  background-color: #4E81C0;
  display: flex;
  flex-direction: row;
  width: 100%;
  height:93px;
`
const ButtonTop = styled.button`
  margin-left: 10px;
  margin-top: 10px;
  font-size: 14px;
  line-height: 19px;
  color: #FFFFFF; 
  background-color:#4E81C0;
  border: none;
`
const ButtonBottom = styled.button`
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
        <HeaderTop>
          <LeftWrapper>
            <ButtonTop><img src={menuImg} alt='menu'/></ButtonTop>
            <ButtonTop>장애인 서비스</ButtonTop>
            <ButtonTop>두리안(다문화)</ButtonTop>
          </LeftWrapper>
          <RightWrapper>
            <ButtonTop>로그인</ButtonTop>
            <ButtonTop>마이페이지</ButtonTop>
            <ButtonTop>고객센터</ButtonTop>
            <ButtonTop>연간권</ButtonTop>
          </RightWrapper>
        </HeaderTop>
        <HeaderBottom>
          <LeftWrapper>
            <ButtonBottom>TV</ButtonBottom>
            <ButtonBottom>라디오</ButtonBottom>
            <ButtonBottom>뉴스</ButtonBottom>
            <ButtonBottom>ⓔ-Pick</ButtonBottom>
          </LeftWrapper>
          <ButtonBottom><img src={logo} alt="logo"/></ButtonBottom>
          <RightWrapper>
            <ButtonBottom>구독하기</ButtonBottom>
            <ButtonBottom>이벤트</ButtonBottom>
            <ButtonBottom>편성표</ButtonBottom>
          </RightWrapper>
        </HeaderBottom>    
        </div>
    );
}

export default Header