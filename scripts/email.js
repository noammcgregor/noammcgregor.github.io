var packages = ["the%20base%20package.", "the%20standard%20package.", "the%20professional%20package.", "the%20premium%20package.", "the%20hole%20preview%20package."];

function golf(n) {
	//clearAll();
	
	var golfs = document.getElementsByClassName("golf");
	var t1="mailto:perspectiveaerialmedia@gmail.com?subject=Golf%20Course%Aerial%20Media%20Inquiry&body=Hi,%0AI%20am%20interested%20in%20";
	t1+=packages[n];
	document.getElementById("golfbutton").setAttribute("href", t1);
	
	golfs[n].className += " w3-teal";
}

function estate(n) {
	//clearAll();
	
	var estates = document.getElementsByClassName("estate");
	var t1="mailto:perspectiveaerialmedia@gmail.com?subject=Golf%20Course%Aerial%20Media%20Inquiry&body=Hi,%0AI%20am%20interested%20in%20";
	t1+=packages[n];
	document.getElementById("estatebutton").setAttribute("href", t1);
	
	estates[n].className += " w3-teal";
}

function specialevent(n) {
	//clearAll();
	
	var events = document.getElementsByClassName("event");
	var t1="mailto:perspectiveaerialmedia@gmail.com?subject=Golf%20Course%Aerial%20Media%20Inquiry&body=Hi,%0AI%20am%20interested%20in%20";
	t1+=packages[n];
	document.getElementById("eventbutton").setAttribute("href", t1);
	
	events[n].className += " w3-teal";
}

function other(n) {
	//clearAll();
	var others = document.getElementsByClassName("other");
	var t1="mailto:perspectiveaerialmedia@gmail.com?subject=Other%Aerial%20Media%20Inquiry&body=Hi,%0AI%20am%20interested%20in%20";
	t1+=packages[n];
	document.getElementById("otherbutton").setAttribute("href", t1);
	
	others[n].className += " w3-teal";
}

function clearAll(){
	var golfs = document.getElementsByClassName("golf");
	var estates = document.getElementsByClassName("estate");
	var events = document.getElementsByClassName("event");
	var others = document.getElementsByClassName("other");
	var buttons = document.getElementsByClassName("mailbutton");
	
	for (i = 0; i < buttons.length; i++) {
		buttons[i].href = "mailto:perspectiveaerialmedia@gmail.com";
	}
	
	for (i = 0; i < estates.length; i++) {
		golfs[i].className = golfs[i].className.replace(" w3-teal", "");
		estates[i].className = estates[i].className.replace(" w3-teal", "");
		events[i].className = events[i].className.replace(" w3-teal", "");
		others[i].className = others[i].className.replace(" w3-teal", "");
	}
	golfs[4].className = golfs[4].className.replace(" w3-teal", "");
	
}
