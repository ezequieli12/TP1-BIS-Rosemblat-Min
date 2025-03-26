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
    let Mensaje = document.getElementById("Resultado");
    var Matematica = parseFloat(document.getElementById("Matematica").value);
    var Lengua = parseFloat(document.getElementById("Lengua").value);
    var EFSI = parseFloat(document.getElementById("EFSI").value);
    var Promedio =  (Matematica  + Lengua + EFSI)/ 3;
    Mensaje.innerHTML = "El resultado es " + Promedio;
} 
function NotaMasAlta()
{
    let Mensaje = document.getElementById("MensajeFin");
    var Matematica = parseFloat(document.getElementById("Matematica").value);
    var Lengua = parseFloat(document.getElementById("Lengua").value);
    var EFSI = parseFloat(document.getElementById("EFSI").value);
    
    let caso = (Matematica === Lengua && Matematica === EFSI) ? "todas_iguales" :
               (Matematica > Lengua && Matematica > EFSI) ? "matematica" :
               (Lengua > Matematica && Lengua > EFSI) ? "lengua" :
               (EFSI > Matematica && EFSI > Lengua) ? "efsi" :
               (Matematica === Lengua && Matematica > EFSI) ? "matematica_lengua" :
               (Matematica === EFSI && Matematica > Lengua) ? "matematica_efsi" :
               (Lengua === EFSI && Lengua > Matematica) ? "lengua_efsi" :
               "ninguno"; 

    switch (caso)
    {
        case "todas_iguales":
            Mensaje.innerHTML = "Todas las notas son iguales";
            break;
        case "matematica":
            Mensaje.innerHTML = "La nota más alta es Matemática";
            break;
        case "lengua":
            Mensaje.innerHTML = "La nota más alta es Lengua";
            break;
        case "efsi":
            Mensaje.innerHTML = "La nota más alta es EFSI";
            break;
        case "matematica_lengua":
            Mensaje.innerHTML = "Las notas más altas son Matemática y Lengua";
            break;
        case "matematica_efsi":
            Mensaje.innerHTML = "Las notas más altas son Matemática y EFSI";
            break;
        case "lengua_efsi":
            Mensaje.innerHTML = "Las notas más altas son Lengua y EFSI";
            break;
        default:
            Mensaje.innerHTML = "Error en los datos ingresados";
    }
}
document.querySelector("form").addEventListener("submit", ValidarForm);