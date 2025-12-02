function myRadioFunc(e) {
    e.preventDefault();
    console.log('func invoked');
    let radioData = document.myRadio.contant;
    for (let i = 0; i < radioData.length; i++) {
        if (radioData[i].checked == true) {
            // console.log('radioData[i]:',radioData[i].value);
            document.getElementById('Message').innerHTML = 'Selected Successfully';
            return true;
        }
    }
    document.getElementById('Message').innerHTML = 'Please Select Anyone';
    return false;
}