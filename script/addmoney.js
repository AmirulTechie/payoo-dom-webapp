document.getElementById('add-money-btn').addEventListener('click', function(){
    // 1.get bank account
    const bankAccount = getValueFromInput('add-money-bank');
    if(bankAccount == 'Select a Bank'){
        alert("Please select a Bank");
        return;
    }
    // 2. get bank account number
    const accno = getValueFromInput('add-money-number');
    if(accno.length != 11){
        alert('Invalid Account no.')
        return;
    }
    // 3. get amount
    const amount = getValueFromInput('add-money-amount');
    const currentBalance = getBalance()
    const newBalance = currentBalance + Number(amount);

    const pin = getValueFromInput('add-money-pin');
    if(pin === '1234'){
        alert(`Add money from ${bankAccount} Account:${accno} Taka:${amount} successful `);
        setBalance(newBalance);
    }else{
        alert('Invalid pin');
    }
    
})

