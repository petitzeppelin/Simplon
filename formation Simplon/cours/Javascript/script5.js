var btn = document.getElementById("btn");
btn.onclick = function(){
	para = document.getElementsByTagName("p");
	for (var i = 0; i < para.length; i++) {
		if (i%2 ==0) {
			para[i].style.color = "red";
		}
		else{
			para[i].style.color = "green";
		}
	}
}



