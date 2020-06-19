import { pas1 } from "./opd4.js";
export class Pacientes{// se exporta la clase creada
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
    res4.innerHTML = "Numero Telefonico: " + this.nm;
  }
}
export var colection = [];// se exporta los pacientes
var e = colection.push(new Pacientes("Eduardo", "6/17/1997", "masculino", "319127988","1107999888"));
var i = colection.push(new Pacientes("Juan", "5/17/1997", "masculino", "3173181253", "1107838977"));
var a = colection.push(new Pacientes("Andres", "5/22/1978", "masculino", "320465876", "94451291"));
pas1;
