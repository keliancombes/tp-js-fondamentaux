console.log("Laboratoire prêt !");
const nom = "combes";
let age = 16;
const motDePasseAttendu = "secret123";
let motDePasseUtilisateur = "secret123";
if ( motDePasseUtilisateur === motDePasseAttendu) {
    console.log("Accès autorisé. Bienvenue !");
} else if (motDePasseUtilisateur.length < 8 ) {
    console.log("Accès refusé. Votre mot de passe est trop court (8 caractères min).");
} else {
    console.log("Accès refusé. Mot de passe incorrect.");
}