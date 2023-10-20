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

var queries=get_query();
if(queries.option=="upgrade-new"||queries.option=="upgrade"){document.getElementsByTagName("html")[0].innerHTML="Error #293951245 Please contact support"}

document.addEventListener("DOMContentLoaded",function(event){
if(document.getElementById("advanced-body")){document.getElementById("advanced-body").insertAdjacentHTML('beforeend', '<div class=\"item\" role=\"page\" ng-repeat=\"item in ::group.items track by item.file\" ng-show=\"([item] | filter:searchItem).length\"><a id=\"icon-simple_zone_editor\" class=\"itemImageWrapper integrations_icon spriteicon_img icon-simple_zone_editor\" ng-style=\"::item.base64_png_image.length &amp;&amp; {\'background-image\': \'url(data:image\/png;base64,)\'}\" ng-href=\"\/panel\/indexpl.php?option=cnamerecords\" ng-attr-target=\"{{::item.target}}\" href=\"\/panel\/indexpl.php?option=cnamerecords\" target=\"\">\r\n<\/a><a id=\"item_simple_zone_editor\" class=\"itemTextWrapper link\" ng-href=\"\/panel\/indexpl.php?option=cnamerecords\" ng-attr-target=\"{{::item.target}}\" {{::item.acontent}}=\"\" ng-bind-html=\"::item.itemdesc\" href=\"\/panel\/indexpl.php?option=cnamerecords\" target=\"\">CNAME Records<\/a>\r\n<\/div>');}
if(document.getElementById("software-body")){document.getElementById("software-body").insertAdjacentHTML('beforeend', '<div class=\"item\" role=\"page\" ng-repeat=\"item in ::group.items track by item.file\" ng-show=\"([item] | filter:searchItem).length\">\r\n<a id=\"icon-cloudflare\" class=\"itemImageWrapper integrations_icon spriteicon_img icon-cloudflare\" ng-style=\"::item.base64_png_image.length &amp;&amp; {\'background-image\': \'url(data:image\/png;base64,)\'}\" ng-href=\"\/panel\/indexpl.php?option=cloudflare\" ng-attr-target=\"{{::item.target}}\" href=\"\/panel\/indexpl.php?option=cloudflare\" target=\"\">\r\n<\/a><a id=\"item_cloudflare\" class=\"itemTextWrapper link\" ng-href=\"\/panel\/indexpl.php?option=cloudflare\" ng-attr-target=\"{{::item.target}}\" {{::item.acontent}}=\"\" ng-bind-html=\"::item.itemdesc\" href=\"\/panel\/indexpl.php?option=cloudflare\" target=\"\">Cloudflare<\/a>\r\n<\/div>');}
if(document.getElementById("item_two_factor_authentication")){deleteElem(document.getElementById("item_two_factor_authentication").parentNode);}
if(document.querySelector("img[src='/panel/images/pl-sidebar-upgrade.png']")){deleteElem(document.querySelector("img[src='/panel/images/pl-sidebar-upgrade.png']").parentNode);}
if(document.querySelector("form[action='https://ifastnet.com/portal/domainchecker.php']")&&!queries.option){deleteElem(document.querySelector("form[action='https://ifastnet.com/portal/domainchecker.php']").parentNode.parentNode.parentNode);}
if(document.querySelector("form[action='https://ifastnet.com/portal/domainchecker.php']")){deleteElem(document.querySelector("form[action='https://ifastnet.com/portal/domainchecker.php']"));}
var uls = document.querySelectorAll("a[href*='option=upgrade'], a[href*='ifastnet.com']");
for(var i=0;i<uls.length;++i) {
deleteElm(uls[i]);
}
});
