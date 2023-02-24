<?php
  require('conexion.php');
  
  $result = $conn->query("SELECT * FROM Candidato");

  $html = "<option value='0'>Seleccione:</option>";

  foreach ($result as $row){
      $html .=  "<option value='".$row['candidato_id']."'>".$row['nombre']."</option>";
  }

  echo $html;
?>