import { Link } from 'react-router-dom';

import {
  Container, Header, ListContainer, Card, InputSearchContainer,
} from './styles';

import arrow from '../../assets/img/icons/arrow.svg';
import edit from '../../assets/img/icons/edit.svg';
import trash from '../../assets/img/icons/trash.svg';
import Loader from '../../components/Loader';

export default function Home() {
  return (
    <Container>
      <Loader />

      <InputSearchContainer>
        <input
          type="text"
          placeholder="Pesquisar contato..."
        />
      </InputSearchContainer>
      <Header>
        <strong>3 contatos</strong>
        <Link to="/new">Novo contato</Link>
      </Header>
      <ListContainer>
        <header>
          <button type="button" className="sort-button">
            <span>Nome</span>
            <img src={arrow} alt="arrow icon" />
          </button>
        </header>
      </ListContainer>

      <Card>
        <div className="info">
          <div className="contact-name">
            <strong>Pedro Germano</strong>
            <small>instagram</small>
          </div>
          <span>pedrogermano232@gmail.com</span>
          <span>(85) 99999-9999</span>
        </div>

        <div className="actions">
          <Link to="/edit/123">
            <img src={edit} alt="icon edit" />
          </Link>
          <button type="button">
            <img src={trash} alt="icon trash" />
          </button>
        </div>
      </Card>

    </Container>
  );
}
