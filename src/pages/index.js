import React from "react"
import Menu from "../components/Menu"
import Header from "../components/Header"
import { graphql } from "gatsby"
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  };
`

export const query = graphql`

{

  alldata{
    menuBars{
      menuNav
    }
  }
}

`

const IndexPage = ({data}) => {
  return (
    <main>
      {console.log(data)}
      <GlobalStyle /> 
      <Menu 
      {...data.alldata.menuBars[0]}
      />
      <Header 
      
      />
    </main>
  )
}

export default IndexPage
