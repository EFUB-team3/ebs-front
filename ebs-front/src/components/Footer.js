import React from "react";
import styled from "styled-components";
import cost_center from "../assets/cost_center.png";
import bn_footer from "../assets/bn_footer.png";

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-left: 100px;
  margin-bottom: 20px;
  margin-top: 30px;
`
const Button = styled.button`
  margin-right: 13px;
  font-size: 12px;
  font-weight: semibold;
  color: #111111;
  background-color: white;
  border: none;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 100px;
  margin-bottom: 30px;
`

const Info = styled.a`
  font-size: 11px;
  color: #666666;
  background-color: white;
  margin-bottom: 3px;
`
const FooterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  background-color: white;
`

const ImgWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 100px;
  margin-bottom: 20px;
  margin-top: 30px;
`

const Footer = () => {
    return (
      <FooterWrapper>
        <Wrapper>
          <ButtonWrapper>
            <Button>EBS 소개</Button>
            <Button>EBS 공고</Button>
            <Button>저작권 침해 제보</Button>
            <Button>EBS클린신고</Button>
            <Button>제휴문의</Button>
            <Button>협찬/광고문의</Button>
            <Button>이용약관</Button>
            <Button style = {{color: '#4E81C0'}}>개인정보처리방침</Button>
            <Button>청소년 보호정책</Button>
            <Button>원천징수 영수증 발급</Button>
          </ButtonWrapper>
          <InfoWrapper>
            <Info>10393 경기도 고양시 일산동구 한류월드로 281 한국교육방송공사 | 사업자등록번호 : 229-82-01343 (한국교육방송공사사장 김명중)</Info>
            <Info>시청자불만전담 : hotline@ebs.co.kr | 부가통신사업신고 : 10077 통신판매업신고 : 고양일산동-1415호[사업자정보확인]</Info>
            <Info></Info><Info></Info>
            <Info>Copyright ⓒ EBS. All Rights Reserved.</Info>
          </InfoWrapper>
        </Wrapper>
        <ImgWrapper>
          <img src={bn_footer} alt='bn_footer' width='136px' height='80px' style={{marginLeft: '25px', marginTop: '10px'}}></img>
          <img src={cost_center} alt='cost_center' width='136px' height='80px' style={{marginLeft: '20px', marginTop: '12px'}}></img>
        </ImgWrapper>
      </FooterWrapper>
    );
}

export default Footer;
