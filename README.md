# projekti-rock-paper-scissors
Odin projektin kolmas tehtävä, kivi, sakset, paperi.
Tänne tehdään projektin suunnitelma. 

Eli halutaan siis tehdä kivi-paperi-sakset peli, jossa pelataan tietokonetta vastaan. Molemmat arpovat random numerot ja arvolla x z ja y saadaan eri pelin elementti, eli nimensä mukaisesti jokin kivi, paperi tai sakset. 

Tehdään peli ensiksi ilman mitään css juttuja tai html elementtejä, pelataan siis terminaalissa. Tämän jälkeen haluan tehdä tästä vähän hienomman ja antaa vaikka erilaiset laatikot minne tulee molempien tulokset vaikka kuvilla. 

Haluan tehdä sellaisen pelin jossa pelaaja valitsee 1, 2 tai 3. 1 = kivi, 2 = paperi ja 3 = sakset. Sitten kun pelaaja on valinnut oman numeron eli arvon, tulee kuvioon funktio jossa kone valitsee randomisti jonkin näistä arvoista jotta saadaan aikaan peli. Eli ei sillain että molemmat valitsevat randomisti, vain kone valitsee randomisti numeron. 

Sitten kun molemmat arvot ovat tallella niin sitten funktio vertaa numeroita keskenään ja ilmoittaa että kumpi voittaa. 

Eli, miten tämä käytännössä toimii: 

1. Funktio 1: numeroiden valinta: 
  - Kutsutaan funktio jossa määritellään ensin pelaajan arvo, eli se pitää erikseen valita: funktio odottaa pelaajan input arvoa ja tallentaa sen let muuttujaan funktion sisällä. (Let koska muuten ei voitaisi pelailla tulosten yms kanssa).
  - tämän jälkeen kutsutaan toinen funktio funktion sisällä jossa kone määrittelee satunnaisesti itselleen arvon joka määräytyy edellä mainittujen arvojen mukaisesti. 
  
2. Funktio 2: 
- Numeroita verrataan keskenään ja tuloksena tulee tulos pelistä. 
- Säännöissä on että peli pelataan paras viidestä, jolloin lopputulos pitää tallentaa for loop maisesti funktioon, ja kun jompi kumpi voittaa yhden erolla niin sitten peli päättyy ja alkaa alusta. 

Muuttujia voidaan määritellä valmiiksi global scopessa, jolloin koodista tulee ehkä hieman helpomi hahmottaa: 

Erilaisia muuttujia: 
- Pelaajan valinta
- Koneen valinta
- Tulos
- Peli tilanne, eli milloin peli päättyy. 

