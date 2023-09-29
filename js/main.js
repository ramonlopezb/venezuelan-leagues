
const URL = 'https://www.thesportsdb.com/api/v1/json/3/search_all_leagues.php?c=Venezuela';



async function ligaBeisbol(){
   const res = await fetch(URL);
   const data = await res.json();
   console.log(data);
   var countries = data["countries"];
   const h1 = document.querySelector("h1");
   h1.innerHTML = countries[1]["strDescriptionEN"];
   var img = document.getElementById("img1");
   img = countries[1]["strFanart2"];
}
ligaBeisbol();


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
