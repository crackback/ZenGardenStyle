/* 
*	Functions to set a cookie to control which css sheet applies 
*	to a web page
*/

function getCookie(c_name)
{
	// get array of all cookies
	var i,x,y,ARRcookies=document.cookie.split(";");
	//traverse array
	for (i=0;i<ARRcookies.length;i++)
	{
		x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
		y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
	  
		// if name is found return matching value	
		if (x == c_name)
		{
			return (y);
		}
	}
}

function checkCookie()
{
	// request name
	var filename = getCookie("which_css");
	
	// if value exists
	if (filename!=null && filename!="")
	{
		// use retrieved value to overwrite css #overwrite
		$('#overwrite').attr('href',filename);
	}
	else
	{
		// write new cookie as name=value pair
		document.cookie = "which_css" + "=" + "css/pinkStyle.css";
		//Default style
		$('#overwrite').attr('href','css/pinkStyle.css');
	}
}


// this function executes when page loads
$(document).ready(function(){
    
    checkCookie();
	
    $('.pink').click(function(){
	//overwrite cookie
	document.cookie = "which_css" + "=" + "css/pinkStyle.css";
	//overwrite css #overwrite
        $('#overwrite').attr('href','css/pinkStyle.css');
    });
    
    
    $('.blue').click(function(){
	//overwrite cookie
	document.cookie = "which_css" + "=" + "css/blueStyle.css";
	//overwrite css #overwrite
       $('#overwrite').attr('href','css/blueStyle.css');
    });
});
