import styled from 'styled-components';

export const Main = styled.div`
  padding: 20px;
  margin-top: 80px;
  font-family: 'Poppins', sans-serif;
  background: linear-gradient(135deg, #f0f4f8, #e0e6ed);

  @media (max-width: 768px) {
    margin-top: 120px;
  }
`;

export const TableHead = styled.thead`
  color: #ffffff;
  font-weight: 700;
  font-size: 16px;
  border-radius: 10px 10px 0 0;
  text-transform: uppercase;

  th {
    padding: 15px;
    border-bottom: 2px solid #ffffff;
    position: relative;
    z-index: 1;
    border-radius: 10px 10px 0 0;
  }

  th::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background: rgba(255, 255, 255, 0.2);
    transition: background 0.3s ease;
  }

  th:hover::before {
    background: rgba(255, 255, 255, 0.4);
  }

  @media (max-width: 768px) {
    th {
      padding: 10px;
      font-size: 14px;
    }
  }
`;

export const TableContainer = styled.div`
  width: 100%;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 15px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  font-family: 'Poppins', sans-serif;
  text-align: center;

  th, td {
    padding: 5px;
    border-radius: 5px;
    border: 1px solid #e0e6ed;
    vertical-align: middle;
    word-wrap: break-word;
  }

  th {
    background: linear-gradient(135deg, #003366, #0044cc);
    color: #ffffff;
    font-size: 16px;
  }

  td {
    background-color: #f9f9f9;
    color: #333;
  }

  tbody tr:hover {
    background-color: #e0e6ed;
    transition: background-color 0.3s ease;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const TableCell = styled.th`
  font-weight: 600;
  font-size: 14px;
  color: #ffffff;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
`;

export const Card = styled.div`
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  transition: all 0.3s ease;
  margin: 10px;

  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

export const CardTitle = styled.h3`
  margin: 0;
  font-size: 18px;
  color: #0056b3;
  border-bottom: 2px solid #00A1FC;
  padding-bottom: 10px;
`;

export const CardContent = styled.div`
  margin-top: 10px;
`;

export const CardItem = styled.p`
  margin: 5px 0;
  font-size: 14px;
  color: #333;
`;

export const AddButton = styled.button`
  background: linear-gradient(135deg, #00A1FC, #0056b3);
  color: #ffffff;
  border: none;
  border-radius: 10px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.3s ease;

  &:hover {
    background: linear-gradient(135deg, #0056b3, #00A1FC);
    transform: scale(1.05);
  }
`;

export const LogoutButton = styled.button`
  background: #ff4d4d;
  color: #ffffff;
  border: none;
  border-radius: 10px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.3s ease;

  &:hover {
    background: #ff1a1a;
    transform: scale(1.05);
  }
`;

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: #ffffff;
  border-radius: 15px;
  padding: 30px;
  width: 90%;
  max-width: 600px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  position: relative;
  animation: slideIn 0.3s ease;

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 24px;
  color: #333;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #ff4d4d;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #e0e6ed;
  border-radius: 8px;
  font-size: 14px;
  outline: none;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #00A1FC;
  }
`;

export const SubmitButton = styled.button`
  background: linear-gradient(135deg, #00A1FC, #0056b3);
  color: #ffffff;
  border: none;
  border-radius: 8px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.3s ease;

  &:hover {
    background: linear-gradient(135deg, #0056b3, #00A1FC);
  }
`;

export const DeleteButton = styled.button`
  background: #ff4d4d;
  color: #ffffff;
  border: none;
  border-radius: 8px;
  padding: 8px 16px;
  font-size: 14px;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.3s ease;

  &:hover {
    background: #ff1a1a;
    transform: scale(1.05);
  }
`;
