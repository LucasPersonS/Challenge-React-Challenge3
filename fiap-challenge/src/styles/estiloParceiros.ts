import styled from 'styled-components';

// Container principal da página
export const Main = styled.div`
  padding: 20px;
  margin-top: 80px; /* Espaço adicional para o Header */
`;

// Container da tabela
export const TableContainer = styled.div`
  width: 100%;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow-x: auto;
`;

// Estilização da tabela
export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-family: 'Poppins', sans-serif;
  text-align: center;
  min-width: 600px;

  th, td {
    padding: 12px;
    text-align: center;
    vertical-align: middle;
    border-bottom: 1px solid #ddd;
  }

  tbody tr:hover {
    background-color: #f5f5f5;
  }
`;

// Estilo do cabeçalho da tabela
export const TableHead = styled.thead`
  background-color: #00A1FC;
  color: #fff;
`;

// Estilo das células da tabela
export const TableCell = styled.th`
  font-weight: 600;
  border-radius: 8px;
  font-size: 14px;
`;

// Estilo das linhas da tabela
export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

// Menu com botões
export const Menu = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 30px;
`;

// Botão Adicionar
export const AddButton = styled.button`
  background-color: #00A1FC;
  border: none;
  color: white;
  padding: 12px 24px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 8px;
  display: flex;
  align-items: center;
  transition: background-color 0.3s, transform 0.3s;

  i {
    margin-right: 8px;
  }

  &:hover {
    background-color: #007bb5;
    transform: scale(1.05);
  }
`;

// Botão Logout
export const LogoutButton = styled.button`
  background-color: #FF3F4C;
  border: none;
  color: white;
  padding: 12px 24px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 8px;
  display: flex;
  align-items: center;
  transition: background-color 0.3s, transform 0.3s;

  i {
    margin-right: 8px;
  }

  &:hover {
    background-color: #d02d34;
    transform: scale(1.05);
  }
`;

// Botão de exclusão
export const DeleteButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 18px;
  color: #FF3F4C;
  transition: color 0.3s;

  &:hover {
    color: #d02d34;
  }
`;

// Estilização do modal
export const Modal = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

// Conteúdo do modal
export const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  position: relative;
  width: 90%;
  max-width: 800px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  overflow: hidden;
`;

// Botão de fechar do modal
export const CloseButton = styled.span`
  position: absolute;
  top: 15px;
  right: 15px;
  font-size: 24px;
  font-weight: bold;
  color: #333;
  cursor: pointer;
  z-index: 1100;

  &:hover {
    color: black;
  }
`;

// Estilização do formulário no modal
export const Form = styled.form`
  display: flex;
  flex-direction: column;

  input,
  button {
    margin: 10px 0;
    padding: 12px;
    font-size: 16px;
    border: 1px solid #ddd;
    border-radius: 8px;
  }
`;

// Campo de entrada
export const Input = styled.input`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 12px;
  font-size: 16px;
  width: 100%;
  box-sizing: border-box;
`;

// Botão de envio
export const SubmitButton = styled.button`
  background-color: #00A1FC;
  border: none;
  color: white;
  padding: 12px 24px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 8px;
  display: flex;
  align-items: center;
  transition: background-color 0.3s, transform 0.3s;

  i {
    margin-right: 8px;
  }

  &:hover {
    background-color: #007bb5;
    transform: scale(1.05);
  }
`;

// Estilos para media queries (se necessário)
export const MediaStyles = `
  @media (max-width: 768px) {
    /* Adapte os estilos para telas menores, se necessário */
  }
`;
