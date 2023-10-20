import Loginpic from "../assets/login.gif";
import styled from "styled-components";
import '../css/login.css'

const LoginContainer = styled.div`
  display: flex;
  position: relative;
  left: 6%;
  position: absolute;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin-left: 500px;
`;

const LoginButton = styled.a`
  display: inline-block;
  padding: 10px 32px;
  background-color: #ff5722; /* Gmail red color */
  color: white;
  text-decoration: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const MetaMaskButton = styled.a`
  display: inline-block;
  position: relative;
  padding: 10px 35px;
  background-color: #f6851b; /* MetaMask orange color */
  color: white;
  text-decoration: none;
  border-radius: 5px;
  cursor: pointer;
`;

const LoginPage = () => {

  const handleGmailLogin = () => {
    alert("Logging in with Gmail...");
  };


  const handleMetaMaskLogin = () => {
    alert("Logging in with MetaMask wallet address...");
  };

  return (
    <body>
      <LoginContainer>
        <LoginButton onClick={handleGmailLogin}>Login with Gmail</LoginButton>
        <MetaMaskButton onClick={handleMetaMaskLogin}>
          Login with MetaMask
        </MetaMaskButton>
      </LoginContainer>
    </body>
  );
};

export default LoginPage;