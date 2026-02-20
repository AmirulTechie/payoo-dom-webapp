document.getElementById('transfer-btn').addEventListener('click', function(){
    // 1. get user account number
    const userAcc = getValueFromInput('user-number');
    if(userAcc.length != 11){
        alert('Invalid user account');
        return;
    }
    // 2. get the amount and check balance and validate
    const transferAmount = getValueFromInput('transfer-amount');
    const currentBalance = getBalance();
    const newBalance = currentBalance - Number(transferAmount);
    if(newBalance < 0){
        alert(`Invalid amount! Your account balance is ${currentBalance} Taka`)
        return;
    }

    // 3. Check pin and update balance
    const pin = getValueFromInput('transfer-pin');
    if(pin === '1234'){
        alert(`Transfer money taka ${transferAmount} to ${userAcc} successful`)
        setBalance(newBalance);
    }else{
        alert('Incorrect Pin');
        return;
    }
    
})