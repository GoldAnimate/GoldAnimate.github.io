function deleteElem(elem){elem.parentNode.removeChild(elem);}

function startsWith(str,word){return str.lastIndexOf(word,0)===0;}

function endsWith(str,word){return str.indexOf(word,str.length-word.length)!==-1;}

function get_query(){
var url = window.location.href;
var qs = url.substring(url.indexOf('?') + 1).split('&');
for(var i = 0, result = {}; i < qs.length; i++){
qs[i] = qs[i].split('=');
result[qs[i][0]] = unescape(qs[i][1]);
}
return result;
}

function replaceInText(element, pattern, replacement) {
    for (var node of element.childNodes) {
        switch (node.nodeType) {
            case Node.ELEMENT_NODE:
                replaceInText(node, pattern, replacement);
                break;
            case Node.TEXT_NODE:
                node.textContent = node.textContent.replace(pattern, replacement);
                break;
            case Node.DOCUMENT_NODE:
                replaceInText(node, pattern, replacement);
        }
    }
}


var queries=get_query();

if(queries.option=="upgrade-new"||queries.option=="upgrade"||queries.option=="remotemysql"||queries.option=="psql"){document.getElementsByTagName("html")[0].innerHTML="Error #293951245 Please contact support"}

if(document.querySelector("img[src='/panel/images/pl-sidebar-upgrade.png']")){deleteElem(document.querySelector("img[src='/panel/images/pl-sidebar-upgrade.png']").parentNode);}

if(queries.option){
replaceInText(document.body, "MySQL external access", "");
replaceInText(document.body, "Want a new domain instead? Check now to see if your preferred top-level domain is available!", "");
replaceInText(document.body, "If it is available you can have it in less than six clicks and be up and running in 24~72 hours!", "");
replaceInText(document.body, "If you do not already own a domain name, we can supply premium hosting, with the domain name of your choice, starting at $2.99 per month (for the domain name , and hosting package).", "");
replaceInText(document.body, "Why not try checking now to see if your domain name is still available using the checker below", "");
replaceInText(document.body, "If it is available in 6 clicks you can be up and running !", "");
replaceInText(document.body, "Premium hosting allow you to create multiple FTP accounts with the ability to select an individual document root", "");
replaceInText(document.body, ' for each FTP user.  To find out more and to order please click here.', "");
replaceInText(document.body, "To find out more and to order please", "");
replaceInText(document.body, "Would like a one click backup tool ? Upgrade to premium hosting where in one click you can backup your account !", "");
replaceInText(document.body, "Get the latest cPanel, free domain names, free SSL certificates for all your domain, Softaculous, enhanced PHP, Massive MySQL performance, Perl, Ruby on rails and much much more on Premium hosting now !", "");
replaceInText(document.body, "Free domains are included with most plans including .COM, .NET, .ORG and .INFO", "");
replaceInText(document.body, "Did you know premium hosting allows you to create individual MySQL users and privileges? All premium accounts have upto 1GB of mysql storage.", "");
replaceInText(document.body, 'To see a demo: Click here', "");
replaceInText(document.body, "Premium hosting MySQL server benefits :", "");
replaceInText(document.body, "- Create individual MySQL users.", "");
replaceInText(document.body, "- Set individual MySQL grants per user.", "");
replaceInText(document.body, "- Remote MySQL connections.", "");
replaceInText(document.body, "Every paid hosting plan includes a free Top Level Domain name!", "");
replaceInText(document.body, "Find out more about Premium Hosting today!", "");
replaceInText(document.body, "Upgrade to a paid plan to get SMTP/POP/IMAP and PHPSendmail", "");
replaceInText(document.body, "Get more out of e-mail with our Premium Hosting plans featuring POP, IMAP, SMTP and much more including the industry leading", "");
replaceInText(document.body, "Free domain included with most premium plans including .COM, .NET, .ORG and .INFO", "");
replaceInText(document.body, "Want awesome stats, like awstats and webalizer ?", "");
replaceInText(document.body, "has it all!", "");
replaceInText(document.body, "To get the extra functionality of the Site builder please order a premium hosting plan:", "");
replaceInText(document.body, "Or you can upgrade your entire free hosting account to premium using our upgrade process here:", "");
replaceInText(document.body, "Upgrade to a iFastNet paid plan to get PHP selector with the option of PHP 4.4, 5.1, 5.2, 5.3, 5.4, 5.5, 5.6, 7.0, 7.1, 7.2, 7.3, 7.4, 8.0 & 8.1 !", "");
replaceInText(document.body, "Upgrade to a paid plan to get Cron functionality, SMTP/POP/IMAP, PHPSendmail, free domains and unlimited space!", "");
if(document.querySelector("form[action='https://ifastnet.com/portal/domainchecker.php']")){deleteElem(document.querySelector("form[action='https://ifastnet.com/portal/domainchecker.php']"));}
var uls = document.querySelectorAll("a[href*='option=upgrade'], a[href*='//ifastnet.com']");
for(var i=0;i<uls.length;++i) {
deleteElem(uls[i]);
}
}

var username = "";
var pass = "";

function openbuilder(){
	if (document.getElementById("sitename").value == "") {
		alert("Please enter your site name");
		return;
	}
	if (document.getElementById("directory").value == "") {
		alert("Please enter your starting directory");
		return;
	}
	var xhttp = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
	document.getElementById("launch").innerHTML="<span class='fa fa-spinner fa-spin fa-lg'></span>";
	document.getElementById("launch").disabled=true;
	xhttp.open("POST", "https://corsproxy.io/?"+escape("https://site.pro/api/requestLogin"));
	xhttp.setRequestHeader("Authorization","Basic YXBpa2V5MDpXaGIzUmxuRzRJaC9EZ1pmcTNSbzRYS2ZRSkt0S0dvZklHdjcudGF2cFRmL1Jneng=");
	xhttp.setRequestHeader('Content-Type','application/json');
	xhttp.onreadystatechange = function(){
		if(xhttp.readyState == 4 && xhttp.status == 200) {
			var j = eval('(' + xhttp.responseText + ')');
			if (j.url) {
				window.location.href = j.url;
			} else if (j.error) {
				alert("Error: ("+j.error.message+") Make sure you've filled in the inputs correctly, then try again.");
				document.getElementById("launch").innerHTML="Start SiteBuilder";
				document.getElementById("launch").disabled=false;
			}
		}
	}
	var thejson = {
		"type" : "external",
		"domain": document.getElementById("sitename").value,
		"apiUrl": "ftpupload.net",
		"lang": "en",
		"username": username,
		"password": pass,
		"uploadDir": document.getElementById('directory').value,
		"hostingPlan": "tiny",
		"panel": "VistaPanel"
	}
	xhttp.send(JSON.stringify(thejson));
}

if(queries.option=="sitebuilder"){
	var xhttpzero = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
	xhttpzero.open("GET",((window.location.href.substring(0, 6) == "https:" ? "https:" : "http:") + "//cpanel.vhost.ovh/panel/indexpl.php"));
	xhttpzero.onreadystatechange = function(){
		if(xhttpzero.readyState == 4 && xhttpzero.status == 200) {
			var mype = xhttpzero.responseText.substr(xhttpzero.responseText.indexOf("filemanager.ai")+37);
			mype = mype.substr(0,mype.indexOf('"'));
			var userpassSplit = mype.split("/");
			username = userpassSplit[0];
			pass = eval("(" + atob(userpassSplit[1]) + ")").c.p;
		}
	}
	xhttpzero.send();
	document.getElementsByClassName('body-content')[0].parentNode.innerHTML='<div class="body-content"><h1 class="page-header"></h1><h1>WebSite Builder</h1></div>Site Domain (either your main domain ending with vhost.ovh or an addon domain)<br><input type="text" id="sitename" class="form-control"><br><br>Main Directory(/htdocs if using main or parked domain, or /[addon domain]/htdocs if using addon domain<br><input type="text" id="directory" class="form-control"><br><br><button class="btn btn-primary" id="launch">Start SiteBuilder</button>';
	document.getElementById("launch").addEventListener("click",openbuilder);
}
