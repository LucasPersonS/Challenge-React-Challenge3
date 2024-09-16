import React, { useState } from 'react';
import Header from '../components/Header/Header';
import {
  Main,
  TableContainer,
  Table,
  TableHead,
  TableCell,
  TableRow,
  CardContainer,
  Card,
  CardTitle,
  CardContent,
  CardItem,
  AddButton,
  LogoutButton,
  Modal,
  ModalContent,
  CloseButton,
  Form,
  Input,
  SubmitButton,
  DeleteButton
} from '../styles/estiloParceiros';

interface Service {
  nomeServico: string;
  valorServico: string;
  servicoNoCliente: string;
  taxaServico: string;
  nomePeca: string;
  precoPeca: string;
  quantidadePeca: string;
  tempoServico: string;
  descricaoServico: string;
}

const Parceiros: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [services, setServices] = useState<Service[]>([]);

  const handleAddService = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const newService: Service = {
      nomeServico: formData.get('nomeServico') as string,
      valorServico: formData.get('valorServico') as string,
      servicoNoCliente: formData.get('servicoNoCliente') as string,
      taxaServico: formData.get('taxaServico') as string,
      nomePeca: formData.get('nomePeca') as string,
      precoPeca: formData.get('precoPeca') as string,
      quantidadePeca: formData.get('quantidadePeca') as string,
      tempoServico: formData.get('tempoServico') as string,
      descricaoServico: formData.get('descricaoServico') as string,
    };

    setServices([...services, newService]);
    setIsModalOpen(false);
  };

  const handleDeleteService = (index: number) => {
    setServices(services.filter((_, i) => i !== index));
  };

  return (
    <>
      <Header />
      <Main>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Nome do Serviço</TableCell>
                <TableCell>Valor</TableCell>
                <TableCell>Serviço no Cliente</TableCell>
                <TableCell>Taxa</TableCell>
                <TableCell>Nome da Peça</TableCell>
                <TableCell>Preço da Peça</TableCell>
                <TableCell>Quantidade</TableCell>
                <TableCell>Tempo</TableCell>
                <TableCell>Descrição</TableCell>
              </TableRow>
            </TableHead>
            <tbody>
              {services.map((service, index) => (
                <TableRow key={index}>
                  <TableCell>{service.nomeServico}</TableCell>
                  <TableCell>{service.valorServico}</TableCell>
                  <TableCell>{service.servicoNoCliente}</TableCell>
                  <TableCell>{service.taxaServico}</TableCell>
                  <TableCell>{service.nomePeca}</TableCell>
                  <TableCell>{service.precoPeca}</TableCell>
                  <TableCell>{service.quantidadePeca}</TableCell>
                  <TableCell>{service.tempoServico}</TableCell>
                  <TableCell>{service.descricaoServico}</TableCell>
                </TableRow>
              ))}
            </tbody>
          </Table>
          <CardContainer>
            {services.map((service, index) => (
              <Card key={index}>
                <CardTitle>{service.nomeServico}</CardTitle>
                <CardContent>
                  <CardItem><strong>Valor:</strong> {service.valorServico}</CardItem>
                  <CardItem><strong>Serviço no Cliente:</strong> {service.servicoNoCliente}</CardItem>
                  <CardItem><strong>Taxa:</strong> {service.taxaServico}</CardItem>
                  <CardItem><strong>Nome da Peça:</strong> {service.nomePeca}</CardItem>
                  <CardItem><strong>Preço da Peça:</strong> {service.precoPeca}</CardItem>
                  <CardItem><strong>Quantidade:</strong> {service.quantidadePeca}</CardItem>
                  <CardItem><strong>Tempo:</strong> {service.tempoServico}</CardItem>
                  <CardItem><strong>Descrição:</strong> {service.descricaoServico}</CardItem>
                  <DeleteButton onClick={() => handleDeleteService(index)}>
                    <i className="fas fa-trash-alt"></i>
                  </DeleteButton>
                </CardContent>
              </Card>
            ))}
          </CardContainer>
          <div>
            <AddButton onClick={() => setIsModalOpen(true)}>
              <i className="fas fa-plus"></i> Adicionar
            </AddButton>
            <LogoutButton>
              <i className="fas fa-sign-out-alt"></i> Logout
            </LogoutButton>
          </div>
        </TableContainer>
      </Main>

      {isModalOpen && (
        <Modal>
          <ModalContent>
            <CloseButton onClick={() => setIsModalOpen(false)}>&times;</CloseButton>
            <Form onSubmit={handleAddService}>
              <Input name="nomeServico" placeholder="Nome do Serviço" required />
              <Input name="valorServico" placeholder="Valor do Serviço" required />
              <Input name="servicoNoCliente" placeholder="Serviço no Cliente" required />
              <Input name="taxaServico" placeholder="Taxa do Serviço" required />
              <Input name="nomePeca" placeholder="Nome da Peça" required />
              <Input name="precoPeca" placeholder="Preço da Peça" required />
              <Input name="quantidadePeca" placeholder="Quantidade da Peça" required />
              <Input name="tempoServico" placeholder="Tempo do Serviço" required />
              <Input name="descricaoServico" placeholder="Descrição do Serviço" required />
              <SubmitButton type="submit">Adicionar Serviço</SubmitButton>
            </Form>
          </ModalContent>
        </Modal>
      )}
    </>
  );
};

export default Parceiros;
