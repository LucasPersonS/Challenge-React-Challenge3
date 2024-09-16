import React, { useState } from 'react';
import Header from '../components/Header/Header';
import {
  Main,
  TableContainer,
  Table,
  TableHead,
  TableCell,
  TableRow,
  Menu,
  AddButton,
  LogoutButton,
  Modal,
  ModalContent,
  CloseButton,
  Form,
  Input,
  SubmitButton,
  DeleteButton,
  MediaStyles
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
      descricaoServico: formData.get('descricaoServico') as string
    };

    setServices([...services, newService]);
    form.reset();
    setIsModalOpen(false);
  };

  const handleDeleteService = (index: number) => {
    setServices(services.filter((_, i) => i !== index));
  };

  const handleCurrencyInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/[^\d]/g, '');
    value = (Number(value) / 100).toFixed(2).replace('.', ',');
    e.target.value = `R$ ${value}`;
  };

  const handleTimeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.value = `${e.target.value.replace(/\D/g, '')}h`;
  };

  return (
    <>
      <Header />
      <Main>
        <TableContainer>
          <Table>
            <TableHead>
              <tr>
                <TableCell>Nome Serviço</TableCell>
                <TableCell>Valor Serviço</TableCell>
                <TableCell>Serviço no Cliente</TableCell>
                <TableCell>Taxa Serviço</TableCell>
                <TableCell>Nome Peça</TableCell>
                <TableCell>Preço Peça</TableCell>
                <TableCell>Quantidade Peça</TableCell>
                <TableCell>Tempo Serviço</TableCell>
                <TableCell>Descrição Serviço</TableCell>
                <TableCell>Ação</TableCell>
              </tr>
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
                  <TableCell>
                    <DeleteButton onClick={() => handleDeleteService(index)}>
                      <i className="fas fa-trash-alt"></i>
                    </DeleteButton>
                  </TableCell>
                </TableRow>
              ))}
            </tbody>
          </Table>
          <Menu>
            <AddButton onClick={() => setIsModalOpen(true)}>
              <i className="fas fa-plus-circle"></i> Adicionar
            </AddButton>
            <LogoutButton onClick={() => (window.location.href = '/login')}>
              <i className="fas fa-sign-out-alt"></i> Logout
            </LogoutButton>
          </Menu>
        </TableContainer>

        {isModalOpen && (
          <Modal isOpen={isModalOpen}>
            <ModalContent>
              <CloseButton onClick={() => setIsModalOpen(false)}>&times;</CloseButton>
              <Form id="service-form" onSubmit={handleAddService}>
                <Input type="text" name="nomeServico" placeholder="Nome Serviço" required />
                <Input
                  type="text"
                  name="valorServico"
                  className="currency"
                  placeholder="Valor Serviço"
                  onChange={handleCurrencyInput}
                  required
                />
                <Input type="text" name="servicoNoCliente" placeholder="Serviço no Cliente" required />
                <Input
                  type="text"
                  name="taxaServico"
                  className="currency"
                  placeholder="Taxa Serviço"
                  onChange={handleCurrencyInput}
                  required
                />
                <Input type="text" name="nomePeca" placeholder="Nome Peça" required />
                <Input
                  type="text"
                  name="precoPeca"
                  className="currency"
                  placeholder="Preço Peça"
                  onChange={handleCurrencyInput}
                  required
                />
                <Input type="number" name="quantidadePeca" placeholder="Quantidade Peça" required />
                <Input
                  type="text"
                  name="tempoServico"
                  placeholder="Tempo Serviço"
                  onChange={handleTimeInput}
                  required
                />
                <Input type="text" name="descricaoServico" placeholder="Descrição Serviço" required />
                <SubmitButton type="submit">
                  <i className="fas fa-plus-circle"></i> Adicionar Serviço
                </SubmitButton>
              </Form>
            </ModalContent>
          </Modal>
        )}
      </Main>
      <style>{MediaStyles}</style>
    </>
  );
};

export default Parceiros;
