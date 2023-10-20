import { useState } from 'react';
import styled from 'styled-components';

const RegisterContainer = styled.div`
background-color: #F2F2F3;
  position: absolute;
  left: 37%;
  height: 400px;
  width: 400px;
  display: flex;
  margin-top: 100px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const RegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RegisterInput = styled.input`
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
  border: none;
`;

const RegisterButton = styled.button`
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
  border: none;
  background-color: #4CBB17;
  color: white;
  cursor: pointer;
`;

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [walletId, setWalletId] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <RegisterContainer>
      <h2>Register</h2>
      <RegisterForm onSubmit={handleSubmit}>
        <RegisterInput
          type="text"
          placeholder="Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <RegisterInput
          type="email"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <RegisterInput
          type="text"
          placeholder="MetaMask Wallet ID"
          value={walletId}
          onChange={(event) => setWalletId(event.target.value)}
        />
        <RegisterButton type="submit">Register</RegisterButton>
      </RegisterForm>
    </RegisterContainer>
  );
};

export default Register;