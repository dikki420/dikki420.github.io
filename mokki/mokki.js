(function startUp(){
	//alert('kys');
})()

//käännökset
var health_text	= "Elämä:";
var healthcount = "100";

var thirst_text	= "Jano:";
var thirstcount = "50";

var hunger_text	= "Nälkä:";
var hungercount = "50";

var alco_text	= "Humalatila:";
var alcocount	= "0";

var energy_text	= "Energia:";
var energycount = "100";

var shit_text	= "Paskahätä:";
var shitcount	= "0";

var urine_text	= "Kusihätä:";
var urinecount	= "0";

var fish_text	= "Kalat:";
var fishcount	= "0"

var beer_text	= "Kaljat:";
var beercount	= "24"



function changeBackground(background)
{
	document.getElementById('background').src=background;
}

function startgame()
{
	changeBackground("kuvat/mokki.jpg");
	
	document.getElementById('start-options').style="display:none;";
	document.getElementById('game-options').style="display:block;";
	document.getElementById('console').placeholder="Tervetuloa mökille!";
	
	updateStats()
}
function leavegame()
{
	changeBackground("kuvat/start.jpg");
	
	document.getElementById('start-options').style="display:block;";
	document.getElementById('game-options').style="display:none;";
	document.getElementById('console').placeholder="";
}

function updateStats()
{
	document.getElementById('game-stats').style="display:block;";
	
	
	document.getElementById('health').innerHTML=health_text + healthcount;
	document.getElementById('health_bar').style=style="height:100%;width:" + healthcount + "%;background-color:rgba(255,000,000,0.5)";
	
	document.getElementById('thirst').innerHTML=thirst_text + thirstcount;
	document.getElementById('thirst_bar').style=style="height:100%;width:" + thirstcount + "%;background-color:rgba(000,000,255,0.5)";
	
	document.getElementById('hunger').innerHTML=hunger_text + hungercount;
	document.getElementById('hunger_bar').style=style="height:100%;width:" + hungercount + "%;background-color:rgba(000,255,000,0.5)";
	
	document.getElementById('alco').innerHTML=alco_text + alcocount;
	document.getElementById('alco_bar').style=style="height:100%;width:" + alcocount + "%;background-color:rgba(255,255,000,0.5)";
	
	document.getElementById('energy').innerHTML=energy_text + energycount;
	document.getElementById('energy_bar').style=style="height:100%;width:" + energycount + "%;background-color:rgba(255,255,000,0.5)";
	
	document.getElementById('shit').innerHTML=shit_text + shitcount;
	document.getElementById('shit_bar').style=style="height:100%;width:" + shitcount + "%;background-color:rgba(120,80,70,0.5)";
	
	document.getElementById('urine').innerHTML=urine_text + urinecount;
	document.getElementById('urine_bar').style=style="height:100%;width:" + urinecount + "%;background-color:rgba(000,255,000,0.5)";
	
	if(healthcount<1)
	{
		healthcount=0;
	}
	if(healthcount>100)
	{
		healthcount=100;
	}
	

	
	if(urinecount==100)
	{
		document.getElementById('angry-options').style="display:block;";
	}
}

function updateInventory()
{
	document.getElementById('fish').innerHTML=fish_text + fishcount;
	document.getElementById('beer').innerHTML=beer_text + beercount;
}



function eat()
{
	if(fishcount>0) {
		changeBackground("kuvat/nuotio.jpg");
		healthcount=parseInt(healthcount)+20;
		hungercount=parseInt(hungercount)-50;
		alcocount=parseInt(alcocount)-10;
		shitcount=parseInt(shitcount)+10;
		fishcount=parseInt(fishcount)-1;
		updateInventory();
		updateStats();
	} else {
		document.getElementById('console').placeholder="Ei tarpeeksi kalaa!";
	}
}

function drink()
{
	if(beercount>0) {
		changeBackground("kuvat/kalja.jpg");
		alcocount=parseInt(alcocount)+10;
		thirstcount=parseInt(thirstcount)-25;
		urinecount=parseInt(urinecount)+10;
		beercount=parseInt(beercount)-1;
		updateInventory();
		updateStats();
	} else {
		document.getElementById('console').placeholder="Ei tarpeeksi kalaa!";
	}
}

function fishing()
{
	if(energycount>20) {
		changeBackground("kuvat/laituri.jpg");
		energycount=parseInt(energycount)-20;
		hungercount=parseInt(hungercount)+5;
		fishcount=parseInt(fishcount)+1;
		
		updateInventory();
		updateStats();
	} else {
		document.getElementById('console').placeholder="Ei tarpeeksi energiaa!";
	}
}

function urinate()
{
	changeBackground("kuvat/kusella.jpg");
	urinecount=0;
	thirstcount=parseInt(thirstcount)+5;
	
	updateInventory();
	updateStats();
}
function shit()
{
	changeBackground("kuvat/huussi.jpg");
	shitcount=0;
	hungercount=parseInt(hungercount)+15;
	
	updateInventory();
	updateStats();
}

function kill()
{
	changeBackground("kuvat/kytät.jpg");
	
	document.getElementById('console').placeholder="Hävisit pelin!";
	
	updateInventory();
	updateStats();
}

function sleep()
{
	changeBackground("kuvat/sänky.jpg");
	energycount=100;
	hungercount=parseInt(hungercount)+15;
	thirstcount=parseInt(thirstcount)+25;
	
	updateInventory();
	updateStats();
}

//beepsi? bopsi?