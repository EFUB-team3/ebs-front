import React from "react";
import styled from "styled-components";
import pengsu from "../assets/pengsu.png";
import search from "../assets/search.png";
import search_ad from "../assets/search_ad.png";


const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top:15px;
  align-items: center;
`

const InputLine = styled.div`
  display:flex;
  justify-content:space-between;
  background-color:white;
  margin-left: 15px;
  width:850px;
  height:60px;
  border:5px solid #5981bb;
  outline: none;
`

const InputConsol = styled.input`
  border: 1px solid white;
  width: 800px;
  margin-left: 15px;
  outline: none;
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
`

const Input = () => {
    return (
        <Wrapper>
          <img src={pengsu} width='550px' alt='pengsu'/>
          <InputWrapper>
            <img src={search_ad} width='110px' height='50px' alt='search_ad'/>
            <InputLine>
              <InputConsol placeholder="ⓔ-Pick) EBS에서 가장 핫한 콘텐츠"/>
              <img src={search} alt='search' style={{margin:"10px"}}/>
            </InputLine>
          </InputWrapper>
        </Wrapper>
    );
}

export default Input;