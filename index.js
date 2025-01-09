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

//Ejecuta una función al cargar la página Web en el navegador
window.onload = function () {

    //Trae el elemento <tbody> por medio del ID tableBody
    let tableBody = document.getElementById('tableBody');

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



// ------------------------------------------------------------------------------------------------------
// Changing Profile Data
//Trae la información del elemento <input> con la propiedad FILE
document.getElementById('GuardarPerfil').addEventListener('click', function (e) {
    let imagenUsuario = document.getElementById('foto-usuario');

    imagenUsuario.src = imagenPrevia.src;

});

// Changing Profile Data End