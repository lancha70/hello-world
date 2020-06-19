import { colection, Pacientes, pas1} from "./pas.js"//se importan los pacientes y la clase
var resultado = document.getElementById("resultado");//se obtiene los elementos
var res1 = document.getElementById("res1");//se obtiene los elementos
var res2 = document.getElementById("res2");//se obtiene los elementos
var res3 = document.getElementById("res3");//se obtiene los elementos
var res4 = document.getElementById("res4");//se obtiene los elementos


var nombre = prompt("cuales es el nombre que quieres buscar? (tener en cuanta las mayusculas)" );//se hace una pregunta y se giarda el resultado
var entrada = nombre;
var rest = colection.filter(item=>{//se hace una busqueda
return item.nombre === entrada;
})
console.log(rest)
if(rest.length >= 1)//se compara si hay o no un paciente con esas caracteristicas
{
  for(var imprimir of rest)// ciclo para imprimir
  {
    imprimir.mostrar();//se imprimi
  }
}
if(rest.length <= 0)//se compara si hay o no un paciente con esas caracteristicas
{
  resultado.innerHTML = "Ese paciente que estas buscando no se encuentra en este hospital :("// resultado si no hay pacientes con esas caracteristicas
}
