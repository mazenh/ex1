  // var x = prompt("inter a number");
  // var y = prompt("inter another nomber");
  
var biggistNum=function(){
	var x = document.getElementById("myNumber").value;
    var y = document.getElementById("myNumber1").value;	
    var intx=parseInt(x);
    var inty=parseInt(y);
	if(intx > inty){
		document.write(x);
	}
	else if(intx < inty){
		document.write(y);
	}
	else{
		document.write("x is equal to y");
	}
};
  

