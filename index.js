let imagenPrevia = document.getElementById('foto-usuario-previa');

//Crea el array de DATOS con propiedad y valor
let datos = {
    'Tipo de Id': 'Cédula física',
    'Número de Id': '123456789',
    'Nombre Completo': 'Miguel Ignacio Guzman Lopez',
    'Fecha de nacimiento': '17/09/1991',
    'Género': 'Femenino',
    'Teléfono': '12348765',
    'Correo electrónico': 'miguelestradam36@gmail.com',
    'Provincia': 'San José',
    'Cantón': 'San José',
    'Distrito': 'Moravia',
    'Dirección exacta': '300 norte Hospital San Juan de Dios'
};

// ------------------------------------------------------------------------------------------------------
// Changing Profile Data
//Setting placeholder value for id number
let idestado = document.getElementById("NumeroID");
idestado.placeholder = datos['Número de Id'];
idestado.value = datos['Número de Id'];

let tipodeid = document.getElementById("tipoID");
tipodeid.placeholder = datos['Tipo de Id'];
tipodeid.value = datos['Tipo de Id'];

let formname = document.getElementById("nombrecompleto");
formname.placeholder = datos['Nombre Completo'];
formname.value = datos['Nombre Completo'];

let fechanacimiento = document.getElementById("fechaNacimiento");
fechanacimiento.placeholder = datos['Fecha de nacimiento'];
fechanacimiento.value = datos['Fecha de nacimiento'];

let generoh = document.getElementById("GeneroH");
generoh.placeholder = datos['Género'];
generoh.value = datos['Género'];

let phonenumber = document.getElementById("telefono");
phonenumber.placeholder = datos['Teléfono'];
phonenumber.value = datos['Teléfono'];

let emailonf = document.getElementById("email");
emailonf.placeholder = datos['Correo electrónico'];
emailonf.value = datos['Correo electrónico'];

let provincia = document.getElementById("provincia");
provincia.placeholder = datos['Provincia'];
provincia.value = datos['Provincia'];

let canton = document.getElementById("canton");
canton.placeholder = datos['Cantón'];
canton.value = datos['Cantón'];

let distrito = document.getElementById("distrito");
distrito.placeholder = datos['Distrito'];
distrito.value = datos['Distrito'];

let direccion = document.getElementById("direccionExacta");
direccion.placeholder = datos['Dirección exacta'];
direccion.value = datos['Dirección exacta'];

function LoadInfo(datos){
    //Trae el elemento <tbody> por medio del ID tableBody
    let tableBody = document.getElementById('tableBody');
    tableBody.textContent = "";
    tableBody.innerHTML = "";
    //Recorre los elementos del array DATOS
    //y en cada iteración se muestra un elemento del array
    for (const propiedad in datos) {
        //Crea el elemento <tr>
        var tr = document.createElement('tr');
        //Crea el primer elemento <td> del <tr>
        var tdDato = document.createElement('td');
        //Crea el segundo elemento <td> del <tr>
        var tdInfo = document.createElement('td');

        //Agrega un hijo al <td> de datos con el
        //texto de cada propiedad del array DATOS
        tdDato.appendChild(document.createTextNode(propiedad));
        //Agrega un hijo al <td> de datos con el
        //texto de cada valor de la propiedad del array DATOS
        tdInfo.appendChild(document.createTextNode(datos[propiedad]));

        //Asigna el hijo <td> de datos al padre <tr>
        tr.appendChild(tdDato);
        //Asigna el hijo <td> de información al padre <tr>
        tr.appendChild(tdInfo);

        //Asigna el hijo <tr> al padre <tbody>
        tableBody.appendChild(tr);
    }
}

//Ejecuta una función al cargar la página Web en el navegador
window.onload = function () {
    //Set up the name that appears on the HTML
    let nombreenhtml = document.getElementById("fullnameonfile");
    nombreenhtml.textContent= datos['Nombre Completo']

    LoadInfo(datos);
};

// ------------------------------------------------------------------------------------------------------
// Image change section
//Trae la información del elemento <input> con la propiedad FILE
document.getElementById("archivo-previo").addEventListener('change', function (e) {

    // Creamos el objeto de la clase FileReader
    let reader = new FileReader();

    // Leemos el archivo subido y se lo pasamos a nuestro fileReader
    reader.readAsDataURL(e.target.files[0]);

    // Le decimos que cuando este listo ejecute el código interno
    reader.onload = function () {

        //document.createElement('img');
        imagenPrevia.style.maxWidth = "350px";
        imagenPrevia.className = "card-img-top m-3";

        imagenPrevia.src = reader.result;
    };
});
//Trae la información del elemento <input> con la propiedad FILE
document.getElementById('Guardar').addEventListener('click', function (e) {
    let imagenUsuario = document.getElementById('foto-usuario');

    imagenUsuario.src = imagenPrevia.src;

});
// Image change section End
// ------------------------------------------------------------------------------------------------------

//Trae la información del elemento <input> con la propiedad FILE
document.getElementById('GuardarPerfil').addEventListener('click', function (e) {
    datos['Dirección exacta'] = direccion.value;
    datos['Distrito'] = distrito.value;
    datos['Cantón'] = canton.value;
    datos['Provincia'] = provincia.value;
    datos['Correo electrónico'] = emailonf.value;
    datos['Teléfono'] = phonenumber.value;
    datos['Género'] = generoh.value;
    datos['Fecha de nacimiento'] = fechanacimiento.value;
    datos['Nombre Completo'] = formname.value;
    datos['Tipo de Id'] = tipodeid.value;
    datos['Número de Id'] = idestado.value;
    LoadInfo(datos);
});
// ------------------------------------------------------------------------------------------------------
// Changing Profile Data End