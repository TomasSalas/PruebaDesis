<?php
  require('conexion.php');

  $nombre = ($_POST["nombre"]);
  $alias = ($_POST["alias"]);
  $rut = ($_POST["rut"]);
  $email = ($_POST["email"]);
  $region = ($_POST["region"]);
  $comuna = ($_POST["comuna"]);
  $candidato = ($_POST["candidato"]);
  $web = ($_POST["web"]);
  $tv = ($_POST["tv"]);
  $redSocial = ($_POST["redSocial"]);
  $amigo = ($_POST["amigo"]);

  $sql = "INSERT INTO Informacion (nombre, alias, rut, email, region_id, comuna_id, candidato_id, web, tv, redSocial, amigo) VALUES('$nombre', '$alias', '$rut', '$email', '$region', '$comuna', '$candidato', '$web', '$tv', '$redSocial', '$amigo')";
  
  if (mysqli_query($conn, $sql)){
    $data = 1;
  }else{
    $data = 2;
  }

  echo $data;
?>