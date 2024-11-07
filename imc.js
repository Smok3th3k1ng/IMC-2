let peso = parseFloat(prompt("Informe seu peso: "));
let altura = parseFloat(prompt ("Informe sua altura: "));
let imc = (peso/(altura*altura)).toFixed(2);
document.write("Seu Imc é igual a: ", imc, "!")
document.write ("<br>")
if((imc >=18.5 && imc <=24.99)){
   document.write("Você está com um peso saudável!")
}
else if((imc >=25 && imc <=29.99)){
    document.write("Você está sobrepeso!")
 }
 else if((imc >=30 && imc <=34.99)){
    document.write("Você está com obesidade I!")
 }
 else if((imc >=35 && imc <=44.99)){
    document.write("Você com obesidade II!")
 }


 

