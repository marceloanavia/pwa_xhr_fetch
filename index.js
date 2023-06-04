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
    
});