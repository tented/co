function scroll()
{
	if (window.pageYOffset > 90)
	{
		document.getElementById("header").className = "header-fixed";
		document.getElementById("logo-container").className = "logo-container-fixed";
		document.getElementById("social").className = "revealed";
		
			if (document.body.offsetWidth >= 615)
			{
				document.getElementById("content").style.paddingTop="138px"
			}
			else
			{
				document.getElementById("content").style.paddingTop="193px"
			}
	}
	else
	{
		document.getElementById("header").className = "header";
		document.getElementById("logo-container").className = "logo-container";
		document.getElementById("social").className = "hidden";
		document.getElementById("content").style.paddingTop="0px"
	}  
};