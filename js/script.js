function ErrorAlValidarMatematica() 
{
    let Mensaje = document.getElementById("MensajeA");
    var Matematica = document.getElementById("Matematica");
    if (Matematica.value <= 10 && Matematica.value >= 1)
    {
        Mensaje.innerHTML = "";
        return true;
    }
    Mensaje.innerHTML = "La nota es de 1 a 10";
    return false;
}
function ErrorAlValidarLengua() 
{
    let Mensaje = document.getElementById("MensajeB");
    var Lengua = document.getElementById("Lengua");
    if (Lengua.value <= 10 && Lengua.value >= 1)
    {
        Mensaje.innerHTML = "";
        return true;
    }
    Mensaje.innerHTML = "La nota es de 1 a 10";
    return false;
}
function ErrorAlValidarEFSI() 
{
    let Mensaje = document.getElementById("MensajeC");
    var EFSI = document.getElementById("EFSI");
    if (EFSI.value <= 10 && EFSI.value >= 1)
    {
        Mensaje.innerHTML = "";
        return true;
    }
    Mensaje.innerHTML = "La nota es de 1 a 10";
    return false;
}
function ValidarForm(event)
{
    let Mensaje = document.getElementById("Resultado");
    if (!ErrorAlValidarMatematica() || !ErrorAlValidarLengua() || !ErrorAlValidarEFSI())
    {
        event.preventDefault();
        alert("Por favor, complete correctamente todos los campos");
    }
    else
    {
        CalcularPromedio();
        Mensaje.innerHTML = "El resultado es " + Promedio;
    }
}
function CalcularPromedio()
{
    var Matematica = document.getElementById("Matematica");
    var Lengua = document.getElementById("Matematica");
    var EFSI = document.getElementById("Matematica");
    Promedio=  (EFSI.value + Lengua.value + Matematica.value) / 3;
} 
