// machine id -> input value;
function getValueFromInput(id){
    const input = document.getElementById(id);
    const value = input.value;
    return value;
}
// machine -> balance
function getBalance(){
    const balanceElement = document.getElementById('balance');
    const balance = balanceElement.innerText;
    return Number(balance);
}

// machine value -> set balance

function setBalance(value){
    const balanceElement = document.getElementById('balance');
    balanceElement.innerText = value;
}

// machine id > hide all > show id

function showOnly(id){
    const addMoney = document.getElementById('add-money');
    const cashout = document.getElementById('cashout');
    const transfer = document.getElementById('transfer');
    addMoney.classList.add('hidden');
    cashout.classList.add('hidden');
    transfer.classList.add('hidden');
    const selected = document.getElementById(id);
    selected.classList.remove('hidden');

}