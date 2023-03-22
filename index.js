var nombre, apellido, cedula, horaD, horaV, horaN;

horaD = 0;
horaV = 0;
horaN = 0;

var costoD, costoV, costoN, sueldoT, sueldoA;

costoD = 675;
costoV = 700;
costoN = 956.23;

var seguroSocial, ahorroHa;
var DescuentoHabitacionalQuincena, DescuentoSeguroQuincena, DescuentoHabitacionalMes, DescuentoSeguroMes


nombre = prompt("Nombre");
apellido = prompt("Apellido");
cedula = prompt("Cedula");
horaD = parseInt(prompt("horas trabajadas diurnas al dia"));
horaV = parseInt(prompt("horas trabajadas vespertinas al dia"));
horaN = parseInt(prompt("horas trabajadas Nocturnas al dia"));


document.write("Nombre:" + nombre);
document.write("<hr>");
document.write("Apellido:" + apellido);
document.write("<hr>");
document.write("Cedula:" + cedula);
document.write("<hr>");
document.write("Horas trabajadas diurnas al dia: " + horaD);
document.write("<hr>");
document.write("Horas trabajadas vespertinas al dia: " + horaV);
document.write("<hr>");
document.write("Horas trabajadas nocturnas al dia: " + horaN);
document.write("<hr>");

var dineroAdquiridoD = (horaD * costoD) * 15; 24
console.log("Dinero adquirido por hora Diurna: " + dineroAdquiridoD + " bs");

var dineroAdquiridoV = (horaV * costoV) * 15;
console.log("Dinero adquirido por hora vespertina: " + dineroAdquiridoV + " bs");


var dineroAdquiridoN = (horaN * costoN) * 15;
console.log("Dinero adiquirido por hora nocturna: " + dineroAdquiridoN + " bs");

sueldoT = dineroAdquiridoD + dineroAdquiridoV + dineroAdquiridoN;

document.write("Sueldo Neto Adiquirido: " + sueldoT + " bs");


if (sueldoT < 85000) {

    ahorroHa = 0.001;
    seguroSocial = 0.0015;

    DescuentoHabitacionalQuincena = Number((sueldoT * ahorroHa) / 2).toFixed(2);
    DescuentoSeguroQuincena = Number((sueldoT * seguroSocial) / 2).toFixed(2);

    DescuentoHabitacionalMes =Number( DescuentoHabitacionalQuincena * 2).toFixed(2);
    DescuentoSeguroMes =Number( DescuentoSeguroQuincena * 2).toFixed(2);

    sueldoA = Number((sueldoT - DescuentoHabitacionalQuincena - DescuentoSeguroQuincena).toFixed(2));
    
    document.write("<hr>");
    document.write("Sueldo quincenal: " + sueldoA + " bs")
    document.write("<hr>");
    document.write("Descuento Habitacional Mensual: " + DescuentoHabitacionalMes );
    document.write("<hr>");
    document.write("Descuento Del Seguro Social mensual: " + DescuentoSeguroMes);

    
    console.log("Descuento " + DescuentoHabitacionalQuincena);
    console.log("Descuento seguro social: " + DescuentoSeguroQuincena);

    

    console.log("Sueldo a: " + sueldoA);


    console.log("El sueldo del empleado es menor que 85mil")

} else if (sueldoT >= 85000 && sueldoT <= 150000) {

    ahorroHa = 0.0015;
    seguroSocial = 0.002;


    DescuentoHabitacionalQuincena = Number((sueldoT * ahorroHa) / 2).toFixed(2);
    DescuentoSeguroQuincena = Number((sueldoT * seguroSocial) / 2).toFixed(2);

    DescuentoHabitacionalMes =Number( DescuentoHabitacionalQuincena * 2).toFixed(2);
    DescuentoSeguroMes =Number( DescuentoSeguroQuincena * 2).toFixed(2);
    sueldoA = Number((sueldoT - DescuentoHabitacionalQuincena - DescuentoSeguroQuincena).toFixed(2));


    document.write("<hr>");
    document.write("Sueldo quincenal adiquirido: " + sueldoA + " bs");
    document.write("<hr>");
    document.write("Descuento Habitacional Mensual: " + DescuentoHabitacionalMes );
    document.write("<hr>");
    document.write("Descuento Del Seguro Social mensual: " + DescuentoSeguroMes);

    console.log("Descuento " + DescuentoHabitacionalQuincena);
    console.log("Descuento seguro social: " + DescuentoSeguroQuincena);

    

    console.log("Sueldo no Neto: " + sueldoA);

    console.log("El sueldo del empleado esta en el rango B");

} else if (sueldoT > 150000) {

    ahorroHa = 0.003;
    seguroSocial = 0.0025;

    DescuentoHabitacionalQuincena = Number((sueldoT * ahorroHa) / 2).toFixed(2);
    DescuentoSeguroQuincena = Number((sueldoT * seguroSocial) / 2).toFixed(2);

    DescuentoHabitacionalMes =Number( DescuentoHabitacionalQuincena * 2).toFixed(2);
    DescuentoSeguroMes =Number( DescuentoSeguroQuincena * 2).toFixed(2);

    console.log("Descuento " + DescuentoHabitacionalQuincena);
    console.log("Descuento seguro social: " + DescuentoSeguroQuincena);

    sueldoA = Number((sueldoT - DescuentoHabitacionalQuincena - DescuentoSeguroQuincena).toFixed(2));
    document.write("<hr>");
    document.write("Sueldo adquirido: " + sueldoA + " bs");

    document.write("<hr>");
    document.write("Descuento Habitacional Mensual: " + DescuentoHabitacionalMes );
    document.write("<hr>");
    document.write("Descuento Del Seguro Social mensual: " + DescuentoSeguroMes);


  

    console.log("Sueldo no neto: " + sueldoA);
    console.log("El sueldo es mayor de 150bs");
}







