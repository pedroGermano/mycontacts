import Logo from '../../assets/img/logo.svg';
import { Container, InputSearchContainer } from './styles';

export default function Header() {
  return (
    <Container>
      <img
        src={Logo}
        alt="My Contacts Logo"
        width={201}
      />

      <InputSearchContainer>
        <input
          type="text"
          placeholder="Pesquisar contato..."
        />
      </InputSearchContainer>
    </Container>
  );
}
