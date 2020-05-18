var cnc1=document.getElementById("cnc1");
cnc1.addEventListener("click",alertMe);
var cnc2=document.getElementById("cnc2");
cnc2.addEventListener("click",cnc2Click);
var plc=document.getElementById("plc");
plc.addEventListener("click",plcClick);

var cnc1Clicks=0;
var cnc2Clicks=1;
var plcClick=2;

function alertMe(){
	cnc1Clicks++;
	if(cnc1Clicks>2){
		cnc1Clicks=0;
	}
	if(cnc1Clicks==1){
	cnc1.innerHTML="Machine Idle"
	cnc1.style.backgroundColor="yellow";
	}
	else if(cnc1Clicks==2){
		cnc1.innerHTML="Not Running";
		cnc1.style.backgroundColor="red";
	}
	else{
		cnc1.innerHTML="Running";
		cnc1.style.backgroundColor="lime";
	}
}
function cnc2Click(){
	cnc2Clicks++;
	if(cnc2Clicks>2){
		cnc2Clicks=0;
	}
	if(cnc2Clicks==1){
	cnc2.innerHTML="Machine Idle"
	cnc2.style.backgroundColor="yellow";
	}
	else if(cnc2Clicks==2){
		cnc2.innerHTML="Not Running";
		cnc2.style.backgroundColor="red";
	}
	else{
		cnc2.innerHTML="Running";
		cnc2.style.backgroundColor="lime";
	}
}
function plcClick(){
	plcClick++;
	if(plcClick>2){
		plcClick=0;
	}
	if(plcClick==1){
	plc.innerHTML="Machine Idle"
	plc.style.backgroundColor="yellow";
	}
	else if(plcClick==2){
		plc.innerHTML="Not Running";
		plc.style.backgroundColor="red";
	}
	else{
		plc.innerHTML="Running";
		plc.style.backgroundColor="lime";
	}
}