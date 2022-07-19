let result = document.getElementById('input-text');

let calculate = (number) => {
    result.value = result.value+number 
    // or result.value+=number

}

let Result = () => {
    try{
        result.value=eval(result.value)
    }
    catch(err){
        alert('Enter Valid Input');

    }
}

let clr = () => {
    result.value = '';
}

let del = () => {
    result.value = result.value.slice(0, -1);
}