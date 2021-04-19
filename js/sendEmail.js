const name = document.getElementById("InputName");
const email = document.getElementById("InputEmail");
const asunto = document.getElementById("InputSubject");
const mensaje = document.getElementById("InputMessage");
const btn = document.getElementById("submit");

const sendEmail = {
    user_name: name,
    email_user: email,
    typeMsg: asunto,
    mensj: mensaje,
  };

btn.addEventListener("click", () => {
      const opciones = {
        method: "POST",
        body: JSON.stringify(sendEmail),
        headers: { "Content-Type": "application/json" },
      };
      
      let peticion = await fetch("https://envio-mail.herokuapp.com/email", opciones);
      let res = await peticion.json();
});


