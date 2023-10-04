
const URL = 'https://www.thesportsdb.com/api/v1/json/3/search_all_leagues.php?c=Venezuela';
const URL_TEAM = 'https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?l=Venezuelan%20Professional%20Baseball%20League';



async function ligaBeisbol(){
   const res = await fetch(URL);
   const data = await res.json();
   console.log(data);
   var countries = data["countries"];
   const h1 = document.querySelector("h1");
   h1.innerHTML= countries[1]["strSport"];
   const p1 = document.getElementById("description");
   p1.innerHTML = countries[1]["strDescriptionEN"];
   var description_liga_beisbol= countries[1]["strDescriptionEN"];
   description_liga_beisbol = description_liga_beisbol.substring(0,210);
   p1.innerHTML=  description_liga_beisbol;
   console.log("description_liga_beisbol");
   var img_icono_beisbol=document.getElementById("icono_beisbol");
   img_icono_beisbol.src= countries[1]["strBadge"];
   var img1 = document.getElementById("img1");
   img1.src= countries[1]["strFanart1"];
   var img2 = document.getElementById("img2");
   img2.src= countries[1]["strFanart4"];
   /*var imgCarrusel  = document.getElementById("primer-elemento-carrusel");
   imgCarrusel.src = countries[1]["strBadge"];
   var imgCarrusel1  = document.getElementById("segundo-elemento-carrusel");
   imgCarrusel1.src = countries[1]["strPoster"];
   var imgCarrusel2  = document.getElementById("tercer-elemento-carrusel");
   imgCarrusel2.src = countries[1]["strTrophy"];*/
       
}
ligaBeisbol();

async function equipos(){
   const res = await fetch(URL_TEAM);
   const data1 = await res.json();
   console.log(data1);
   var team = data1["teams"];
   const p2 = document.getElementById("aguilas");
   p2.innerHTML = team[5]["strTeam"];
   const p3 = document.getElementById("aguilas1");
   var description_primer_equipo = team[5]["strDescriptionEN"];
   description_primer_equipo = description_primer_equipo.substring(0,200);
   p3.innerHTML = description_primer_equipo;
   const p4 = document.getElementById("leones");
   p4.innerHTML = team[4]["strTeam"];
   const p5 = document.getElementById("leones1");
   p5.innerHTML = team[4]["strDescriptionEN"];
   var description_segundo_equipo = team[4]["strDescriptionEN"];
   description_segundo_equipo = description_segundo_equipo.substring(0,200);
   p5.innerHTML = description_segundo_equipo;
   
}
equipos();

/*fetch(URL)
.then(res=> res.json())
.then(data => {
   console.log(data);
   var countries = data["countries"];
   console.log(countries[1]["intFormedYear"]);
   const h1 = document.querySelector("h1");
   h1.innerHTML = countries[1]["strDescriptionEN"];
   
});
console.log(fetch);*/
