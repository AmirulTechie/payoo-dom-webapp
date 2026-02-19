document.getElementById('login-btn').addEventListener('click', function(){
    //1. get the mobile number
    const numberInput = document.getElementById("input-number");
    const contactNumber = numberInput.value;
    // 2. get the pin
    const pinInput = document.getElementById("input-pin");
    const pin = pinInput.value;
    // 3. match the mobile number & pin
    if(contactNumber == '01234567890' && pin == '1234'){
        // 3-1. true:::>> alert > homepage
        alert('login success')
        window.location.assign("/home.html");
    }else{
        // 3-2. false:::>> alert > false
        alert('login failed')
        return;
    }
})