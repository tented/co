//SIDE CAT

//Array containing all the side cats

var theSideImages = new Array()
theSideImages[0] = '<img src="static/norms-list-cat.png" alt"" title="">'
theSideImages[1] = '<img src="static/aoc-cat.png" alt"" title="American Outdoor Caming, indoor camping is over-rated">'
theSideImages[1] = '<img src="static/jacket-aficionado-cat.png" alt"" title="Because the word \'Afficianado\' has not been overused.">'

//Black magic as far as I am concerned
var j = 0
var p = theSideImages.length;
var preBuffer = new Array()
for (i = 0; i < p; i++){
   preBuffer[i] = new Image()
   preBuffer[i].src = theSideImages[i]
}
var whichSideImage = Math.round(Math.random()*(p-1));

function showSideCat(){
document.write(theSideImages[whichSideImage]);
}

//HEADER CAT

//Array containing all the header cats

var theHeaderImages = new Array()
theHeaderImages[0] = '<img src="static/trekitory-cat.png" alt"" title="">'
theHeaderImages[1] = '<img src="static/campatory-cat.png" alt"" title="">'
theHeaderImages[2] = '<img src="static/aoc-tents-cat.png" alt"" title="">'
theHeaderImages[3] = '<img src="static/campnation-cat.png" alt"" title="">'

//More black magic
var j = 0
var p = theHeaderImages.length;
var preBuffer = new Array()
for (i = 0; i < p; i++){
   preBuffer[i] = new Image()
   preBuffer[i].src = theHeaderImages[i]
}
var whichHeaderImage = Math.round(Math.random()*(p-1));

function showHeaderCat(){
document.write(theHeaderImages[whichHeaderImage]);
}