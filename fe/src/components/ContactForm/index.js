import FormGroup from '../FormGroup';
import { Form } from './syles';
import Input from '../Input';
import Select from '../Select';
import Button from '../Button';

export default function ContactForm() {
  return (
    <Form>
      <FormGroup>
        <Input type="text" placeholder="Nome" />
      </FormGroup>

      <FormGroup>
        <Input type="e-mail" placeholder="E-mail" />
      </FormGroup>

      <FormGroup>
        <Input type="text" placeholder="Telefone" />
      </FormGroup>

      <FormGroup>
        <Select>
          <option value="categoria">Categoria</option>
          <option value="instagram">Instagram</option>
        </Select>
      </FormGroup>

      <Button>
        Cadastrar
      </Button>
    </Form>
  );
}
