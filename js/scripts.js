var cssArray = ["red", "blue", "green", "purple"]
		var marginleftArray = ["500px", "200px", "300px", "100px"]
		var margintopArray = ["500px", "200px", "300px", "100px"]
		i=0

		var clickedTime; var createdTime; var reactionTime;


	function display() {
	var howlong = Math.random();
	howlong = howlong * 5000;
	setTimeout(function() {
		document.getElementById("box").style.display="block";
		document.getElementById("box").style.backgroundColor= cssArray[i];
		document.getElementById("box").style.marginTop= margintopArray[i];
		document.getElementById("box").style.marginLeft= marginleftArray[i];
		i++;
		if (i > 2) {
			i = 0;
		}
		createdTime=Date.now();
	}, howlong);	
}

	document.getElementById("box").onclick=function(){
		clickedTime = Date.now();
		reactionTime = (clickedTime - createdTime)/1000
		document.getElementById("time").innerHTML=reactionTime;
		this.style.display="none";
		display();
	}

display();