(()=> {
	//hook up the JS file
	console.log("fired");

	function playDrumSound(e) {
		//e in sound brackets is the event object ->
		//gets generated with every event and passes some data through
		//debugger;

		// try selecting the mathcing audio element
		let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);


		//the return keyword stops JS from running (any code below it)
		if (!audio)
		{
			return;
		}
		audio.currentTime = 0;
		audio.play();

	}

	window.addEventListener('keydown', playDrumSound);
})();

