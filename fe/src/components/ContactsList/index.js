import {
  Container, Header, ListContainer, Card,
} from './styles';

import arrow from '../../assets/img/icons/arrow.svg';
import edit from '../../assets/img/icons/edit.svg';
import trash from '../../assets/img/icons/trash.svg';

export default function ContactsList() {
  return (
    <Container>
      <Header>
        <strong>3 contatos</strong>
        <a href="/">Novo contato</a>
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
          <a href="/">
            <img src={edit} alt="icon edit" />
          </a>
          <button type="button">
            <img src={trash} alt="icon trash" />
          </button>
        </div>
      </Card>

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
          <a href="/">
            <img src={edit} alt="icon edit" />
          </a>
          <button type="button">
            <img src={trash} alt="icon trash" />
          </button>
        </div>
      </Card>

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
          <a href="/">
            <img src={edit} alt="icon edit" />
          </a>
          <button type="button">
            <img src={trash} alt="icon trash" />
          </button>
        </div>
      </Card>
    </Container>
  );
}
