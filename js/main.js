
const URL = 'https://www.thesportsdb.com/api/v1/json/3/search_all_leagues.php?c=Venezuela';

fetch(URL)
.then(res=> res.json())
.then(data => {
 
   var countries = data["countries"];
   console.log(countries[1]["intFormedYear"]);
   
});
console.log(fetch);