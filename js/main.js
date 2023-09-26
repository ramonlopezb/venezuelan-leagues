
const URL = 'https://www.thesportsdb.com/api/v1/json/3/search_all_leagues.php?c=Venezuela';

fetch(URL)
.then(res=> res.json())
.then(data => {
 
   console.log(data);
});
console.log(fetch);