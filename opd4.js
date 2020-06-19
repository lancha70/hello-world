var boton = document.getElementById("boton");//Obtienes acceso al botón.
var res = document.getElementById("res");
var res2 = document.getElementById("res2");
var res3 = document.getElementById("res3");
var res4 = document.getElementById("res4");
var nombre = document.getElementById("nombre");
var habitacion = document.getElementById("habitacion");
var sexo = document.getElementById("sexo");
var fecha = document.getElementById("fecha de nacimiento");
var numero = document.getElementById("numero");//Obtines acceso a la caja donde el usuario va a poner su numero
boton.addEventListener("click", guardarPaciente)//Cuando le de click al botón se va a ejecutar la funcion "guardarNombreDelUsuario"

function guardarPaciente()
{
  class Pacientes{
    constructor(n, h, s, f, nf)
    {
      this.nombre = n;
      this.habitacion = h;
      this.fn = f;
      this.sexo = s;
      this.nm = nf;
    }
    mostrar(){
      res.innerHTML = "Nombre: " + this.nombre + "<br />";
      res2.innerHTML = "Fecha de Nacimiento: " + this.fn + "<br />";
      res3.innerHTML = "Sexo: " + this.sexo + "<br />";
      res4.innerHTML = "Numero Telefonico: " + this.nm;
    }
  }
  var colection = [];
  export var pas1 = colection.push(new Pacientes(nombre.value, habitacion.value, sexo.value, fecha.value, numero.value));// se rellena el pacientes
  for(var msm of nuevo)
  {
    msm.mostrar();// imprime el nuevo paciente
  }
  console.log(pas1); //Verifica en consola el resultado :)

}
