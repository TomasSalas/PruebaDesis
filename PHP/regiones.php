<?php
  require('conexion.php');
  
  $result = $conn->query("SELECT * FROM regiones");

  $html = "<option value='0'>Seleccione:</option>";

  foreach ($result as $row){
      $html .=  "<option value='".$row['region_id']."'>".$row['region_nombre']."</option>";
  }

  echo $html;
?>