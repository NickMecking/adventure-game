var title = document.getElementById("title");
var page = document.getElementById("page");
var image = document.getElementById("image");
var text = document.getElementById("text");
var uitleg = document.getElementById("uitleg");
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var key = false;

function start(){
  page.innerHTML = "Adventure Game";
  title.innerHTML = "Adventure Game";
  image.setAttribute("src","img/start.jpg");
  text.innerHTML = "";
  uitleg.style.display = "inline";
  uitleg.innerHTML = "Welkom bij de adventuregame. Om het spel te starten druk je op start. De bedoeling van het spel is om telkens de juiste keuzes te maken zodat je overleeft. Als je de goed keuzes hebt gemaakt win je het spel. Als je de verkeerde keuzes maakt kun je het spel gemakkelijk overnieuw spelen.";
  button1.innerHTML = "start"
  button2.style.display = "none";
  button1.onclick = function(){
    opdracht1();
  }
}

function opdracht1(){
    uitleg.style.display = "none";
    button2.style.display = "inline";
    image.setAttribute("src","img/vliegtuig.jpg");
    title.innerHTML = "Je vliegtuig is neergestort.";
    text.innerHTML = "Je vliegtuig is neergestort in een jungle. Je weet niet goed wat je moet doen omdat je bang bent. Blijf je in het vliegtuig op zoek naar overlevende? Of ga je zo snel mogelijk het vliegtuig uit?"
    button1.innerHTML = "Je blijft in het vliegtuig";
    button2.innerHTML = "Je verlaat het vliegtuig";
    button1.onclick = function(){
      opdracht2();
    }
    button2.onclick = function(){
      opdracht3();
    }
}

function opdracht2(){
  page.innerHTML = "Game Over";
  image.setAttribute("src","img/ontploffing.gif");
  title.innerHTML = "Game Over";
  text.innerHTML = "Helaas, je hebt de verkeerde keuze gemaakt. Begin overnieuw!";
  button2.style.display = "none";
  button1.innerHTML = "begin overnieuw";
  button1.onclick = function(){
    start();
  }
}

function opdracht3(){
  button2.style.display = "inline";
  image.setAttribute("src","img/jungle.jpg");
  title.innerHTML = "Je bent nu in de jungle"
  text.innerHTML = "Je staat in de jungle. Je ziet een soort bewandeld pad.";
  button1.innerHTML = "Neem het bewandelde pad";
  button2.innerHTML = "Ga de jungle in";
  button1.onclick = function(){
    opdracht4();
  }
  button2.onclick = function(){
    leeuw();
  }
}

function leeuw(){
  button2.style.display = "none";
  image.setAttribute("src","img/leeuw.jpg");
  title.innerHTML = "Je wordt aangevallen door een leeuw";
  text.innerHTML = "Helaas, je wordt aangevallen door een leeuw. Je overleeft deze aanval niet. Begin overnieuw!";
  button1.innerHTML = "Begin overnieuw";
  button1.onclick = function(){
    start();
  }
}

function opdracht4(){
  button2.style.display = "inline";
  image.setAttribute("src","img/mes.jpg");
  title.innerHTML = "Je ziet een mes liggen";
  text.innerHTML = "Je ziet een mes liggen langs dit pad.";
  button1.innerHTML = "Pak dit mes op";
  button2.innerHTML = "laat het mes liggen";
  button1.onclick = function(){
    opdracht6();
  }
  button2.onclick = function(){
    opdracht5();
  }
}

function opdracht5(){
  button2.style.display = "none";
  image.setAttribute("src","img/krokodil.jpg");
  title.innerHTML = "Je wordt opgegeten door een krokodil";
  text.innerHTML = "Helaas, je wordt aangevallen door een krokodil. Je overleeft dit niet. Begin overnieuw";
  button1.innerHTML = "Begin overnieuw";
  button1.onclick = function(){
    start();
  }
}

function opdracht6(){
  button2.style.display = "inline";
  image.setAttribute("src","img/kokosnoot.jpg");
  title.innerHTML = "Je komt langs een kokosnoot boom";
  text.innerHTML = "Je komt langs een kokosnootboom. Je hebt erge honger, wat doe je?";
  button1.innerHTML = "Laat de kokosnoot liggen";
  button2.innerHTML = "Pak de kokosnoot op";
  button1.onclick = function(){
    opdracht7();
    }
  button2.onclick = function(){
    opdracht9();
    }
  }


function opdracht7(){
  title.innerHTML = "Je gaat verder de jungle in";
  image.setAttribute("src","img/jungle1.jpg");
  text.innerHTML = "Je hebt de kokosnoot niet opgepakt en je gaat verder het bos in";
  button2.style.display = "none";
  button1.innerHTML = "volgende";
  button1.onclick = function(){
    opdracht8();
  }
}

function opdracht8(){
  title.innerHTML = "Je gaat dood van de honger";
  image.setAttribute("src","img/game-over.jpg");
  text.innerHTML = "Je hebt de kokosnoot niet opgepakt. Je had erge honger. Maar omdat je de kokosnoot niet had opgepakt ben je overleden.";
  button1.innerHTML = "Begin Overnieuw"
  button1.onclick = function(){
    start();
  }
}

function opdracht9(){
  button2.style.display = "inline";
  title.innerHTML = "Onbekende man";
  image.setAttribute("src","img/bosjes.jpg");
  text.innerHTML = "Er komt een man uit de bosjes. Hij heeft de crash ook overleeft. Hij vraagt of hij ook wat te eten mag.";
  button1.innerHTML = "Je geeft hem wat te eten";
  button2.innerHTML = "Je geeft hem geen eten";
  button1.onclick = function(){
    opdracht10();
  }
  button2.onclick = function(){
    opdracht11();
  }
}

function opdracht10(){
  title.innerHTML = "Je hebt de man eten gegeven";
  text.innerHTML = "Je hebt de man eten gegeven. Zelf heb je ook wat gegeten. Samen lopen jullie het pad verder af. Julle komen een sleutel tegen. Pak je hem op?";
  image.setAttribute("src","img/fotometsleutel.jpg");
  button1.innerHTML = "Pak de sleutel op";
  button2.innerHTML = "Volgende";
  button1.onclick = function(){
    alert("Je hebt de sleutel opgepakt!");
    key = true;
  }
  button2.onclick = function(){
    opdracht19();
  }
}

function opdracht19(){
  title.innerHTML = "Je ziet een huisje";
  text.innerHTML = "Je ziet een huisje langs dit pad. Ga je het huisje in?";
  image.setAttribute("src","img/junglehuis.jpg");
  button2.style.display = "none";
  button1.innerHTML = "Ga het huisje in";
  button1.onclick = function(){
    if (key == true) {
      opdracht12();
    } else {
      button2.style.display = "inline";
      alert("je hebt de sleutel niet opgepakt");
      button2.innerHTML = "Ga terug om de sleutel te pakken";
      button2.onclick = function(){
        opdracht10();
      }
    }
  }
}

function opdracht11(){
  button2.style.display = "none";
  title.innerHTML = "Je hebt de man geen eten gegeven.";
  text.innerHTML = "Je hebt de man geen eten gegeven. De man is erg geweldadig, omdat hij erge honger heeft vermoord hij je.";
  image.setAttribute("src","img/game-over.jpg");
  button1.innerHTML = "Begin overnieuw";
  button1.onclick = function(){
    start();
  }
}

function opdracht12(){
  button2.style.display = "inline";
  title.innerHTML = "Je bent in het huisje";
  text.innerHTML = "Je bent nu in het huisje. Je hoort wat vallen in de keuken. Ga je kijken in de keuken?";
  image.setAttribute("src","img/huis-binnen.jpg");
  button1.innerHTML = "Ga kijken in de keuken";
  button2.innerHTML = "Ga weer uit het huisje";
  button1.onclick = function(){
    opdracht13();
  }
  button2.onclick = function(){
    opdracht14();
  }
}

function opdracht13(){
  title.innerHTML = "Je bent in de keuken.";
  text.innerHTML = "Je bent aangekomen in de keuken. Hier staat een vrouw met een mes. Ze is boos dat je haar huis bent binnengegaan. Ze sluit je op en laat je niet meer gaan. Begin overnieuw";
  image.setAttribute("src","img/opgesloten.jpg");
  button1.innerHTML = "begin overnieuw";
  button1.onclick = function(){
    start();
  }
}

function opdracht14(){
  button2.style.display = "inline";
  title.innerHTML = "Je bent weer naar buiten gegaan";
  text.innerHTML = "Je bent weer uit het huisje gegaan. Jullie horen in de verte een helikopter. Jullie zien hout liggen.";
  image.setAttribute("src","img/hout.jpg");
  button1.innerHTML = "Jullie gaan vuur maken";
  button2.innerHTML = "Jullie maken geen vuur";
  button1.onclick = function(){
    opdracht16();
  }
  button2.onclick = function(){
    opdracht15();
  }
}

function opdracht15(){
  button2.style.display = "none";
  title.innerHTML = "Jullie hebben geen vuur gemaakt.";
  text.innerHTML = "Jullie lopen verder de jungle in. Jullie komen bij een waterval. Je valt in deze waterval en verdrinkt.";
  image.setAttribute("src","img/waterval.jpg");
  button1.innerHTML = "Begin overnieuw";
  button1.onclick = function(){
    start();
  }
}

function opdracht16(){
  button2.style.display = "none";
  title.innerHTML = "Kampvuur";
  text.innerHTML = "Jullie hebben een kampvuur gemaakt, Waardoor de helikopter jullie hopelijk ziet.";
  image.setAttribute("src","img/kampvuur.jpg");
  button1.innerHTML = "volgende";
  button1.onclick = function(){
    opdracht17();
  }
}

function opdracht17(){
  button2.style.display = "none";
  title.innerHTML = "Jullie zien de helikopter.";
  text.innerHTML = "De helikopter zien jullie al in de verte vliegen. Hij komt steeds dichterbij en jullie denken dat de piloot jullie heeft gezien dus jullie blijven wachten.";
  image.setAttribute("src","img/helicopter.jpg");
  button1.innerHTML = "volgende";
  button1.onclick = function(){
    opdracht18();
  }
}

function opdracht18(){
  button2.style.display = "none";
  title.innerHTML = "Jullie worden gered door de helikopter";
  text.innerHTML = "Gefeliciteerd jullie zijn gered.";
  image.setAttribute("src","img/winner.jpg");
  button1.innerHTML = "begin overnieuw";
  button1.onclick = function(){
    start();
  }
}
start();
