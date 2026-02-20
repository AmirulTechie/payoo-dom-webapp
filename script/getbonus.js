document.getElementById('getbonus-btn').addEventListener('click', function(){
    const coupon = getValueFromInput('coupon-number');
    if(coupon.startsWith('PYO-') && coupon.length == 8){
        alert('Coupon redeemed succesfully');
        const balance = getBalance();
        const newBalance = balance + 50;
        setBalance(newBalance);
    }else{
        alert('The coupon is either invalid or expired');
        return;
    }
})