function articleExpand(articleId)
{
var currentHeight = document.getElementById(articleId).offsetHeight;

if (currentHeight < 300)
{
document.getElementById(articleId).style.maxHeight = '100%';
document.getElementById("button-"+articleId).innerHTML = "Close";
}
else
{
document.getElementById(articleId).style.maxHeight = '200px';
document.getElementById("button-"+articleId).innerHTML = "Read More";
}

}
	