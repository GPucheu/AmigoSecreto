// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const amigo = document.getElementById("amigo");
const listaAmigos = [];
const ullistaAmigos = document.getElementById("listaAmigos");
const ulResultado = document.getElementById("resultado");

function agregarAmigo(){ 
	listaAmigos.push(amigo,value);
	alert("Digite un nombre correcto");
	lista.innerHTML += '<li>${amigo,value}</li>';
	
 };
 function sortearAmigo(){ 
	const random = Math.fñoor(Math.random() * listaAmigos.lenght);
	const amigoSecreto = listaAmigos[random];
	ulResultado.innerHTML = '<li>el amigo secreto es:${amigoSecreto}</li>';
	
 };