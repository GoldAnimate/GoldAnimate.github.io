var warning = document.querySelector('.warning');
var bs = document.querySelector('.button_big');
var ss = document.querySelectorAll('.button_small')[document.querySelectorAll('.button_small').length-1];
bs.insertAdjacentHTML('afterend','<a class="button_big" href="http://wrapperonlinediamond.waterdroprio.cc/make">DIAMOND MAKER</a>');
ss.insertAdjacentHTML('afterend','<a class="button_small" href="http://wrapperonlinediamond.waterdroprio.cc/create?filter=cc">DIAMOND CC</a>');
warning.style.backgroundColor="red";
warning.style.color="white";
warning.innerHTML='<br><br><b><a href=\'http://wrapperonlinediamond.waterdroprio.cc/\' style=\'color:white;\'>Wrapper Online: Diamond is highly recomended instead of '+window.location.hostname+'. Click here to visit Wrapper Online: Diamond now. (Highly Recomended)</a></b>';
