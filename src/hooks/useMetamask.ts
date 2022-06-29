import { useCallback, useState } from "react";
import { ethers } from "ethers";

const useMetamask = () => {
  const [account, setAccount] = useState(null);
  const connect = useCallback(async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
    let accounts = await provider.send("eth_requestAccounts", []);
    let account = accounts[0];
    setAccount(account);
    provider.on("accountsChanged", function (accounts) {
      account = accounts[0];
      setAccount(account);
    });
  }, []);

  return { connect, connectedWallet: account };
};

export default useMetamask;
