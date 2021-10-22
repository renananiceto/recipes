import React from 'react'
import * as S from './styles'

export default function Footer({ menuFooters }) {
  console.log("footer", menuFooters)
  return (
    <S.Container>
      <S.Wripper>
        <S.BoxMAp>
          {
            menuFooters.titles.map((item) => (
              <S.ParagraphBox>
                <S.Paragraph>{item}</S.Paragraph>
              </S.ParagraphBox>
            ))
          }
        </S.BoxMAp>
        <S.BoxMApImg>
          {
            menuFooters.imgs.map((item) => (
              <S.LogoBox>
                <S.Logo src={item.url} alt="#" />
              </S.LogoBox>
            ))
          }
        </S.BoxMApImg>
      </S.Wripper>
        <S.Green>
          <S.Subtitle>Layout produzido por Vai na Web para fins exclusivamente educacionais. Referência: https://br.pinterest.com/pin/AVuDlMAl4GsQiM6nijH9YbG9bsNKpompSEOEHzig6GJ58AnUtMkSy7k/</S.Subtitle>
        </S.Green>
    </S.Container>
  )
}
