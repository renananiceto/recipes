import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: #F2F4F1;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1920px;
  width: 95%;
  display: flex;
`

export const ImgBox = styled.div`
  box-shadow: 0px 7px 6px #00000029;
  cursor: pointer;
  transition: 0.5s;
  &:hover{
    transform: scale(1.05);
    transition: 0.5s;
  }
`
export const NameBox = styled.div`
  width: 536px;
  height: 389px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffff;
`
export const Img = styled.img`
  width: 536px;
`

export const TitleBox = styled.div`
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Title = styled.h3`
  font-size: 40px;
  text-transform: uppercase;
  position: relative;
  &:after {
  content: "";
  position: absolute;
  right: 125px;
  top: 77px;
  justify-content: center;
  background-color:black;
  width: 100px;
  height: 4px;
}
`
export const Name = styled.h3`
  font-style: 32px;
  text-transform: uppercase;
  position: relative;
  &:after {
  content: "";
  position: absolute;
  right: 69px;
  top: -32px;
  justify-content: center;
  background-color:black;
  width: 51px;
  height: 4px;
}
`

export const BoxMap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-bottom: 10rem;

`