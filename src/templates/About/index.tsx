import { LinkWrapper } from 'components/LinkWrapper'
import * as S from './styles'
import { CloseOutline } from '@styled-icons/evaicons-outline'

export const AboutTemplate = () => (
  <S.Content>
    <LinkWrapper href="/">
      <CloseOutline size={32} />
    </LinkWrapper>

    <S.Heading>Lorem ipsum doido</S.Heading>

    <S.Body>
      <p>lorem ipsum meu pau no seu ouvidum</p>
    </S.Body>
  </S.Content>
)
