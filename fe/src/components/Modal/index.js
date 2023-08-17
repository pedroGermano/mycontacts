import { Container, Overlay, Footer } from './styles';

export default function Modal() {
  return (
    <Overlay>
      <Container>
        <h1>Título do modal</h1>
        <p>
          Corpo do modal
        </p>
        <Footer>
          Qualquer coisa
        </Footer>
      </Container>
    </Overlay>
  );
}
