window.addEventListener('DOMContentLoaded', function() {
    const BUTTON = document.querySelector('#btn');
    const DIV = document.querySelector('div');
    BUTTON.addEventListener('click', function(){
        const xhr = new XMLHttpRequest();
        xhr.open('GET','ajax_json/persona.json', true);
        xhr.addEventListener('readystatechange', function(){
            if(xhr.readyState === 4 && xhr.status === 200){
                const persona = JSON.parse(xhr.responseText);
                DIV.innerHTML = `
                    <p>Nombre: ${persona.name}</p>
                    <p>Apellido: ${persona.lastName}</p>
                    <p>Apellido: ${persona.age}</p>
                `;
                //Mejor forma de desarmar el objeto, se llama DESTRUCTURING ASSIGNMENT
                /*const {name, lastName} = JSON.parse(xhr.responseText);
                DIV.innerHTML = `
                    <p>Nombre: ${name}</p>
                    <p>Apellido: ${lastName}</p>
                `;*/
            }
        });
        xhr.send();
    });

    const BUTTON_FETCH = document.querySelector('#btn-fetch');
    BUTTON_FETCH.addEventListener('click', function(){
        fetch('ajax_json/persona.json') //este fetch() me va a devolver una promesa
            .then(response => response.json()) //toma la respuesta "response" (promesa) y retornamos una nueva promesa pero que incluye el formato de respuesta de data como JSON. Then recibe la promesa, lo que pongo adentro se ejecuta cuando llega la respuesta
            .then(data => {
                DIV.innerHTML = `
                    <p>fetch nombre = ${data.name}</p>
                    <p>fetch nombre = ${data.lastName}</p>
                    <p>fetch nombre = ${data.age}</p>
                `;
            });
    });
    
});