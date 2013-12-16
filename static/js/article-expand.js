function articleExpand(articleId)
{
var currentHeight = document.getElementById("hidden-"+articleId).offsetHeight;

if (currentHeight == 0)
{
document.getElementById("hidden-"+articleId).style.maxHeight = '100%';
document.getElementById("button-"+articleId).innerHTML = "Close";
}
else
{
document.getElementById("hidden-"+articleId).style.maxHeight = '0px';
document.getElementById("button-"+articleId).innerHTML = "Read More";
}

}
	