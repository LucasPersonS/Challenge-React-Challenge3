import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import {
  ContainerCadastro,
  FormContainer,
  Title,
  FormGroup,
  Label,
  Input,
  PasswordContainer,
  Button,
  Message,
  LoginLink
} from '../styles/estiloCadastro.ts';

interface User {
  name: string;
  email: string;
  password: string;
  cpf: string;
}

const Cadastro: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [cpf, setCpf] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState<{ text: string; type: 'success' | 'error' } | null>(null);

  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setMessage({ text: 'As senhas não coincidem', type: 'error' });
      return;
    }

    const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');
    const userExists = existingUsers.some((user: User) => user.email === email);

    if (userExists) {
      setMessage({ text: 'Usuário já cadastrado com este email', type: 'error' });
      return;
    }

    const newUser: User = { name, email, password, cpf };
    localStorage.setItem('users', JSON.stringify([...existingUsers, newUser]));

    setMessage({ text: 'Cadastro realizado com sucesso!', type: 'success' });
    setName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setCpf('');

    setTimeout(() => {
      navigate('/login');
    }, 2000);
  };

  return (
    <>
      <Header />
      <ContainerCadastro>
        <FormContainer>
          <Title>Cadastro</Title>
          <form onSubmit={handleSubmit}>
            <FormGroup>
              <Label htmlFor="name">Nome Completo</Label>
              <Input
                type="text"
                id="name"
                value={name}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="cpf">CPF</Label>
              <Input
                type="text"
                id="cpf"
                value={cpf}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCpf(e.target.value)}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="password">Senha</Label>
              <PasswordContainer>
                <Input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  value={password}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                  required
                />
                <i
                  className={`fa ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}
                  onClick={togglePasswordVisibility}
                />
              </PasswordContainer>
            </FormGroup>
            <FormGroup>
              <Label htmlFor="confirmPassword">Confirmar Senha</Label>
              <PasswordContainer>
                <Input
                  type={showPassword ? 'text' : 'password'}
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setConfirmPassword(e.target.value)}
                  required
                />
                <i
                  className={`fa ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}
                  onClick={togglePasswordVisibility}
                />
              </PasswordContainer>
            </FormGroup>
            <Button type="submit">Cadastrar</Button>
            {message && (
              <Message type={message.type}>
                {message.text}
              </Message>
            )}
            <LoginLink>
              <p>
                Já tem uma conta? <a href="/login">Faça login</a>
              </p>
            </LoginLink>
          </form>
        </FormContainer>
      </ContainerCadastro>
      <Footer />
    </>
  );
};

export default Cadastro;
