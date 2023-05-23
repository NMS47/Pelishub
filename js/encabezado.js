window.addEventListener('load', function() {
    var titulo_pagina = document.querySelector('h1').innerText.trim().toLowerCase();
    console.log(titulo_pagina)
    var nav_item = document.querySelectorAll('.nav');
    for (var i = 0; i < nav_item.length; i++) {
    var itemText = nav_item[i].innerText.trim();
    if (itemText.toLowerCase() === titulo_pagina) {
        nav_item[i].style.display = 'none';
        break;
        }
    }
    
  });