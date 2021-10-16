import React from "react"
import Menu from "../components/Menu"
import Cards from "../components/cards"
import Content from "../components/Content"


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
    abouts {
      title
      subTitle
      alternativeText
      img {
        url
      }
    }
    sectionRevenues {
      title
      receitas {
        id
        title
        img {
          url
        }
      }
    }
    cards{
      cardItem
      }
    menuBars{
      menuNav
    }
  }
}

`

const IndexPage = ({data}) => {
  return (
    <main>
      {/* {console.log(data)} */}
      <GlobalStyle /> 
      <Menu {...data.alldata.menuBars[0]} />
      <Cards sectionRevenues={data.alldata.sectionRevenues} />
      <Content abouts={data.alldata.abouts[0]}/>
    </main>
  )
}

export default IndexPage
