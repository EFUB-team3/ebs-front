import React, {useState} from "react";
import styled from "styled-components";

const CardContent = styled.image`
    background-color: white;
    color: gray;
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
    :hover{
      background: rgb(97,156,249);
      background: linear-gradient(162deg, rgba(97,156,249,1) 0%, rgba(98,40,148,1) 100%, rgba(160,144,233,1) 100%);
      color: white;
    }
`
const ImgCard = ({ off_img, on_img, description }) => {
    const [hover, setHover] = useState('off');
    const onMouseEnter = () => {setHover('on'); console.log(hover)};
    const onMouseLeave = () => {setHover('off'); console.log(hover)};

    return (
      <CardContent onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        {hover==='off'?
          <img src={off_img} alt={description} style={{marginBottom:"20px"}}></img>:
          <img src={on_img} alt={description} style={{marginBottom:"20px"}}></img>}
        {description}
      </CardContent>
    )
  }

export default ImgCard