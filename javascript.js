function LogIn()
{
	var login = document.getElementById("user").value;
	var passwd = document.getElementById("passwd").value;
    var user_login = "1111";//"serverraspberrycreator";
    var user_passwd = "1111"; //"administratorpipasswd";

	if (login == user_login && passwd == user_passwd)
	{
		$("#login_checking").hide();
		$("#registered_user").show();
		//document.getElementById("login_checking").style.visibility = "hidden";
	}

	else
		alert ("Invalid login/password. Try again!");
}