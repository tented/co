var effects = 1
	
	function stopEffects(){

		if (effects == 1){
			document.getElementById("rain").pause();
			snowStorm.stop();
			document.getElementById("social-weather-toggle").style.backgroundPosition="-104px"
			effects = 0;
		}
		else{
			document.getElementById("rain").play();
			snowStorm.resume();
			document.getElementById("social-weather-toggle").style.backgroundPosition="-78px"
			effects = 1;
		}
	}