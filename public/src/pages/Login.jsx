import { useState } from 'react';
import styled from 'styled-components';

const LoginContainer = styled.div`
  position: absolute;
  left: 37%;
  height: 300px;
  width: 400px;
  display: flex;
  margin-top: 100px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LoginButton = styled.button`
  padding: 10px;
  border-radius: 5px;
  border: none;
  background-color: #4CBB17;
  color: white;
  cursor: pointer;
`;

const Login = () => {
  const [token, setToken] = useState(null);

  const handleMetaMaskLogin = async () => {
    try {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      const address = accounts[0];
      const response = await fetch('/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ address }),
      });
      const data = await response.json();
      const token = data.token;
      setToken(token);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <LoginContainer>
      {token ? (
        <p>You are logged in with MetaMask!</p>
      ) : (
        <LoginButton onClick={handleMetaMaskLogin}>Log in with MetaMask</LoginButton>
      )}
    </LoginContainer>
  );
};

export default Login;