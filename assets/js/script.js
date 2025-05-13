

//Test1
/* const form = document.querySelector('#contact-form');


let nom = document.getElementById('#nom');



let email = document.getElementById('#email');


let message = document.getElementById('#message');
 */

//Test2

/* document.addEventListener("DOMContentLoaded", function() {
    let form = document.getElementById("contact-form");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Empêcher l'envoi du formulaire

        let nom = document.getElementById("nom").value;
        let email = document.getElementById("email").value;
        let message = document.getElementById("message").value;

        // Je test les valeurs
        console.log("Nom :", nom);
        console.log("Email :", email);
        console.log("Message :", message);
    });
}); */

//Test3
// On attend que le DOM soit chargé avant d'exécuter le script
const form = document.querySelector('form');

// Ajout d'un écouteur d'événement sur le formulaire pour écouter le submit
form.addEventListener("submit", (event) => {
    // On empêche le comportement par défaut
    event.preventDefault();


    // On récupère la valeur des champs input name/email/message
    let nom = document.getElementById('nom').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    // On fait la vérification pour le nom/email/message
     /* nom = document.getElementById('nom');
     valeurNom = nom.value;

     email = document.getElementById('email');
     valeurEmail = email.value;

     message = document.getElementById('message');
     valeurMessage = message.value; */

    if (nom === "" || email === "" || message === "") {
        alert('veuillez remplir les champs manquants');
    } else {
        alert('formulaire envoyé');
    }

});