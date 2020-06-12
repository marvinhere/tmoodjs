/*
tmoodjs
A text based mood detection.
Developed by:
Joaquín de la Cruz Hernández - Designer
José Alejandro García Herrera - A. Neuronal trainer and tester
Marvin Josué Quiñónez Xitumul - Model designer and programmer
*/
var mood = function(){
	
	function init(){
		var script = document.createElement('script');
		script.src = 'https://unpkg.com/brain.js@2.0.0-alpha.12/dist/brain-browser.min.js';
		script.onload = function () {
			console.log('ready to use');
		};
		document.head.appendChild(script);
	}
	
	function loadTrainingData(language){
		switch(language){
			case 'es':
				getTDataEs();
			break;
			default:
				console.log('This training data does not exist.');
		}
	}
	
	function guessMood(value){
		let response = false;
		if(typeof brain !== 'undefined'){
			response = true;
			const net = new brain.recurrent.LSTM();
			if(typeof data !=='undefined'){
				var json = JSON.parse(data);
				net.fromJSON(json);
				const output = net.run(value);
				response = output;
			}else{
				console.log('You need to load training data. Use getTDataEs(language)');
			}
			
		}else{
			console.log("You haven't initialized tmoodjs. Use init()");
		}
		return response;
	}

	return {
		init: init,
		loadTrainingData: loadTrainingData,
		guessMood: guessMood
	}

}

function getTDataEs(){
	var scriptTraining = document.createElement('script');
	scriptTraining.src = 'training.json';
	scriptTraining.onload = function () {
		//console.log('ES Ready to use');
	};
	document.head.appendChild(scriptTraining);
}




