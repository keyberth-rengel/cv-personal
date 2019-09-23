let menu = document.getElementById('menu-nav');
let menuToggle = document.getElementById('menuToggle');
let navClosed = document.querySelector('.navClosed');
menuToggle.addEventListener('click', () => {
    menu.classList.toggle('open');
});

let containerAptitud = document.querySelectorAll('.skillbar');
let porcentaje = document.querySelectorAll('.skillbar-bar');
let divPorcentaje = document.querySelectorAll('.skill-bar-percent')

    Object.keys(containerAptitud).map( index => {
        let valor = containerAptitud[index].dataset.percent;

        return (
            porcentaje[index].style.width = `${valor}%`,
            divPorcentaje[index].innerHTML = `${valor}%`

        )
    } );

let form = document.getElementById('form-contacto');
const nombre = document.getElementById('name');
const correo = document.getElementById('email');
const asunto = document.getElementById('asunto');
const contenido = document.getElementById('message');

const mensaje = document.getElementById('alerta');
form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (nombre.value === '' || correo.value === '' || asunto.value === '' || contenido.value === '') {
     
        mensaje.innerHTML = 'Por favor llene todos los campos del formulario';
        mensaje.classList.toggle('alert-danger');
        setTimeout( () => {
            mensaje.innerHTML = '';
            mensaje.classList.toggle('alert-danger');

        }, 3000 );
        return;
        
    }
    mensaje.innerHTML = '<div class="sk-circle"><div class="sk-circle1 sk-child"></div><div class="sk-circle2 sk-child"></div><div class="sk-circle3 sk-child"></div><div class="sk-circle4 sk-child"></div><div class="sk-circle5 sk-child"></div><div class="sk-circle6 sk-child"></div><div class="sk-circle7 sk-child"></div><div class="sk-circle8 sk-child"></div><div class="sk-circle9 sk-child"></div><div class="sk-circle10 sk-child"></div><div class="sk-circle11 sk-child"></div><div class="sk-circle12 sk-child"></div></div>';

    

    const consultar = async () => {
        let sendEmail = {
            nombre: nombre.value,
            correo: correo.value,
            asunto: asunto.value,
            contenido: contenido.value
        }
        const opciones = {
            method: 'POST', body: JSON.stringify(sendEmail), headers:{     'Content-Type': 'application/json' }
        }
        let peticion = await fetch("https://envio-mail.herokuapp.com/email", opciones);
        let res = await peticion.json();
        return res;

    }

    consultar()
        .then( res => {
             if (res.status === false) {


                mensaje.innerHTML = res.message;
                mensaje.classList.toggle('alert-danger');

                setTimeout( () => {
                    mensaje.innerHTML = '';
                    mensaje.classList.toggle('alert-danger');
        
                }, 3000 );
                return;

            }

            mensaje.innerHTML = res.message;
            mensaje.classList.toggle('alert-success');

            setTimeout( () => {
                mensaje.innerHTML = '';
                mensaje.classList.toggle('alert-success');
    
            }, 3000 );


        } )
        .catch( () => {
            
            mensaje.innerHTML = 'Mensaje no enviado, Intentelo nuevamente';
            mensaje.classList.toggle('alert-success');
            setTimeout( () => {
                mensaje.innerHTML = '';
                mensaje.classList.toggle('alert-success');
    
            }, 3000 );
        } ); 
});