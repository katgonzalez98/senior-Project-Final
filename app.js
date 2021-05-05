document.addEventListener('DOMContentLoaded', () => {
	
	const startBtn = document.querySelector('#start-button');

	function orderUp(){
	
		
		var messageText = document.getElementById("message")

			if(messageText != null){
				messageText.parentNode.removeChild(messageText);
			   }

		var fortunes = ['Guasacaca', 'Cheese'  , 'Carne Mechada','Perico','Jamon Serrano','Nata',
	['Guasacaca', 'Cheese'],['Guasacaca','Carne Mechada'], ['Guasacaca','Perico'], ['Guasacaca','Nata'],['Nata','Carne Mechada','Cheese'],
	['Cheese', 'Nata'], ['Perico', 'Cheese'], ['Jamon Serrano', 'Cheese', 'Nata'],['Jamon Serrano', 'Cheese'],
	['Carne Mechada', 'Cheese']
	
	]

    var fortune = fortunes[Math.floor(Math.random()*fortunes.length)];


    var parent = document.getElementById("fortune");
    var newMessage = document.createElement("div");


    newMessage.setAttribute('id', "message");
    newMessage.innerHTML = "\""+fortune+"\"";
    parent.appendChild(newMessage);

	
	}

	startBtn.addEventListener('click', orderUp);


});

document.addEventListener('DOMContentLoaded', () => {
	
	const Btn = document.querySelector('#btn');

	var p = document.getElementById("p"); 
	var total = 0;
var ingredients= document.getElementById("nata","guasacaca","jamon","perico","carne","cheese");
if(fortune== ingredients){};

function addPoint() {
    total++;
    p.innerHTML = total;
	localStorage.setItem("storageName",total);
		
  $("div.elementToFadeInAndOut").fadeIn(1000);
  $("div.elementToFadeInAndOut").fadeOut(1000);
		
		
};

Btn.addEventListener('click', addPoint);


});










