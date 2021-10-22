import React from 'react'
import * as S from './styles'

export default function subscribe({ sub }) {
  return (
    <S.Component>
      <S.Wrapper>
        <S.BoxTitles>
          <S.Title>{sub.title}</S.Title>
          <S.SubTitle>{sub.subTitle}</S.SubTitle>
        </S.BoxTitles>
        <S.Inp placeholder="Your Email" type="email" />
        <S.Btn>{sub.btnTitle}</S.Btn>
      </S.Wrapper>
    </S.Component>
  )
}
