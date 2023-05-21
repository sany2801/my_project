var url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address";
var token = "c8bc0f0128c7944afa9f72fcea2fd8f13793ffd6";
var query = "москва хабар";

var options = {
    method: "POST",
    mode: "cors",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": "Token " + token
    },
    body: JSON.stringify({query: query})
}

fetch(url, options)
.then(response => response.json())
.then(result => console.log(result))
.catch(error => console.log("error", error));