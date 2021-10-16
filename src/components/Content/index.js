import React from 'react'
import * as S from './styles'

export default function Content({ abouts }) {
  const { title, subTitle, alternativeText } = abouts
  return (
    <S.Container>
      <S.Wrapper>
        <S.BoxImg>
          <S.Img src={abouts.img.url} alt={abouts.alternativeText} />
        </S.BoxImg>
        <S.BoxTitle >
          <S.Box>
            <S.Title>{abouts.title}</S.Title>
            <S.SubTitle>{abouts.subTitle}</S.SubTitle>
          </S.Box>
        </S.BoxTitle>
      </S.Wrapper>
    </S.Container>
  )
}
