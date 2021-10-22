import React from 'react'
import * as S from './styles'

export default function Cards({ sectionRevenues }) {
  console.log('card',sectionRevenues)
  const section = sectionRevenues[0];
  const { title, receitas } = section;
  return (
    <S.Container>
      <S.TitleBox>
        <S.Title>{title}</S.Title>
      </S.TitleBox>
      <S.Wrapper>
        {receitas.map((receita, index) => (
          <S.BoxMap key={index}>
            <S.ImgBox>
              <S.Img src={receita.img.url} alt="" />
              <S.NameBox>
                <S.Name>{receita.title}</S.Name>
              </S.NameBox>
            </S.ImgBox>
          </S.BoxMap>
        ))}
      </S.Wrapper>
    </S.Container>
  )
}
