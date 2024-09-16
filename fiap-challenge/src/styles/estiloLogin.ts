import styled from 'styled-components';

export const ContainerLogin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
`;

export const FormContainer = styled.div`
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 40px;
  max-width: 400px;
  width: 100%;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
  color: #333;
`;

export const FormGroup = styled.div`
  margin-bottom: 20px;
  text-align: left;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: #333;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  color: #333;

  &:focus {
    border-color: #0044cc;
    outline: none;
  }
`;

export const PasswordContainer = styled.div`
  position: relative;

  i {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    color: #333;
  }
`;

export const Button = styled.button`
  background: linear-gradient(135deg, #003366, #0044cc);
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
  margin-top: 15px;
  color: ${({ type }) => (type === 'success' ? '#28a745' : '#dc3545')};
  font-weight: bold;
`;

export const SignupLink = styled.div`
  margin-top: 20px;

  a {
    color: #0044cc;
    text-decoration: none;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }
`;
