
// create variable link json


/*const urlUser = "http://localhost/task1/api/task.php?user";

const urlCat = "http://localhost/task1/api/task.php?cat";

const urlTask = "http://localhost/task1/api/task.php?task=1";



// for requet

async function fetchApi(url) {
    const response = await fetch(url);
    const data = await response.json();
 
    return data;
 }
 
 (async function processData() {
    const display1 = document.querySelector("section");
    const data = await fetchApi("http://localhost/task1/api/task.php?cat");

    for (let obj in data) {
        const {
            id_cat,
            name_cat,
        } = data[obj];
        display1.innerHTML += `${data.id_cat} ${data.name_cat}`;
    }
})();
 */
   // Traiter les données


// create variable link json
let url = "http://localhost/task1/api/task.php?cat";
// for requet
function requestApi(event) {
    event.preventDefault();

    const answer = document.querySelector("form input[name = 'task']");
    console.log(task.value);

    fetch(`${url} `)

        .then(response => response.json()) 

        .then(data => {
            console.log('success:', data);

          let task = document.createElement("div");

         
                for (i = 0; i < data.length; i++) {

                let dat = document.createElement("div");
                dat.textContent = `${data[i].id_cat}`;
        }
        display.appendChild(task);
        task.textContent = "";
        task.textContent = `aujourd'hui, c'est ${data[0].id_cat}`, `${data.name_cat}`;
    }
        )
        
.catch((error) => {
    console.error('error:', error);
});
}


var btn = document.getElementById("btn");

btn.addEventListener("click", function (event) {
    event.preventDefault();
    var task = document.getElementById("task").value;
    requestApi(event);
    console.log(task);
});

function getValue() {
    //selectionner l'element input et recuperer sa valeur
    return document.getElementById("task").value;
    console.log(getValue);
}

