import { colection } from "./pas.js";// se inmporta el array colection que son los pacientes
var resultado = document.getElementById("resultado");// se obtiene el elemnto por su id
var res1 = document.getElementById("res1");// se obtiene el elemnto por su id
var res2 = document.getElementById("res2");// se obtiene el elemnto por su id
var res3 = document.getElementById("res3");// se obtiene el elemnto por su id
var res4 = document.getElementById("res4");// se obtiene el elemnto por su id
var res5 = document.getElementById("res5");// se obtiene el elemnto por su id
var res6 = document.getElementById("res6");// se obtiene el elemnto por su id
var res7 = document.getElementById("res7");// se obtiene el elemnto por su id
var res8 = document.getElementById("res8");// se obtiene el elemnto por su id
var res9 = document.getElementById("res9");// se obtiene el elemnto por su id
var res10 = document.getElementById("res10");// se obtiene el elemnto por su id
var res11 = document.getElementById("res11");// se obtiene el elemnto por su id
var res12 = document.getElementById("res12");// se obtiene el elemnto por su id

class Pacientes{
  constructor(n, fn, s, nm, h)
  {
    this.nombre = n;
    this.fn = fn;
    this.sexo = s;
    this.nm = nm;
    this.habitacion = h;
  }
  mostrar()
  {
    res1.innerHTML = "Nombre: " + this.nombre + "<br />";
    res2.innerHTML = "Fecha de Nacimiento: " + this.fn + "<br />";
    res3.innerHTML = "Sexo: " + this.sexo + "<br />";
    res4.innerHTML = "Numero Telefonico: " + this.nm;
  }
  mostrar2()
  {
    res5.innerHTML = "Nombre: " + this.nombre + "<br />";
    res6.innerHTML = "Fecha de Nacimiento: " + this.fn + "<br />";
    res7.innerHTML = "Sexo: " + this.sexo + "<br />";
    res8.innerHTML = "Numero Telefonico: " + this.nm;
  }
  mostrar3()
  {
    res9.innerHTML = "Nombre: " + this.nombre + "<br />";
    res10.innerHTML = "Fecha de Nacimiento: " + this.fn + "<br />";
    res11.innerHTML = "Sexo: " + this.sexo + "<br />";
    res12.innerHTML = "Numero Telefonico: " + this.nm;
  }
}
var sexo = prompt("de que sexo quiere ue se haga la busqueda?")
var resul = sexo;
var rest = colection.filter(item=>{// se hace la bsqueda del sexo en los pacientes
return item.sexo === resul;
})
console.log(rest)
if(rest.length >= 1)// se compara si hay o no pacientes con esas caracteristicas
{
  for(var msm of rest)// ciclo de imprecion
  {
    msm.mostrar();// se imprime
  }
}
if(rest.length <= 0)//comparacion
{
  resultado.innerHTML = "no hay ningun paciente con ese sexo en este hospital";// imprime si hay o no pacientes con esas caracteristicas
}
