import React from "react"

import Menu from "../components/Menu"
import Cards from "../components/cards"
import Content from "../components/Content"
import Subscribe from "../components/subscribe"
import Footer from "../components/Fotter"


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
    footers{
      titles
      imgs{
        url
      }
    }

    subscribes{
      title
      subTitle
      btnTitle
    }
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
      <GlobalStyle /> 
      <Menu {...data.alldata.menuBars[0]} />
      <Cards sectionRevenues={data.alldata.sectionRevenues} />
      <Content abouts={data.alldata.abouts[0]}/>
      <Subscribe sub={data.alldata.subscribes[0]} />
      <Footer menuFooters={data.alldata.footers[0]} />
    </main>
  )
}

export default IndexPage
