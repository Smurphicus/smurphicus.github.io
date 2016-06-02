function output(text){
	document.getElementById("output").innerHTML = text;
}

function resetOutput(){
	output("( ͡° ͜ʖ ͡°)");
};

function ayyLmao(){ 
	output("Ayy Lmao.");
	setTimeout(resetOutput,3000);
};

