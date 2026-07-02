function calcSum(){
    const num1=document.getElementById('num1').value;
    const num2=document.getElementById('num2').value;
    const num3=document.getElementById('num3').value;

    const n1 = parseInt(num1);
    const n2 = parseInt(num2);
    const n3 = parseInt(num3);
    const sum = n1 + n2 + n3;

    //Display the result
    document.getElementById('answer').textContent = sum;
}

function Clear(){
    document.getElementById('num1').value="";
    document.getElementById('num2').value="";
    document.getElementById('num3').value="";
    document.getElementById('answer').textContent = " ";
}