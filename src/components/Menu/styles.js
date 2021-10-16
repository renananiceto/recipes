import styled from "styled-components";
import figure from "../../images/grupo.png"

export const Container = styled.div`
  width: 100%;
  height: 1303px;
  background-image: url(${figure});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  
`

export const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1920px;
  width: 95%;
`
export const Logo = styled.img`
  cursor: pointer;
`

export const MenuNav = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 635px;
  li{
    cursor: pointer;
    opacity: 0.8;
    width: 29%;
    &:hover{
      color: black;
      font-weight: bold;
      transition: 0.5s;
    }
  }
  li:last-child {
  border: solid 5px black;
  width: 263px;
  height: 81px;
  display: flex;
  justify-content: center;
  align-items: center;
}
`

export const BoxMenu = styled.div`
  display: flex;
  height: 140px;
  justify-content: space-between;
  align-items: end;
`


export const NameParagraph = styled.p`
  font-size: 191px;

`

export const BoxName = styled.div`
  display: flex;
  justify-content: center;
  align-items: end;
  height: 721px;
`
export const Box = styled.div`

`