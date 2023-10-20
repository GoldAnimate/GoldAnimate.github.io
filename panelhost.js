function deleteElem(elem){elem.parentNode.removeChild(elem);}
function startsWith(str,word){return str.lastIndexOf(word,0)===0;}
function endsWith(str,word){return str.indexOf(word,str.length-word.length)!==-1;}

function get_query(){
var url = location.search;
var qs = url.substring(url.indexOf('?') + 1).split('&');
for(var i = 0, result = {}; i < qs.length; i++){
qs[i] = qs[i].split('=');
result[qs[i][0]] = decodeURIComponent(qs[i][1]);
}
return result;
}

function replaceInText(element, pattern, replacement) {
    for (let node of element.childNodes) {
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


if(queries.option){
replaceInText(document.body, "MySQL external access", "");
replaceInText(document.body, "Want a new domain instead? Check now to see if your preferred top-level domain is available!", "");
replaceInText(document.body, "If it is available you can have it in less than six clicks and be up and running in 24~72 hours!", "");
replaceInText(document.body, "If you do not already own a domain name, we can supply premium hosting, with the domain name of your choice, starting at $2.99 per month (for the domain name , and hosting package).", "");
replaceInText(document.body, "Why not try checking now to see if your domain name is still available using the checker below", "");
replaceInText(document.body, "If it is available in 6 clicks you can be up and running !", "");
replaceInText(document.body, "Premium hosting allow you to create multiple FTP accounts with the ability to select an individual document root for each FTP user.", "");
replaceInText(document.body, "To find out more and to order please", "");
replaceInText(document.body, "Would like a one click backup tool ? Upgrade to premium hosting where in one click you can backup your account !", "");
replaceInText(document.body, "Get the latest cPanel, free domain names, free SSL certificates for all your domain, Softaculous, enhanced PHP, Massive MySQL performance, Perl, Ruby on rails and much much more on Premium hosting now !", "");
replaceInText(document.body, "Free domains are included with most plans including .COM, .NET, .ORG and .INFO", "");
replaceInText(document.body, "Did you know premium hosting allows you to create individual MySQL users and privileges? All premium accounts have upto 1GB of mysql storage. To see a demo:", "");
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
replaceInText(document.body, "", "");
replaceInText(document.body, "", "");
replaceInText(document.body, "", "");
replaceInText(document.body, "", "");
replaceInText(document.body, "", "");
replaceInText(document.body, "", "");
}

document.addEventListener("DOMContentLoaded",function(event){
if(document.getElementById("advanced-body")){document.getElementById("advanced-body").insertAdjacentHTML('beforeend', '<div class=\"item\" role=\"page\" ng-repeat=\"item in ::group.items track by item.file\" ng-show=\"([item] | filter:searchItem).length\"><a id=\"icon-simple_zone_editor\" class=\"itemImageWrapper integrations_icon spriteicon_img icon-simple_zone_editor\" ng-style=\"::item.base64_png_image.length &amp;&amp; {\'background-image\': \'url(data:image\/png;base64,)\'}\" ng-href=\"\/panel\/indexpl.php?option=cnamerecords\" ng-attr-target=\"{{::item.target}}\" href=\"\/panel\/indexpl.php?option=cnamerecords\" target=\"\">\r\n<\/a><a id=\"item_simple_zone_editor\" class=\"itemTextWrapper link\" ng-href=\"\/panel\/indexpl.php?option=cnamerecords\" ng-attr-target=\"{{::item.target}}\" {{::item.acontent}}=\"\" ng-bind-html=\"::item.itemdesc\" href=\"\/panel\/indexpl.php?option=cnamerecords\" target=\"\">CNAME Records<\/a>\r\n<\/div>');}
if(document.getElementById("software-body")){document.getElementById("software-body").insertAdjacentHTML('beforeend', '<div class=\"item\" role=\"page\" ng-repeat=\"item in ::group.items track by item.file\" ng-show=\"([item] | filter:searchItem).length\">\r\n<a id=\"icon-cloudflare\" class=\"itemImageWrapper integrations_icon spriteicon_img icon-cloudflare\" ng-style=\"::item.base64_png_image.length &amp;&amp; {\'background-image\': \'url(data:image\/png;base64,)\'}\" ng-href=\"\/panel\/indexpl.php?option=cloudflare\" ng-attr-target=\"{{::item.target}}\" href=\"\/panel\/indexpl.php?option=cloudflare\" target=\"\">\r\n<\/a><a id=\"item_cloudflare\" class=\"itemTextWrapper link\" ng-href=\"\/panel\/indexpl.php?option=cloudflare\" ng-attr-target=\"{{::item.target}}\" {{::item.acontent}}=\"\" ng-bind-html=\"::item.itemdesc\" href=\"\/panel\/indexpl.php?option=cloudflare\" target=\"\">Cloudflare<\/a>\r\n<\/div>');}
if(document.getElementById("item_two_factor_authentication")){deleteElem(document.getElementById("item_two_factor_authentication").parentNode);}
if(document.querySelector("img[src='/panel/images/pl-sidebar-upgrade.png']")){deleteElem(document.querySelector("img[src='/panel/images/pl-sidebar-upgrade.png']").parentNode);}
if(document.querySelector("form[action='https://ifastnet.com/portal/domainchecker.php']")&&!queries.option){deleteElem(document.querySelector("form[action='https://ifastnet.com/portal/domainchecker.php']").parentNode.parentNode.parentNode);}
if(document.querySelector("form[action='https://ifastnet.com/portal/domainchecker.php']")){deleteElem(document.querySelector("form[action='https://ifastnet.com/portal/domainchecker.php']"));}
var uls = document.querySelectorAll("a[href*='option=upgrade'], a[href*='//ifastnet.com']");
for(var i=0;i<uls.length;++i) {
deleteElem(uls[i]);
}
});
