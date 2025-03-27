function validarNota(id, mensajeId) {
    let mensaje = document.getElementById(mensajeId);
    let valor = document.getElementById(id).value.trim();
    let numero = parseFloat(valor);
    
    if (!valor || isNaN(numero) || numero < 1 || numero > 10) {
        mensaje.innerHTML = "La nota debe ser un número entre 1 y 10";
        return false;
    }
    
    mensaje.innerHTML = "";
    return true;
}

function validarEntradas() {
    return validarNota("Matematica", "MensajeA") &&
           validarNota("Lengua", "MensajeB") &&
           validarNota("EFSI", "MensajeC");
}

function ValidarCalculo() {
    if (!validarEntradas()) {
        alert("Por favor, ingrese solo números entre 1 y 10 en todos los campos.");
        return;
    }
    CalcularPromedio();
}

function ValidarMayorNota() {
    if (!validarEntradas()) {
        alert("Por favor, ingrese solo números entre 1 y 10 en todos los campos.");
        return;
    }
    NotaMasAlta();
}

function CalcularPromedio() {
    let mensaje = document.getElementById("Resultado");
    let matematica = parseFloat(document.getElementById("Matematica").value);
    let lengua = parseFloat(document.getElementById("Lengua").value);
    let efsi = parseFloat(document.getElementById("EFSI").value);
    let promedio = (matematica + lengua + efsi) / 3;
    mensaje.innerHTML = "El resultado es " + promedio.toFixed(2);
}

function NotaMasAlta() {
    let mensaje = document.getElementById("MensajeFin");
    let matematica = parseFloat(document.getElementById("Matematica").value);
    let lengua = parseFloat(document.getElementById("Lengua").value);
    let efsi = parseFloat(document.getElementById("EFSI").value);
    
    let maxNota = Math.max(matematica, lengua, efsi);
    let materias = [];
    
    if (matematica === maxNota) materias.push("Matemática");
    if (lengua === maxNota) materias.push("Lengua");
    if (efsi === maxNota) materias.push("EFSI");
    
    mensaje.innerHTML = "La(s) nota(s) más alta(s) es(son): " + materias.join(" y ");
}
