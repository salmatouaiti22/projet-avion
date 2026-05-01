<?php
$conn = new mysqli("localhost", "root", "", "airline_reservation");

if ($conn->connect_error) {
    die("Connection failed");
}

$nom = $_POST['nom'];
$prenom = $_POST['prenom'];
$email = $_POST['email'];
$depart = $_POST['depart'];
$destination = $_POST['destination'];
$date_depart = $_POST['dateDepart'];
$adulte = $_POST['adulte'] ?? 0;
$enfant = $_POST['enfant'] ?? 0;
$bebe   = $_POST['bebe'] ?? 0;

$sql = "INSERT INTO reservations 
(nom, prenom, email, depart, destination, date_depart, adulte, enfant, bebe)
VALUES 
('$nom', '$prenom', '$email', '$depart', '$destination', '$date_depart', '$adulte', '$enfant', '$bebe')";
if ($conn->query($sql)) {
    echo "Reservation saved successfully!";
} else {
    echo "Error: " . $conn->error;
}

$conn->close();
?>