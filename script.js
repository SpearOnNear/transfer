
document.addEventListener('DOMContentLoaded', () => {
    
    const urlParams = new URLSearchParams(window.location.search);
    const initData = urlParams.get('data');
    
    let walletID ='';

    if (initData) {
        try {
            // Parse JSON string back into object
            const data = JSON.parse(initData);
    
            // Validate and use walletAmount object securely
            console.log('Received wallet amount:', data);
    
            // Example usage
            const currency = data.chat_id;
            const amount = data.wallet;
            walletID = data.wallet;
            console.log(`Wallet amount: ${amount} ${currency}`);
        } catch (error) {
            console.error('Error parsing initData:', error);
        }
    } else {
        console.error('No initData found in URL');
    }


    if (window.location.pathname.endsWith('success.html')) {
        //   sendTelegramMessage(`<b>Transaction successful!</b>
      
        // Account ID: <code>tgroyale.testnet</code>
        // Transaction Hashes: hahaha`);


        // Function to shorten transaction hash
function shortenTxnHash(txnHash, charsToShow = 6) {
    if (txnHash.length <= charsToShow * 2) {
        return txnHash; // If already short, no need to change
    }

    const start = txnHash.slice(0, charsToShow);
    const end = txnHash.slice(-charsToShow);
    return `${start}...${end}`;
}

// Update transaction details
function updateTransactionDetails(fromAccount, toAccount, amount, txnHash, txnLink) {
    document.getElementById('fromAccount').textContent = fromAccount;
    document.getElementById('toAccount').textContent = toAccount;
    document.getElementById('amount').textContent = amount;
    document.getElementById('shortenedHash').textContent = shortenTxnHash(txnHash);
    document.getElementById('txnLink').setAttribute('href', txnLink);
}

// Example usage:
const fromAccount = 'tgroyale.testnet';
const toAccount = 'nearobot.testnet';
const amount = '20';
const txnHash = 'BcSHfXsjTD2ABuefZsi5xyaNdXqm69y4pWjjDiFRFUqw';
const txnLink = `https://nearblocks.io/txns/${txnHash}`;

// Update transaction details on page load
updateTransactionDetails(fromAccount, toAccount, amount, txnHash, txnLink);

// Add event listener to continue button
document.getElementById('continueBtn').addEventListener('click', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const accountId = urlParams.get('transactionHashes');
    console.log(accountId);
    const tg = window.Telegram.WebApp;
    tg.sendData("success");
});

function sendTelegramMessage(message) {
    const apiUrl = 'https://textroyale.vercel.app/sendMessage';
    const data = {
        chatId: '-1002055384620',
        message: message,
        threadId: 10807
    };
  
    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
        if (data === 'Message sent successfully') {
            console.log('Message sent successfully:', data);
        } else {
            console.error('Error sending message:', data);
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
  }
    } 
    else
    {
        const transactionData = {
            amount: '20 $TEXT',
            txType: walletID,
        };
    
        document.getElementById('amount').value = transactionData.amount;
        document.getElementById('tx-type').value = transactionData.txType;
    }

});


