var ced = document.getElementById("cedula");// se obtiene el elemento
var boton = document.getElementById("boton");// se obtiene el elemento
var resultado = document.getElementById("resultado")// se obtiene el elemento
var res1 = document.getElementById("res1");// se obtiene el elemento
var res2 = document.getElementById("res2");// se obtiene el elemento
var res3 = document.getElementById("res3");// se obtiene el elemento
var res4 = document.getElementById("res4");// se obtiene el elemento
var res5 = document.getElementById("res5");// se obtiene el elemento
boton.addEventListener("click", funciona);// al hacer click en el boton se activa la funcion
class Pacientes{
  constructor(n, fn, s, nm, c)
  {
    this.nombre = n;
    this.fn = fn;
    this.sexo = s;
    this.nm = nm;
    this.cedula = c;
  }
  mostrar()
  {
    res1.innerHTML = "Nombre: " + this.nombre + "<br />";
    res2.innerHTML = "Fecha de Nacimiento: " + this.fn + "<br />";
    res3.innerHTML = "Sexo: " + this.sexo + "<br />";
    res4.innerHTML = "Numero Telefonico: " + this.nm + "<br />";
    res5.innerHEML = "Cedula del Paciente: " + this.cedula;
  }
}
var colection = [];
var e = colection.push(new Pacientes("Eduardo", "6/17/1997", "masculino", "319127988", "1107999888"));
var i = colection.push(new Pacientes("Juan", "5/17/1997", "masculino", "3173181253", "1107838977"));
var a = colection.push(new Pacientes("Andres", "5/22/1978", "masculino", "320465876", "1107555666"));
var cedula = document.getElementById("cedula");// se obtiene el elemento
var cedulas = ["1107838977", "1107999888", "1105868454", "1107777666", "1103646555"]// el arrat de las cedulas

console.log(cedulas.sort(function(a, b){//el ordenamiento sort
  if (a > b) {
    return 1;
  }
  if (a < b) {
    return -1;
  }
  return 0;
}))

function funciona()//
{
  function binarySearch(array, item){// la bsuqueda binaria
  var low = 0;
  var high = array.length - 1;

    while(low <= high) {
      var middle = Math.floor((low + high)/2);
      var guess = array[middle];
      if(guess == item){
        return middle;
      }
      if(guess > item){
        high = middle - 1;
      } else {
        low = middle + 1;
      }
    }
    return -1;
  }
  console.log(binarySearch(cedulas, ced.value));
  var rest = colection.filter(item=>{
  return item.cedula === ced.value;
  })
  console.log(rest)
  if(rest.legth = 1)
  {
    for(var msm of rest)
    {
      msm.mostrar();// se imprime
    }

  }
  if(rest.length <= 0)
  {
    resultado.innerHTML = "ese paciente no se ecuentra en este hospital";// se imprime
  }
}
