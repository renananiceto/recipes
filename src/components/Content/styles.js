import styled from "styled-components";


export const Container = styled.div`
 width: 100%;
`

export const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1920px;
  width: 100%;
  display: flex;
`

export const BoxTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
`

export const BoxImg = styled.div`
`

export const Img = styled.img`
  width: 960px;
  height: 957px;
`


export const Box = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  height: 35rem;
`

export const Title = styled.p`
  font-size: 40px;
  position: relative;
  &:after{
    content: '';
    position: absolute;
    background-color: black;
    bottom: 30px;
    width: 71px;
    height: 4px;
    top: 68px;
    right: 30px;
  }
`

export const SubTitle = styled.p`
  font-size: 20px;
  line-height: 34px;
`