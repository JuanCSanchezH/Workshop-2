const formulario = document.
querySelector("form")
let boton = document.getElementById ("submit")
let suscriptores = []

const capturarDatos = (event) => {

    const nombre = document.
    getElementById("Firstname").value
    const apellido = document.
    querySelector("#Lastname").value
    const email = document.
    getElementById("Emailaddress").value
    const password = document.
    getElementById("Password").value  
    
    let registro = {nombre,apellido,email,password}
    suscriptores.unshift(registro)
    localStorage.setItem (
    "suscriptores", JSON.stringify(suscriptores))
    event.preventDefault();
    MostrarTabla();
    
}

const MostrarTabla = () => {
    const AlmacenamientoLocal= localStorage.getItem("suscriptores");
    let Datos = JSON.parse(AlmacenamientoLocal);
    const Suscriptores = document.getElementById("Suscriptores");
    Suscriptores.innerHTML = "";

    Datos.forEach(i => {
    Suscriptores.innerHTML += 
    `<tr>
        <td>${i.nombre}</td>
        <td>${i.apellido}</td>
        <td>${i.email}</td>
        <td>${i.password}</td>
    </tr>`
    });
}

MostrarTabla();


//Hacer el evento