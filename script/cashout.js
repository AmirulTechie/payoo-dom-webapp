document.getElementById('cashout-btn').addEventListener('click', function(){
    // 1. get the agent number & validate
    const cashOutNumberInput = document.getElementById('cashout-number');
    const cashOutNumber = cashOutNumberInput.value;
    if(cashOutNumber.length != 11){
        alert('Invalid agent number')
    }
    // 2. get the amount, validate, convert to number
    const cashOutAmountInput = document.getElementById('cashout-amount');
    const cashOutAmount = cashOutAmountInput.value;

    // 3. get the current balance, validate, convert to number
    const balanceElement = document.getElementById('balance');
    const balance = balanceElement.innerText;
    // 4. Calculate new balance
    const newBalance = Number(balance) - Number(cashOutAmount);
    
    if(newBalance < 0){
        alert('Invalid amount');
        return;
    }
    
    // 5. get the pin and verify
    const cashOutPinInput = document.getElementById('cashout-pin');
    const pin = cashOutPinInput.value;
    if(pin === "1234"){
        // 5-1. True:: Show an alert > set Balance
        alert('Cashout succesful')
        console.log('New balance', newBalance);
        balanceElement.innerText = newBalance;
        // 1. get history-container
        const history = document.getElementById('history-container')
        // 2. new div create korbo
        const newHistory = document.createElement('div');
        // 3. add innerHTML in new div
        newHistory.innerHTML = `
        <div class="transaction-card p-5 bg-base-100">
            <p>Cash out to ${cashOutNumber}  Taka:${cashOutAmount} success</p>
            </div>
        `
        // 4. append newDiv in history container
        history.append(newHistory);
    }else{
        // 5.2. True:: show an error alert > return;
        alert('Invalid Pin');
        return;
    }
    
})