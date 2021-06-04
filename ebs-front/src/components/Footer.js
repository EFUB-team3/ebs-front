import React from "react";
import styled from "styled-components";
import cost_center from "../assets/cost_center.png";
import bn_footer from "../assets/bn_footer.png";

const FooterWrapper = styled.div`
  background-color: #FFFFFF;
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: flex-start;
`
const Button3 = styled.button`
  align-self: flex-start;
  margin-left: 13px;
  margin-top: 31px;
  font-size: 11px;
  line-height: 15px;
  color: #111111;
  background-color: #FFFFFF;
  border: none;
`
const Button4 = styled.button`
  align-self: flex-start;
  margin-left: 13px;
  margin-top: 31px;
  font-size: 11px;
  font-weight: bold;
  line-height: 15px;
  color: #111111;
  background-color: #FFFFFF;
  border: none;
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
`

const Footer = () => {
    return (
        <Wrapper>
        <FooterWrapper height="58px">
          <Button4 style = {{marginLeft: '115px'}}>EBS 소개</Button4>
          <Button3>EBS 공고</Button3>
          <Button3>저작권 침해 제보</Button3>
          <Button3>EBS클린신고</Button3>
          <Button4>제휴문의</Button4>
          <Button4>협찬/광고문의</Button4>
          <Button3>이용약관</Button3>
          <Button4 style = {{color: '#4E81C0'}}>개인정보처리방침</Button4>
          <Button3>청소년 보호정책</Button3>
          <Button3>원천징수 영수증 발급</Button3>
          <img src={bn_footer} alt='bn_footer' width='136px' height='80px' style={{marginLeft: '25px', marginTop: '10px'}}></img>
          <img src={cost_center} alt='cost_center' width='136px' height='80px' style={{marginLeft: '20px', marginTop: '12px'}}></img>
        </FooterWrapper>
        <FooterWrapper height="27px">
          <a style = {{marginTop: '12px', marginLeft: '115px', fontSize: '11px' ,color: '#666666', backgroundColor: '#FFFFFF',fontWeight: 'bold' }}>10393 &nbsp;</a>
          <a style = {{marginTop: '12px', fontSize: '11px' ,color: '#666666', backgroundColor: '#FFFFFF' }}>경기도 고양시 일산동구 한류월드로 281 &nbsp;한국교육방송공사 
           &nbsp; 사업자등록번호 : 229-82-01343 (한국교육방송공사사장 김명중) </a>
        </FooterWrapper>
        <FooterWrapper height="27px">
          <a style = {{marginLeft: '115px', fontSize: '11px' ,color: '#666666', backgroundColor: '#FFFFFF' }}>시청자불만전담 :</a>
          <a style = {{fontSize: '11px' ,color: '#666666', backgroundColor: '#FFFFFF', fontWeight: 'bold' }}>&nbsp;hotline@ebs.co.kr </a>
          <a style = {{fontSize: '11px' ,color: '#666666', backgroundColor: '#FFFFFF' }}>&emsp; 부가통신사업신고 : 10077 통신판매업신고 : 
          고양일산동-1415호 [사업자정보확인]</a>
        </FooterWrapper>
        <FooterWrapper height="27px">
          <a style = {{marginLeft: '115px', marginBottom: '20px', fontSize: '11px' ,color: '#666666', backgroundColor: '#FFFFFF' }}>Copyright ⓒ EBS. All Rights Reserved. </a>
        </FooterWrapper>
        </Wrapper>
    );
}

export default Footer;