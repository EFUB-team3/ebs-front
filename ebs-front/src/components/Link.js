import React from "react";
import styled from "styled-components";
import yaho from "../assets/yaho.png";
import youtube from "../assets/youtube.png";
import facebook from "../assets/facebook.png";
import insta from "../assets/insta.png";
import kakao from "../assets/kakao.png";
import blog from "../assets/blog.png";
import arrow from "../assets/arrow.png";

const LinkWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;  
`

const LinkButton = styled.button`
  align-self: flex-start;
  background-color: #FFFFFF;
  background-size: 100%;
  border: none;
  border-radius: 100%;
  width: 45px;
  height: 45px;
`

const EbsButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
    background-color: #FFFFFF;
    border: none;
    border-radius: 50px;
    height: 45;
    width: 120px;
    font-size: 16px;
` 
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
`

const Link = () => {
    return (
        <Wrapper>
              <LinkWrapper style={{width:"420px"}}>
                <EbsButton>EBS 앱<img width="20px" src={arrow} alt="arrow" style={{width:"15px", marginLeft: "6px", marginBottom:"2px"}}></img></EbsButton>
                <LinkButton><img src={blog} width="25px" alt="blog"></img></LinkButton>
                <LinkButton><img src={facebook} width="25" alt="facebook"></img></LinkButton>
                <LinkButton><img src={kakao} width="25" alt="kakao"></img></LinkButton>
                <LinkButton><img src={youtube} width="25" alt="youtube"></img></LinkButton>
                <LinkButton><img src={insta} width="25" alt="insta"></img></LinkButton>
              </LinkWrapper>
              <img src={yaho} width="420px" alt="yaho" style={{marginTop: "20px"}}/>
          </Wrapper>
    );
}

export default Link;