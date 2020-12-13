import logo from './logo.svg';
import {React, useState} from 'react'
import Web3 from 'web3'
import WalletConnectProvider from "@walletconnect/web3-provider"

function App() {


  const [navColour, setNavColour] = useState('white')

  const Styles = {
    navbar : {
      backgroundColor : navColour,
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center'
    },
    logo : {
      maxHeight: 120,
    },
    button: {
      backgroundColor: 'black',
      border: 'none',
      height: 48,
      paddingLeft: 16,
      paddingRight: 16,
      borderRadius: 5,
      color: 'white',
      cursor: 'pointer'
    }
  }


  async function loadWeb3(){
   if(window.ethereum){
     window.web3 = new Web3(window.ethereum)
     await window.ethereum.enable()
   }
   else if(window.web3)
   {
     window.web3 =new Web3(window.web3.currentProvider)
   }
   else{
     window.alert('Please connect with your metamask wallet')
   }
  }
 async function loadconnectwallet()
 {
  const provider = new WalletConnectProvider({
    rpc: {
      1: "https://mainnet.mycustomnode.com",
      3: "https://ropsten.mycustomnode.com",
      100: "https://dai.poa.network",
      // ...
    },
  });
  
  //  Enable session (triggers QR Code modal)
  await provider.enable();
 } 


  return (
    <div style={Styles.navbar}>
      <img src={logo} style={Styles.logo}/>
      <button style={Styles.button} onClick={()=> loadWeb3()}>Connect MetaMask</button>
      <button style={Styles.button} onClick={()=> loadconnectwallet()}>Connect Wallletconnect</button>
    </div>
  );


  }
    
   
   
        


 





export default App;
