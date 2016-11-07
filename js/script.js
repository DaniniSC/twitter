function agregarTarea(){
	var textareaTarea = document.getElementsByTagName("textarea")[0].value;
	var divTareasAgregadas = document.getElementById("tareasAgregadas");
	var nodoTextarea = document.createTextNode(textareaTarea);
	var nuevoDiv = document.createElement("div");
	var nuevoInput = document.createElement("input");
	divTareasAgregadas.appendChild(nuevoDiv);
	nuevoDiv.appendChild(nuevoInput);
	nuevoInput.appendChild(nodoTextarea);
	nuevoInput.setAttribute("type", "checkbox");
}