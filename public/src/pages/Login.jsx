
import styled from "styled-components";
import '../css/login.css'

const LoginContainer = styled.div`
  position: absolute;
  left : 37%;
  height: 300px;
  width: 400px;
  display: flex;
  margin-top: 100px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LoginButton = styled.a`
  display: inline-block;
  padding: 20px 32px;
  background-color: #4CBB17; /* Gmail green color */
  color: white;
  text-decoration: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
  margin-bottom: 20px;
`;

const MetaMaskButton = styled.a`
  display: inline-block;
  position: relative;
  padding: 20px 35px;
  background-color: #4CBB17;
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
          <LoginButton onClick={handleGmailLogin}> Login with Gmail </LoginButton>
          <MetaMaskButton onClick={handleMetaMaskLogin}> Login with MetaMask </MetaMaskButton>
      </LoginContainer>
    </body>

    
  );
};

export default LoginPage;