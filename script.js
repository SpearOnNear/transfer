
document.addEventListener('DOMContentLoaded', () => {
    
    const transactionHases = urlParams.get('transactionHashes');
    console.log(transactionHases);

    function shortenTxnHash(txnHash, charsToShow = 6) {
        if (txnHash.length <= charsToShow * 2) {
            return txnHash; // If already short, no need to change
        }
    
        const start = txnHash.slice(0, charsToShow);
        const end = txnHash.slice(-charsToShow);
        return `${start}...${end}`;
    }
    
    // Update transaction details
    function updateTransactionDetails(txnHash, txnLink) {
        document.getElementById('shortenedHash').textContent = shortenTxnHash(txnHash);
        document.getElementById('txnLink').setAttribute('href', txnLink);
    }
    
    const txnHash = 'BcSHfXsjTD2ABuefZsi5xyaNdXqm69y4pWjjDiFRFUqw';
    const txnLink = `https://testnet.nearblocks.io/txns/${txnHash}`;
    
    // Update transaction details on page load
    updateTransactionDetails(txnHash, txnLink);
    
    // Add event listener to continue button
    document.getElementById('continueBtn').addEventListener('click', function() {
        const data = {
            type:"payment",
            status: "success",
            txnLink: txnHash
        }
        const urlParams = new URLSearchParams(window.location.search);
        const accountId = urlParams.get('transactionHashes');
        console.log(accountId);
        const tg = window.Telegram.WebApp;
        tg.sendData(JSON.stringify(data));
    });

});


