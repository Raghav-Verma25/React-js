let api_url = "https://jsonplaceholder.typicode.com/users";
var displayData;
function getApiData(url){
   fetch(url) 
   .then((res)=> res.json())  // call res.json() and also we have to again handle res.json()
   .then((data) => console.log(data))
    // .then((data) => {
    // displayData = data})
   .catch((err)=>  console.log(err));
 
}

getApiData(api_url);
// var res = document.getElementById("show");
// res.append(displaydata);