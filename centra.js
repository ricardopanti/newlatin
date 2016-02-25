window.onload = function(){
	var link = "http://localhost:3000";
	var iframe = document.createElement('iframe');
	iframe.frameBorder=0;
	iframe.width="100%";
	iframe.height="700px";
	iframe.id="centraltramites";
	iframe.setAttribute("src", link);
	var container = document.getElementById("centraltramites");
	if(container !== ""){
		container.appendChild(iframe)
	}else{
		console.log("No existe el contenedor, crear un div con el siguiente id")
	}
}