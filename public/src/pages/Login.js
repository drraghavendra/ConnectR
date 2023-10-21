import { useState } from "react";
import { ethers } from "ethers";
import { useNavigate , Link } from "react-router-dom";
import "../css/login.css";
import image from "../assets/metamasklogo.png";
function LoginWithMetamask() {
  // Properties

  const [walletAddress, setWalletAddress] = useState("");
  const history = useNavigate();

  // Helper Functions

  // Requests access to the user's MetaMask wallet
  async function requestAccount() {
    console.log("Requesting account...");

    if (window.ethereum) {
      console.log("MetaMask detected");

      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setWalletAddress(accounts[0]);
        await connectWallet();
      } catch (error) {
        console.log("Error connecting to wallet:", error);
      }
    } else {
      alert("Please install MetaMask to use this feature");
    }
  }

  // Connects to the user's MetaMask wallet and navigates to the dashboard
  async function connectWallet() {
    if (typeof window.ethereum !== "undefined") {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const network = await provider.getNetwork();

      if (network.chainId === 1) {
        history.push("/dashboard");
      } else {
        <Link to="/blog"> </Link>;
      }
    }
  }

  async function gotoDashboard() {
    history.push("/blog.jsx");
  }

  return (
    <div className="login-container">
      <h2>Login with MetaMask</h2>
      <img src= {image} alt="metamask logo" height= "250px" align = "center"/>
      <Link to = "/blog"><button onClick={requestAccount} >Connect Wallet</button></Link>
      {walletAddress && (
        <p>
          Wallet Address: <strong>{walletAddress}</strong>
        </p>
      )}
    </div>
  );
}

export default LoginWithMetamask;
