var packages = ["the%20base%20package.", "the%20standard%20package.", "the%20professional%20package.", "the%20premium%20package.", "the%20hole%20preview%20package."];

function golf(n) {
	clearAll();
	
	var golfs = document.getElementsByClassName("golf");
	var t1="mailto:perspectiveaerialmedia@gmail.com?subject=Golf%20Course%Aerial%20Media%20Inquiry&body=Hi,%0AI%20am%20interested%20in%20";
	var t2="Here%20is%20my%20following%20information:%0A%0AName:%0A%0AFilming%20Location:%0A%0ARequired%20Completion%20Date:%0A%0AAdditional%20Comments/Questions:%0A%0A%0A***Thank%20you%20for%20your%20time.%20We%20will%20be%20in%20touch%20shortly%20with%20a%20quote%20and%20expected%20time%20Frame***";
	t1+=packages[n];
	document.getElementById("golfbutton").setAttribute("href", t1+t2);
	golfs[n].className += " w3-teal w3-hover-teal";
}

function estate(n) {
	clearAll();
	
	var estates = document.getElementsByClassName("estate");
	var t1="mailto:perspectiveaerialmedia@gmail.com?subject=Real%20Estate%Aerial%20Media%20Inquiry&body=Hi,%0AI%20am%20interested%20in%20";
	t1+=packages[n];
	document.getElementById("estatebutton").setAttribute("href", t1);
	
	estates[n].className += " w3-teal w3-hover-teal";
}

function specialevent(n) {
	clearAll();
	
	var events = document.getElementsByClassName("event");
	var t1="mailto:perspectiveaerialmedia@gmail.com?subject=Special%20Event%Aerial%20Media%20Inquiry&body=Hi,%0AI%20am%20interested%20in%20";
	t1+=packages[n];
	document.getElementById("eventbutton").setAttribute("href", t1);
	
	events[n].className += " w3-teal w3-hover-teal";
}

function other(n) {
	clearAll();
	var others = document.getElementsByClassName("other");
	var t1="mailto:perspectiveaerialmedia@gmail.com?subject=Other%Aerial%20Media%20Inquiry&body=Hi,%0AI%20am%20interested%20in%20";
	t1+=packages[n];
	document.getElementById("otherbutton").setAttribute("href", t1);
	
	others[n].className += " w3-teal w3-hover-teal";
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
		golfs[i].className = golfs[i].className.replace(" w3-hover-teal", "");
		
		estates[i].className = estates[i].className.replace(" w3-teal", "");
		estates[i].className = estates[i].className.replace(" w3-hover-teal", "");
		
		events[i].className = events[i].className.replace(" w3-teal", "");
		events[i].className = events[i].className.replace(" w3-hover-teal", "");
		
		others[i].className = others[i].className.replace(" w3-teal", "");
		others[i].className = others[i].className.replace(" w3-hover-teal", "");
	}
	golfs[4].className = golfs[4].className.replace(" w3-teal", "");
	
}
