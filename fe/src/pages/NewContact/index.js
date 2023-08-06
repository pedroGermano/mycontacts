import PageHeader from '../../components/PageHeader';
import Input from '../../components/input';

export default function NewContact() {
  return (
    <>
      <PageHeader
        title="Novo Contato"
      />
      <Input
        type="text"
        placeholder="Nome"
      />
    </>
  );
}
