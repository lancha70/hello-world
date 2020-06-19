var resultado = document.getElementById("resultado");
var boton = document.getElementById("boton")//Obtienes acceso al botón.
var input = document.getElementById("inputDelUsuario")
var nombre = document.getElementById("nombre")//Obtines acceso a la caja donde el usuario va a poner la habvitacion
boton.addEventListener("click", guardarNombreDelUsuario)//Cuando le de click al botón se va a ejecutar la funcion "guardarNombreDelUsuario"
function back(){
  history.back();
}
function guardarNombreDelUsuario()
{
  class Habitacion
  {
    constructor(n, h)
    {
      this.habitacion = h;//Creamos la clase  y en el construcor ponemos los datos que va a tener el usuario
      this.nombre = n;
    }
}
var usuario1 = new Habitacion(nombre.value, input.value);//Instanciamos la clase (Creamos a un nuevo usuario) y le pasamos por nombre el valor del input
resultado.innerHTML = "se a asignado la habitacion " + input.value + " al paciente " + nombre.value;
console.log(usuario1)//Verifica en consola el resultado :)
}
