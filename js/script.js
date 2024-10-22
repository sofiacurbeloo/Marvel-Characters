//API sacada de "https://developer.marvel.com/docs#!/public/getCreatorCollection_get_0"
const URL = "https://gateway.marvel.com/v1/public/characters?ts=3000&apikey=7e5c20c237dd6e5fd1588e3914f2a704&hash=fea16d67f126f2a79d9b4cf1bf4a1ac5";
console.log(URL);
//CONTENEDOR DONDE SE UBICARA LA INFO
const container = document.querySelector(".info");

//FETCH
window.addEventListener("DOMContentLoaded", ()=>{
    fetch(URL)
    .then(res => {
        if (res.ok){ 
            return res.json();   
        } else {
            throw Error ('Error de busqueda')
        }   
    })
    .then (result => {
        showData(result.data.results)
    })
    .catch (error =>{
        console.error("Error", error)
    })
})

//FUNCION QUE MUESTRA LOS DATOS   
let showData = (array)=>{
    console.log(array)
    container.innerHTML= ''
    array.forEach(character => {
        container.innerHTML += `<div class="card col-md-3 m-4 p-0 card-styles text-light" >
            <img src="${character.thumbnail.path}.${character.thumbnail.extension}" class="card-img-top img" alt="${character.name} img">
            <div class="card-body">
                <h4 class="card-title text-center mb-3">${character.name}</h4>              
                <div class="dropdown">
                    <button class="w-100 btn btn-secondary dropdown-toggle btn-styles" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Information
                    </button>
                    <ul class="dropdown-menu dropdown-styles">
                        <li class="list-group-item text-light p-2">${character.description || "Not description"}</li>
                        <li class="list-group-item text-light p-2 border-top">appearance in ${character.comics.available} comics</li>
                    </ul>
                </div>         
            </div>        
          </div>
        </div> `
    });   
}

