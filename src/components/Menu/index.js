import React from 'react'
import * as S from './styles'

export default function Menu(props) {
  const { menuNav } = props
  return (
    <S.Container>
      <S.Wrapper>
        {
          menuNav.map((item, idex) => (
            <S.Box key={idex}>
              <S.BoxMenu>
                <S.Logo src={item.url} alt={item.alternativeText} />
                <S.MenuNav>
                  <li>{item.about}</li>
                  <li>{item.recipes}</li>
                  <li>{item.subscribe}</li>
                </S.MenuNav>
              </S.BoxMenu>
              <S.BoxName>
                <S.NameParagraph>{item.recipes}</S.NameParagraph>
              </S.BoxName>
            </S.Box>
          ))
        }
      </S.Wrapper>
    </S.Container>
  )
}
