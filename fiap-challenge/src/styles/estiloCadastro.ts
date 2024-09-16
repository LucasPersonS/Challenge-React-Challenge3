import styled from 'styled-components';

export const ContainerCadastro = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
`;

export const FormContainer = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  max-width: 500px;
  width: 100%;
`;

export const Title = styled.h1`
  font-size: 2rem;
  color: #333;
  margin-bottom: 20px;
  text-align: center;
`;

export const FormGroup = styled.div`
  margin-bottom: 15px;
`;

export const Label = styled.label`
  display: block;
  font-weight: 600;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  color: #333;
  box-sizing: border-box;

  &:focus {
    border-color: #0056b3;
    outline: none;
  }
`;

export const PasswordContainer = styled.div`
  position: relative;
`;

export const Button = styled.button`
  background: linear-gradient(135deg, #003366, #0044cc);
  width:100%;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s, transform 0.3s;

  &:hover {
    background: linear-gradient(135deg, #0044cc, #003366);
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(1px);
  }
`;

export const Message = styled.div<{ type: 'success' | 'error' }>`
  margin-top: 10px;
  padding: 10px;
  border-radius: 4px;
  color: #fff;
  background: ${({ type }) => (type === 'success' ? '#28a745' : '#dc3545')};
`;

export const LoginLink = styled.div`
  margin-top: 15px;
  text-align: center;

  a {
    color: #0056b3;
    text-decoration: none;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }
`;
