import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header/Header';
import {
  ContainerLogin,
  FormContainer,
  Title,
  FormGroup,
  Label,
  Input,
  PasswordContainer,
  Button,
  Message,
  SignupLink
} from '../styles/estiloLogin';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState<{ text: string; type: 'success' | 'error' } | null>(null);

  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');
    const user = existingUsers.find((user: { email: string; password: string }) => user.email === email && user.password === password);

    if (user) {
      setMessage({ text: 'Login realizado com sucesso!', type: 'success' });

      setTimeout(() => {
        navigate('/parceiros');
      }, 2000);
    } else {
      setMessage({ text: 'Email ou senha incorretos', type: 'error' });
    }
  };

  return (
    <>
      <Header />
      <ContainerLogin>
        <FormContainer>
          <Title>Login</Title>
          <form onSubmit={handleSubmit}>
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
            <Button type="submit">Entrar</Button>
            {message && (
              <Message type={message.type}>
                {message.text}
              </Message>
            )}
            <SignupLink>
              <p>
                Não tem uma conta? <a href="/cadastro">Cadastre-se</a>
              </p>
            </SignupLink>
          </form>
        </FormContainer>
      </ContainerLogin>
    </>
  );
};

export default Login;
