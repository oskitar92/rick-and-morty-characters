
document.addEventListener("DOMContentLoaded", (event) => {
    let paginaActual = 1;
    
    function mostrar(pagina) {
        fetch("https://rickandmortyapi.com/api/character?page="+pagina)

            .then(response => response.json())
            .then(data => {

                console.log(data);

                const personajes = data.results;
                let lista = document.getElementById("character-list");
                lista.innerHTML = '';

                personajes.forEach(element => {

                    console.log(element.name);

                    let elemento = document.createElement("li");

                    let imagen = element.image;
                    let nombre = element.name;
                    let especie = element.species;

                    elemento.innerHTML = `
                <img src ="${imagen}" /><br>
                <p><strong>Name: </strong>${nombre}</p>
                <p><strong>Specie: </strong>${especie}</p>
            `;

                    lista.appendChild(elemento);
                });

            })
    }

    document.getElementById("next-page").addEventListener("click", () => {
        paginaActual++;
        mostrar(paginaActual);
    });

    document.getElementById("prev-page").addEventListener("click", () => {
        if(paginaActual > 1)
        paginaActual--;
        mostrar(paginaActual);
    });
    

    mostrar(paginaActual);
})