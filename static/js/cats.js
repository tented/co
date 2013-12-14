//SIDE CAT

//Array containing all the side cats

var theSideImages = new Array()
theSideImages[0] = '<img src="static/cats/norms-list-cat.png" alt"" title="">'
theSideImages[1] = '<img src="static/cats/aoc-cat.png" alt"" title="American Outdoor Caming, indoor camping is over-rated">'
theSideImages[2] = '<img src="static/cats/jacket-aficionado-cat.png" alt"" title="Because the word \'Aficianado\' has not been overused.">'

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
theHeaderImages[0] = '<img src="static/cats/trekitory-cat.png" alt"" title="">'
theHeaderImages[1] = '<img src="static/cats/campatory-cat.png" alt"" title="">'
theHeaderImages[2] = '<img src="static/cats/aoc-tents-cat.png" alt"" title="">'
theHeaderImages[3] = '<img src="static/cats/campnation-cat.png" alt"" title="">'

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