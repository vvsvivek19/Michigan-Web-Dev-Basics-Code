function billingFunction(){
    var name = document.getElementById('shippingName');
    var zipcode = document.getElementById('shippingZip');
    if (document.getElementById('same').checked){
        document.getElementById('billingName').value = name.value;
        document.getElementById('billingZip').value = zipcode.value;
    }
    else{
        document.getElementById('billingName').value = null;
        document.getElementById('billingZip').value = null;
    }
}