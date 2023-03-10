import {
  Container,
  InputSearchContainer
} from './styles';

import logo from '../../assets/images/logo.svg';

export default function Header() {
  return (
    <Container>
      <img src={logo} alt="MyContacts Logo" width="200" />

      <InputSearchContainer>
        <input type="text" placeholder="Nome do Contato" />
      </InputSearchContainer>
    </Container>
  );
}
