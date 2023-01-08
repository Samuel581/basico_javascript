// Description: Ejemplo de condicionales

//if
if (edad >= 18) {
    console.log("Puedes conducir")
}

//if else
if (edad >= 18) {
    console.log("Puedes conducir")
} else {
    console.log("No puedes conducir")
}

// if anidados
if (edad >= 18) {
    console.log("Puedes conducir")
}
else if (edad >= 16) {
    console.log("Puedes conducir con un adulto")
}
else {
    console.log("No puedes conducir")
}

// Operador ternario
let resultado = edad >= 18 ? "Puedes conducir" : "No puedes conducir"

