console.log("hello Word");

const URL ='https://www.thesportsdb.com/api/v1/json/3/search_all_leagues.php?c=Venezuela'
const URL_TEAM2=' https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?l=Venezuela%20Primera%20Division'

async function soccer(){
    const res = await fetch(URL);
    const data = await res.json();
    console.log(data);
    var countries = data["countries"];
    const p = document.getElementById("liga_venezolana");
    p.innerHTML = countries[0]["strDescriptionEN"];
    var img_logo_soccer =document.getElementById("logo_soccer");
    img_logo_soccer.src = countries[0]["strBadge"];
    var descripciption_ligaVenezolana = countries[0]["strDescriptionEN"];
    descripciption_ligaVenezolana = descripciption_ligaVenezolana.substring(0,156);
    p.innerHTML = descripciption_ligaVenezolana;
   
}soccer();

async function team(){
    const res = await fetch(URL_TEAM2);
    const data = await res.json();
    console.log(data);
    var teams = data["teams"];
    var primer_equipo = document.getElementById("primer_equipo");
    primer_equipo.src = teams[1]["strTeamBadge"];
    var parrafo = document.getElementById("parrafo_primer_equipo");
    parrafo.innerHTML = teams[1]["strAlternate"];
    var parrafo_dos_primer_equipo = document.getElementById("parrafo_dos_primer_equipo");
    parrafo_dos_primer_equipo.innerHTML = teams[1]["strDescriptionEN"];
    var segundo_equipo = document.getElementById("segundo_equipo");
    segundo_equipo.src = teams[2]["strTeamBadge"];
    var parrafo_segundo_equipo = document.getElementById("parrafo_segundo_equipo");
    parrafo_segundo_equipo.innerHTML = teams[2]["strTeam"];
    var parrafo_dos_segundo_equipo = document.getElementById("parrafo_dos_segundo_equipo");
    parrafo_dos_segundo_equipo.innerHTML = teams[2]["strDescriptionEN"];
}team();