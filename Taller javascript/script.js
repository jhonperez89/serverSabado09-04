principal();
function principal(){
    var punto = prompt("¿Que punto del taller resolver?");
    if (punto == "1"){
        var b = parseFloat(prompt("Introduzca la ancho del rectangulo:"));
        var h = parseFloat(prompt("Introduzca la altura del rectangulo:"));
        punto1(b,h);
    }
    else if(punto == "2"){
        var kms = parseFloat(prompt("Introduzca la velocidad en km/hora "));
        punto2(kms);
    }
    else if (punto == "3"){
        let radio = parseInt(prompt("Introduzca el radio de la circunferencia: "));
        punto3(radio);
    }
    else if (punto == "4"){
        let numerito = parseFloat(prompt("Introduzca el numero para calcuar el cubo"));
        punto4(numerito);
    }
    else if(punto == "5"){
        let nombre = prompt("Ingrese el nombre: ");
        punto5(nombre);
    }
    else if(punto == "6"){
        var num1 = parseFloat(prompt("Introduzca el numero 1: "));
        var num2 = parseFloat(prompt("Introduzca el numero 2: "));
        punto6(num1,num2);
    }
    else if(punto == "7"){
    let num = parseInt(prompt("Digitar 1 si quieres pasar grados Celsius a Fahrenheit \nDigitar 2 si quieres pasar de Fahrenheit a Celsius"))
    punto7(num);
    }
    else if(punto == "8"){
        let estatura = parseFloat(prompt("Estatura: "));
        let peso = parseFloat(prompt("Peso: "));
        punto8(estatura,peso);
    }
    else if (punto == "9"){
        punto9();
    }
    else if(punto == "10"){
        let precio = parseFloat(prompt("Introduzca el precio: "));
        let cantidad = parseFloat(prompt("Introduzca la cantidad "));
        punto10(precio, cantidad);

    }
    else if(punto == "11"){
        punto11();
    }
    else if (punto == "12"){
        let numproducts = parseInt(prompt("Numero productos: "));
        punto12(numproducts)
    }
    else{
    principal();
    }
    document.addEventListener("keydown",principal);
}
function punto1(b,h){
let a = (b*h);
document.write("<p> El area del rectangulo es: " + a +"</p> <hr>");

}
function punto2(kms){
let millas = 1609*kms;
let metros = 1000*kms;
document.write("<p>La velociadad en metros es: " + metros +"/hora</p> ");
document.write("<p>La velociadad en millas es: " + millas +"/hora</p> <hr>");
}
function punto3(radio){
   let perimetro = 2*Math.PI*radio;
   let area = Math.PI*radio**2;
    document.write("<p> El perimetro de la circunferencia es: " + perimetro +"</p>");
    document.write("<p> El area de al circunferencia es: " + area +"</p> <hr>");
}
function punto4(numerito){
let cubito = numerito**3;
document.write("<p> El cubo del numero es: " + cubito +"</p> <hr>")
}
function punto5(nombre){
    if (Number(nombre) >= 0 || Number(nombre) <= 0){
        document.write("Esto es un numero, por favor, introduce un nombre valido");
    }
    else{
        document.write("<p>El nombre introducido es: " + nombre + "</p> <hr>");
    }
}
function punto6(x,y){
    var sumanum = x + y;
    var restanum = x - y;
    var multiplicarnum = x*y;
    var dividirnum = x/y;
    var modulonum = x%y;
    document.write("<p>La suma es: " +sumanum + "</p>");
    document.write("<p>La resta es: " +restanum + "</p>");
    document.write("<p>La multiplicacion es: " +multiplicarnum + "</p>");
    document.write("<p>La division es: " + dividirnum+ "</p>");
    document.write("<p>El modulo es: " +modulonum + "</p> <hr>");

}
function punto7(num){
    let grados;
    if (num == 1){
        grados = parseFloat(prompt("Introduzca los °C"));
        let gradosF = (grados*9/5) + 32;
        document.write("<p> °C = " + grados+ "</p>");
        document.write("<p> °F = " + gradosF+ "</p>");
        if (gradosF <= 32){
            document.write("<p>Nos congelamos</p>");
        }
        else if(gradosF >= 37 && gradosF <= 50){
            document.write("<p>Esta haciendo frio </p>");
        }
        else if (gradosF >= 51 && gradosF <= 77){
            document.write("<p>Esta templado el dia</p>");
        }
        else{
            Document.write("Tiene fiebre o es el apocalipsis");
        }

    }
    else if (num == 2){
        grados = parseFloat(prompt("Introduzca los °F"));
        let gradosC = (grados-32)*5/9;
        document.write("<p> °F = " + grados+ "</p>");
        document.write("<p> °C = " + gradosC+ "</p>");
    }
    else{
        document.write("<p>Vuelvelo a intentar</p>");
    }

}
function punto8 (estatura,peso){ 
    let IMC = (peso / (estatura**2));
    console.log(IMC);
    if (IMC < 18.5){
        document.write("<p>El indice de masa muscular es: " + IMC + ", Bajó de peso, debe ir al nutricionista</p>");
    }
    else if (IMC <= 24.5){
        document.write("<p>El indice de masa muscular es: " + IMC + ", Esta normal</p>");
    }
    else if (IMC <= 29.9){
        document.write("<p>El indice de masa muscular es: " + IMC + ", Es sobrepeso</p>");
    }
    else{
        document.write("<p>El indice de masa muscular es: " + IMC + ", Obeso debe ir al nutricionista</p>");
    }

}
function punto9(){
    let nombre = prompt("Introduzca el nombre");
    n(nombre);
    function n(nombre){
        document.write("<p> Bienvenido " + nombre + "</p>");
    }
} 
function punto10(precio, cantidad){
    let precioProducto = calcularPrecio(precio, cantidad);
    let iva = calcularIva(precioProducto);
    let precioTotal = precioProducto+iva;
    document.write("<p> El precio sin iva es: $" + precioProducto + "</p>");
    document.write("<p> El iva es: $" + iva + "</p>");
    document.write("<p> El precio total a pagar: $" + precioTotal + "</p>");
    function calcularPrecio(precio, cantidad){
        return(precio*cantidad);
    }

    function calcularIva(x){
        return(x*0.19);
    }

}
function punto11(){
    let fechaA = prompt("Introduzca la fecha actual");
    fechaActual= new Date(fechaA);
    var oneJan = new Date(fechaActual.getFullYear(),0,1);
    var dias = Math.floor((fechaActual - oneJan) / (24 * 60 * 60 * 1000));
    var semanas = Math.ceil(( fechaActual.getDay() + 1 + dias) / 7);
    document.write("<p> Estamos en el dia: " + dias + "</p>");
    document.write("<p> Estamos en la semana: " + (semanas-1) + "</p>");
    document.write("<p> <b> El numero de dias que faltan para que termine el año es: " + (365 - dias) + " </b> </p>");
    document.write("<p> <b>Las semanas que faltan para que termine el año es: " + (52-(semanas-1)) + "</b> </p>");

}
function punto12(numproducts){
    document.write("<p>La cantidad de productos son " + numproducts+"</p> <hr>");
    for (i=0; i<numproducts; i++){
        var nomproduct = prompt("Ingrese el nombre del producto: ");
        var valproduct = parseFloat(prompt("Ingrese por favor el valor del producto: "));
        imprimir(nomproduct,valproduct);
        
        }
        function imprimir(nomproduct,valproduct){
            document.write("<p> El nombre de cada producto es : " + nomproduct+"</p>");
            document.write("<p>El valor del producto $" + valproduct+"</p>");
    }
}