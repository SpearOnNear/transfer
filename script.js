
document.addEventListener('DOMContentLoaded', () => {
    
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

});


