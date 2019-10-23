function output(text){
	document.getElementById("output").innerHTML = text;
}

function numberThing(number, list){
    var num = document.getElementById("number").value;
    var numList = document.getElementById("numberList").value.split(",").map(Number);
    numList = numList.sort(function(a, b){
        return Math.abs(num - a) - Math.abs(num-b)
    });
    console.log(numList);
    output(numList);
}
