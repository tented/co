var logoTopImage = ["url(static/top-logo/logo-top-1.png)", "url(static/top-logo/logo-top-2.png)", "url(static/top-logo/logo-top-3.png)", "url(static/top-logo/logo-top-4.png)"]
    
var currentTopImage = 0;
	
function changeTopImage() {
	var col = document.getElementById("logo-top");
		
	currentTopImage += 1;
		
	if(currentTopImage >= logoTopImage.length) {
       currentTopImage = 0;
	}
		
	setTimeout(function() {
		col.style.height="0px";
	}, 500);
	setTimeout(function() {
		col.style.backgroundImage= logoTopImage[currentTopImage];
	}, 1000);
	setTimeout(function() {
		col.style.height="70px";
	}, 1500);	}