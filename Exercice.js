function verifierDate() {
    const date = document.getElementById("dateDepart").value;
    const message = document.getElementById("message");

    if (date === "") {
        message.innerHTML = "⚠️ Veuillez préciser la date de départ avant de continuer.";
    } else {
        message.innerHTML = "";
    }
}
function calculerPrix() {

    const depart = document.getElementById("depart").value;
    const destination = document.getElementById("destination").value;

    const nbAdulte = parseInt(document.getElementById("adulte").value) || 0;
    const nbEnfant = parseInt(document.getElementById("enfant").value) || 0;
    const nbBebe = parseInt(document.getElementById("bebe").value) || 0;

    let prixAdulte = 0;

    // Tableau des prix
    if (depart === "tunis" && destination === "france") {
        prixAdulte = 300;
    } 
    else if (depart === "tunis" && destination === "italie") {
        prixAdulte = 200;
    } 
    else if (depart === "maroc" && destination === "france") {
        prixAdulte = 400;
    } 
    else if (depart === "maroc" && destination === "italie") {
        prixAdulte = 500;
    }
    else if (depart === "maghreb" && destination === "europe") {
    prixAdulte = 350;
}

    // Calculs
    const totalAdulte = nbAdulte * prixAdulte;
    const totalEnfant = nbEnfant * (prixAdulte * 0.5);
    const totalBebe = nbBebe * (prixAdulte * 0.3);

    const totalFinal = totalAdulte + totalEnfant + totalBebe;

    document.getElementById("resultat").value = totalFinal;
    console.log("depart:", depart);
    console.log("destination:", destination);
}