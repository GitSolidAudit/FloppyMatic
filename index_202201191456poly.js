
var CONTRACT_ADDRESS = "0xF92DeF42fD4B6D7ee671BBF2b617CAB424e8956C";
var referrer = '0x215C1fE067a39F71367B640901899D4647Ecb82d';
var upline = '0x215C1fE067a39F71367B640901899D4647Ecb82d';

var ABI = [{
  "constant": true,
  "inputs": [{
    "name": "_addr",
    "type": "address"
  }],
  "name": "getUserTimeToUnstake",
  "outputs": [{
    "name": "",
    "type": "uint256"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{
    "name": "userAddress",
    "type": "address"
  }],
  "name": "getUserDownlineCount",
  "outputs": [{
    "name": "",
    "type": "uint256"
  }, {
    "name": "",
    "type": "uint256"
  }, {
    "name": "",
    "type": "uint256"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "name",
  "outputs": [{
    "name": "",
    "type": "string"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{
    "name": "spender",
    "type": "address"
  }, {
    "name": "amount",
    "type": "uint256"
  }],
  "name": "approve",
  "outputs": [{
    "name": "",
    "type": "bool"
  }],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{
    "name": "_addr",
    "type": "address"
  }],
  "name": "getUserMaticBalance",
  "outputs": [{
    "name": "",
    "type": "uint256"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "totalSupply",
  "outputs": [{
    "name": "",
    "type": "uint256"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{
    "name": "tokenAmount",
    "type": "uint256"
  }],
  "name": "sellToken",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{
    "name": "sender",
    "type": "address"
  }, {
    "name": "recipient",
    "type": "address"
  }, {
    "name": "amount",
    "type": "uint256"
  }],
  "name": "transferFrom",
  "outputs": [{
    "name": "",
    "type": "bool"
  }],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "limitSupply",
  "outputs": [{
    "name": "",
    "type": "uint256"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "totalTokenStaked",
  "outputs": [{
    "name": "",
    "type": "uint256"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "decimals",
  "outputs": [{
    "name": "",
    "type": "uint8"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "getContractTokenBalance",
  "outputs": [{
    "name": "",
    "type": "uint256"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{
    "name": "spender",
    "type": "address"
  }, {
    "name": "addedValue",
    "type": "uint256"
  }],
  "name": "increaseAllowance",
  "outputs": [{
    "name": "",
    "type": "bool"
  }],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "getAPY_T",
  "outputs": [{
    "name": "",
    "type": "uint256"
  }],
  "payable": false,
  "stateMutability": "pure",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "getAPY_M",
  "outputs": [{
    "name": "",
    "type": "uint256"
  }],
  "payable": false,
  "stateMutability": "pure",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{
    "name": "_addr",
    "type": "address"
  }],
  "name": "getCurrentUserBonAirdrop",
  "outputs": [{
    "name": "",
    "type": "uint256"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "getCurrentDay",
  "outputs": [{
    "name": "",
    "type": "uint256"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{
    "name": "userAddress",
    "type": "address"
  }],
  "name": "getUserReferralTotalBonus",
  "outputs": [{
    "name": "",
    "type": "uint256"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": false,
  "inputs": [],
  "name": "unStakeToken",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "getTokenPrice",
  "outputs": [{
    "name": "",
    "type": "uint256"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "getTokenAvailableToSell",
  "outputs": [{
    "name": "",
    "type": "uint256"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{
    "name": "maticAmount",
    "type": "uint256"
  }],
  "name": "maticToToken",
  "outputs": [{
    "name": "",
    "type": "uint256"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{
    "name": "_addr",
    "type": "address"
  }],
  "name": "getUserMaticStaked",
  "outputs": [{
    "name": "",
    "type": "uint256"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "getTokenSoldToday",
  "outputs": [{
    "name": "",
    "type": "uint256"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{
    "name": "userAddress",
    "type": "address"
  }],
  "name": "getUserReferralWithdrawn",
  "outputs": [{
    "name": "",
    "type": "uint256"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "totalMaticStaked",
  "outputs": [{
    "name": "",
    "type": "uint256"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "getContractMaticBalance",
  "outputs": [{
    "name": "",
    "type": "uint256"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{
    "name": "account",
    "type": "address"
  }],
  "name": "balanceOf",
  "outputs": [{
    "name": "",
    "type": "uint256"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "availableSupply",
  "outputs": [{
    "name": "",
    "type": "uint256"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{
    "name": "referrer",
    "type": "address"
  }],
  "name": "stakeMatic",
  "outputs": [],
  "payable": true,
  "stateMutability": "payable",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{
    "name": "_addr",
    "type": "address"
  }],
  "name": "getUserUnclaimedTokens_M",
  "outputs": [{
    "name": "value",
    "type": "uint256"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "symbol",
  "outputs": [{
    "name": "",
    "type": "string"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "ownerManualAirdropCheckpoint",
  "outputs": [{
    "name": "",
    "type": "uint256"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "getTimeToNextDay",
  "outputs": [{
    "name": "",
    "type": "uint256"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{
    "name": "spender",
    "type": "address"
  }, {
    "name": "subtractedValue",
    "type": "uint256"
  }],
  "name": "decreaseAllowance",
  "outputs": [{
    "name": "",
    "type": "bool"
  }],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{
    "name": "to",
    "type": "address"
  }, {
    "name": "value",
    "type": "uint256"
  }],
  "name": "transfer",
  "outputs": [{
    "name": "",
    "type": "bool"
  }],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{
    "name": "_addr",
    "type": "address"
  }],
  "name": "getUserTokenStaked",
  "outputs": [{
    "name": "",
    "type": "uint256"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "sentAirdrop",
  "outputs": [{
    "name": "",
    "type": "uint256"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "totalUsers",
  "outputs": [{
    "name": "",
    "type": "uint256"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{
    "name": "tokenAmount",
    "type": "uint256"
  }],
  "name": "tokenToMatic",
  "outputs": [{
    "name": "",
    "type": "uint256"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": false,
  "inputs": [],
  "name": "withdrawRef",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{
    "name": "spender",
    "type": "address"
  }, {
    "name": "amount",
    "type": "uint256"
  }, {
    "name": "extraData",
    "type": "bytes"
  }],
  "name": "approveAndCall",
  "outputs": [{
    "name": "",
    "type": "bool"
  }],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{
    "name": "tokenAmount",
    "type": "uint256"
  }],
  "name": "stakeToken",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "getContractLaunchTime",
  "outputs": [{
    "name": "",
    "type": "uint256"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": false,
  "inputs": [],
  "name": "claimToken_M",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{
    "name": "_addr",
    "type": "address"
  }],
  "name": "getUserUnclaimedTokens_T",
  "outputs": [{
    "name": "value",
    "type": "uint256"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{
    "name": "owner",
    "type": "address"
  }, {
    "name": "spender",
    "type": "address"
  }],
  "name": "allowance",
  "outputs": [{
    "name": "",
    "type": "uint256"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": false,
  "inputs": [],
  "name": "claimToken_T",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{
    "name": "userAddress",
    "type": "address"
  }],
  "name": "getUserReferralBonus",
  "outputs": [{
    "name": "",
    "type": "uint256"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{
    "name": "_addr",
    "type": "address"
  }],
  "name": "getUserTokenBalance",
  "outputs": [{
    "name": "",
    "type": "uint256"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "ownerManualAirdrop",
  "outputs": [{
    "name": "",
    "type": "uint256"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [{
    "name": "_adv1",
    "type": "address"
  }, {
    "name": "_adv2",
    "type": "address"
  }, {
    "name": "_prj1",
    "type": "address"
  }],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "constructor"
}, {
  "anonymous": false,
  "inputs": [{
    "indexed": true,
    "name": "account",
    "type": "address"
  }, {
    "indexed": false,
    "name": "txType",
    "type": "string"
  }, {
    "indexed": false,
    "name": "tokenAmount",
    "type": "uint256"
  }, {
    "indexed": false,
    "name": "trxAmount",
    "type": "uint256"
  }],
  "name": "TokenOperation",
  "type": "event"
}, {
  "anonymous": false,
  "inputs": [{
    "indexed": true,
    "name": "from",
    "type": "address"
  }, {
    "indexed": true,
    "name": "to",
    "type": "address"
  }, {
    "indexed": false,
    "name": "value",
    "type": "uint256"
  }],
  "name": "Transfer",
  "type": "event"
}, {
  "anonymous": false,
  "inputs": [{
    "indexed": true,
    "name": "owner",
    "type": "address"
  }, {
    "indexed": true,
    "name": "spender",
    "type": "address"
  }, {
    "indexed": false,
    "name": "value",
    "type": "uint256"
  }],
  "name": "Approval",
  "type": "event"
}]
var CONTRACT_ADDRESS;

var currentAddr;
var contract = null;
var gasPrice = '100000000000'
var percent1,percent2,percent3,percent4,percent5,percent6;
var startD, startH, startM, startS;

var BUSDPrice = 0;
var TokenPrice = 0;
var userBUSDStaked = 0;
var userReqAirdropInv = 0;



window.addEventListener('load', Connect)

async function Connect() {
  if (window.ethereum) {
      // Use MetaMask's provider
      window.web3 = new Web3(window.ethereum);
      try {
          // Request account access
          await window.ethereum.request({ method: 'eth_requestAccounts' });
          const accounts = await web3.eth.getAccounts();
          const currentAddr = accounts[0];
          console.log("Connected address:", currentAddr);
          runAPP();
      } catch (error) {
          console.error("Error connecting to MetaMask:", error);
      }
  } else {
      console.error('MetaMask not detected');
  }
}
async function runAPP() {
  let networkID = await web3.eth.net.getId()
  if (networkID == 137) { // 56 - BSC Live. 97 -- BSC Test
    contract = await new web3.eth.Contract(ABI, CONTRACT_ADDRESS)
    console.log(contract)
  }
}


// Update the times every 3 seconds
setInterval(updateStakeEndTime, 3000);

setInterval(() => {
  if (contract) {
    contract.methods.getContractLaunchTime().call().then(res => {
      var t = BigInt(res) + 60n;
      startD = parseInt(t / 60 / 60 / 24)

      t = t - startD * 60 * 60 * 24
      startH = parseInt(t / 60 / 60)

      t = t - startH * 60 * 60
      startM = parseInt(t / 60)

      t = t - startM * 60
      startS = parseInt(t)

      //launchTime(res,(body)=>{
      //   $("#launch-time").html(body)                    
      //}); 				
    })

    contract.methods.getTimeToNextDay().call().then(res => {
      var t = parseInt(res) + 60
      startD = parseInt(t / 60 / 60 / 24)

      t = t - startD * 60 * 60 * 24
      startH = parseInt(t / 60 / 60)

      t = t - startH * 60 * 60
      startM = parseInt(t / 60)

      t = t - startM * 60
      startS = parseInt(t)

      $("#time-tonextday").html(`${startD}D : ${startH}H : ${startM}M`)
    })

    contract.methods.getUserTimeToUnstake(currentAddr).call().then(res => {
      var t = parseInt(res) + 60
      startD = parseInt(t / 60 / 60 / 24)

      t = t - startD * 60 * 60 * 24
      startH = parseInt(t / 60 / 60)

      t = t - startH * 60 * 60
      startM = parseInt(t / 60)

      t = t - startM * 60
      startS = parseInt(t)

      if (res == 0) {
        $("#time-tounstake").html(`Ready to Unstake`)
      } else {
        $("#time-tounstake").html(`${startD}D : ${startH}H : ${startM}M`)
      }
    })

  }
}, 3000);

function bigIntToNumber(bigInt) {
  return Number(bigInt) / 1e18;
}

setInterval(() => {
  if (contract) {
    web3.eth.getAccounts().then(res => {
      currentAddr = res[0]
    })

    var connectedAddr = currentAddr[0] +
      currentAddr[1] +
      currentAddr[2] +
      currentAddr[3] +
      currentAddr[4] + '...' +
      currentAddr[currentAddr.length - 5] +
      currentAddr[currentAddr.length - 4] +
      currentAddr[currentAddr.length - 3] +
      currentAddr[currentAddr.length - 2] +
      currentAddr[currentAddr.length - 1]

    $("#connect-btn").text(connectedAddr)

    // Helper function to convert BigInt to Number
function bigIntToNumber(bigInt) {
  return Number(bigInt) / 1e18;
}

// Get token price
contract.methods.getTokenPrice().call().then(res => {
  TokenPrice = bigIntToNumber(res).toFixed(8);
  $("#token-price").text(TokenPrice);
  $("#token-priceM").text(TokenPrice);
});

// Get total supply
contract.methods.totalSupply().call().then(res => {
  $("#total-supply").text(bigIntToNumber(res).toFixed(2));
});

// Get limit supply
contract.methods.limitSupply().call().then(res => {
  $("#limit-supply").text(bigIntToNumber(res).toFixed(2));
});

// Get available supply
contract.methods.availableSupply().call().then(res => {
  $("#available-supply").text(bigIntToNumber(res).toFixed(2));
});

// Get total users
contract.methods.totalUsers().call().then(res => {
  $("#total-users").text(bigIntToNumber(res).toFixed(2));
});

// Get total BNB staked
contract.methods.totalMaticStaked().call().then(res => {
  $("#total-BUSD-staked").text(bigIntToNumber(res).toFixed(2));
});

// Get total users (again, seems duplicated)
contract.methods.totalUsers().call().then(res => {
  $("#totalUsers").text(bigIntToNumber(res).toFixed(2));
});

// Get total token staked
contract.methods.totalTokenStaked().call().then(res => {
  $("#total-token-staked").text(bigIntToNumber(res).toFixed(2));
});

// Get contract BUSD balance
contract.methods.balanceOf(CONTRACT_ADDRESS).call().then(res => {
  $("#contract-BUSD-balance").text(bigIntToNumber(res).toFixed(2));
});

// Get user BNB balance
contract.methods.getUserMaticBalance(currentAddr).call().then(res => {
  $("#user-BUSD-balance-1").text(bigIntToNumber(res).toFixed(2));
});

// Get contract token balance
contract.methods.getContractTokenBalance().call().then(res => {
  $("#contract-token-balance").text(bigIntToNumber(res).toFixed(2));
});

// Get user token balance
contract.methods.getUserTokenBalance(currentAddr).call().then(res => {
  $("#user-token-balance-1").text(bigIntToNumber(res).toFixed(2));
  $("#user-token-balance-2").text(bigIntToNumber(res).toFixed(2));
});

// Get user BNB staked
contract.methods.getUserMaticStaked(currentAddr).call().then(res => {
  $("#user-BUSD-staked").text(bigIntToNumber(res).toFixed(2));
});

// Get user token staked
contract.methods.getUserTokenStaked(currentAddr).call().then(res => {
  $("#user-token-staked-1").text(bigIntToNumber(res).toFixed(2));
  $("#user-token-staked-2").text(bigIntToNumber(res).toFixed(2));
});

// Get user unclaimed tokens (M)
contract.methods.getUserUnclaimedTokens_M(currentAddr).call().then(res => {
  $("#user-unClaimed-M").text(bigIntToNumber(res).toFixed(2));
});

// Get user unclaimed tokens (T)
contract.methods.getUserUnclaimedTokens_T(currentAddr).call().then(res => {
  $("#user-unClaimed-T").text(bigIntToNumber(res).toFixed(2));
});


// Get token sold today
contract.methods.getTokenSoldToday().call().then(res => {
  $("#total-sold-today").text(bigIntToNumber(res).toFixed(2));
});

// Get user referral bonus
contract.methods.getUserReferralBonus(currentAddr).call().then(res => {
  $("#referral-available").text(bigIntToNumber(res).toFixed(2));
});

// Get user referral total bonus
contract.methods.getUserReferralTotalBonus(currentAddr).call().then(res => {
  $("#referral-earned").text(bigIntToNumber(res).toFixed(2));
});

// Get user referral withdrawn
contract.methods.getUserReferralWithdrawn(currentAddr).call().then(res => {
  $("#referral-withdrawn-1").text(bigIntToNumber(res).toFixed(2));
  $("#referral-withdrawn-2").text(bigIntToNumber(res).toFixed(2));
});

// Get user downline count
contract.methods.getUserDownlineCount(currentAddr).call().then(res => {
  var sum = res.reduce((acc, num) => acc + Number(num), 0);
  $("#total-referrals-1").text(sum.toFixed(0));
  $("#total-referrals-2").text(sum.toFixed(0));
});

// Convert token value to hex string



  }

}, 3000);


function spendLimit(callback) {
  tokenContract.methods.allowance(currentAddr, contract).call().then(result => {
    callback(web3.utils.fromWei(result));
  }).catch((err) => {
    console.log(err)
  });
}

function userBalance(callback) {
  tokenContract.methods.balanceOf(currentAddr).call().then(result => {
    var amt = web3.utils.fromWei(result)
    // console.log("balance" + amt)
    callback(amt);
    usrBal = amt;
  }).catch((err) => {
    console.log(err)
  });
}


function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).val()).select();
  document.execCommand("copy");
  $temp.remove();
  showAlert('Successfuly copied', 'success')
}

function showAlert(msg, type) {
  if (type == 'error') {
    iziToast.error({
      title: 'Error',
      message: msg,
      backgroundColor: 'white',
      position: 'topRight',
      color: '.iziToast-color-red',
      iconColor: '.iziToast-color-red'
    });
  }

  if (type == 'success') {
    iziToast.success({
      title: 'OK',
      message: msg,
      backgroundColor: 'white',
      position: 'topRight',
      progressBarColor: '#76BF73',
      color: '.iziToast-#76BF73',
      iconColor: '.iziToast-#76BF73'
    });
  }
}
function toHexString(number) { return '0x' + number.toString(16) }

function SetMaxBUSDMachine() {
  var inputF = document.getElementById("input-2");
  contract.methods.getUserTokenBalance(currentAddr).call().then(res => {

    amt = web3.utils.fromWei(res);
    inputF.value = parseFloat(amt).toFixed(3) - 0.001;
  })
}

function SetMaxBUSDMachineToSell() {
  var inputF = document.getElementById("input-3");
  contract.methods.getUserTokenBalance(currentAddr).call().then(res => {

    amt = web3.utils.fromWei(res);
    inputF.value = parseFloat(amt).toFixed(3) - 0.001;
  })
}


function stakeM() {
  var today = new Date();
  var date = today.getUTCFullYear() + '-' + (today.getUTCMonth() + 1) + '-' + today.getUTCDate();
  var time = today.getUTCHours() + ":" + today.getUTCMinutes() + ":" + today.getUTCSeconds();
  var CurrentDateTime = date + ' ' + time;
  // console.log(CurrentDateTime);

  var busdlaunch = new Date("Sat Dec 18 2021 13:00:00 GMT-0000");
  var date = busdlaunch.getUTCFullYear() + '-' + (busdlaunch.getUTCMonth() + 1) + '-' + busdlaunch.getUTCDate();
  var time = busdlaunch.getUTCHours() + ":" + busdlaunch.getUTCMinutes() + ":" + busdlaunch.getUTCSeconds();
  var BUSDLaunchDateTime = date + ' ' + time;
  // console.log(BUSDLaunchDateTime);

  if (CurrentDateTime > BUSDLaunchDateTime) {    // launched
    if (contract) {
      var trxspenddoc = document.getElementById('input-busd');
      var amountInWei = web3.utils.toWei(trxspenddoc.value);

      console.log("stake busd: " + upline, amountInWei);
      contract.methods.stakeMatic(upline) // Pass only one parameter
        .send({
          value: amountInWei, // assuming amountInWei is the value being sent
          from: currentAddr,
          gasPrice: gasPrice,
        });
    }
  } else {
    window.alert("Staking BUSD available from: Sat Dec 18 2021 13:00:00 GMT-0000");
  }
}

function stakeT(input) {
  if (contract) {
    var amount = toHexString($(input).val() * 1e18)
    console.log(amount)
    contract.methods.stakeToken(amount).send({
      // value: 0,
      from: currentAddr,
      gasPrice: gasPrice,
    })
  }
}
function sell(input) {
  if (contract) {
    var amount = toHexString($(input).val() * 1e18)
    console.log(amount)
    contract.methods.sellToken(amount).send({
      // value: 0,
      from: currentAddr,
      gasPrice: gasPrice,
    })
  }
}


var getUrlParameter = function getUrlParameter(sParam) {
  var sPageURL = window.location.search.substring(1),
    sURLVariables = sPageURL.split('&'),
    sParameterName,
    i;

  for (i = 0; i < sURLVariables.length; i++) {
    sParameterName = sURLVariables[i].split('=');

    if (sParameterName[0] === sParam) {
      return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
    }
  }
};


var refurl = getUrlParameter('ref');

if (refurl) {
  localStorage.setItem('ref', refurl);
}

upline = localStorage.getItem('ref') ? localStorage.getItem('ref') : referrer;

$("#unstake").click(() => {
  if (contract) {
    contract.methods.unStakeToken().send({
      value: 0,
      from: currentAddr,
      gasPrice: gasPrice,
    })
  }
})

$("#claimM").click(() => {
  if (contract) {
    contract.methods.claimToken_M().send({
      value: 0,
      from: currentAddr,
      gasPrice: gasPrice,
    })
  }
})

$("#claimT").click(() => {
  if (contract) {
    contract.methods.claimToken_T().send({
      value: 0,
      from: currentAddr,
      gasPrice: gasPrice,
    })
  }
})

$("#claimA").click(() => {
  if (contract) {
    contract.methods.claimAirdrop().send({
      value: 0,
      from: currentAddr,
      gasPrice: gasPrice,
    })
  }
})

$("#withdraw-referral-btn").click(() => {
  if (contract) {
    contract.methods.withdrawRef().send({
      value: 0,
      from: currentAddr,
      gasPrice: gasPrice,
    })
  }
})

$("#input-3").on('input', () => {
  var amount = $("#input-3").val();

  if (contract) {
    var profit = (amount * TokenPrice)
    $("#sell-calc").html(`${profit.toFixed(6)} Matic</span>`)
  }
})
