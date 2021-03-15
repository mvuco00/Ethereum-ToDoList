// prvo je potrebno spojiti browser s blockchainom - za to sluzi metamask
// onda se client side aplikacija treba spojit na blockchain a to se radi preko Web3
// Web3 sluzi za komunikaciu s Eth blockchainom
// metamask sluzi komunikaciju s client side application i web3, te interakciju s njom preko browsera

App = {
  load: async () => {
    // load app
    //zelimo loadat web3 library da bi se spojili na blockchain
    await App.loadWeb3();
  },
};
//loadanje web3js-a
loadWeb3: async () => {
  if (typeof web3 !== "undefined") {
    App.web3Provider = web3.currentProvider;
    web3 = new Web3(web3.currentProvider);
  } else {
    window.alert("Please connect to Metamask.");
  }
  // Modern dapp browsers...
  if (window.ethereum) {
    window.web3 = new Web3(ethereum);
    try {
      // Request account access if needed
      await ethereum.enable();
      // Acccounts now exposed
      web3.eth.sendTransaction({
        /* ... */
      });
    } catch (error) {
      // User denied account access...
    }
  }
  // Legacy dapp browsers...
  else if (window.web3) {
    App.web3Provider = web3.currentProvider;
    window.web3 = new Web3(web3.currentProvider);
    // Acccounts always exposed
    web3.eth.sendTransaction({
      /* ... */
    });
  }
  // Non-dapp browsers...
  else {
    console.log(
      "Non-Ethereum browser detected. You should consider trying MetaMask!"
    );
  }
},
  $(() => {
    $(window).load(() => {
      App.load();
    });
  });
